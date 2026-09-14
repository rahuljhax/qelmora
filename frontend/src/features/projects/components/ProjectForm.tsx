'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useId } from 'react';
import Select from 'react-select';
import { createProjectSchema, createProjectSchemaType } from "../schema/projects.schema";
import { createProject, getProjectById, updateProject } from "../services/projects.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMembersList } from "@/features/members/services/members.service";
import { User } from "@/shared/types/shared.type";
import { Project } from "../types/projects.type";

interface ProjectFormType {
    initialData?: Project,
    isEdit?: boolean,
    projectId?: string
}
export default function ProjectForm({ initialData, isEdit = false, projectId }: ProjectFormType) {

    const queryClient = useQueryClient();
    const instanceId = useId();
    const router = useRouter();


    // Fetch Members list here 
    const { data: assigneeList = [], isLoading: isAssigneeListLoading } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const response = await fetchMembersList();
            return response.data as User[];
        }
    })

    // Modify Memberlist reponse into options value label structure 
    const assigneeListOptions = assigneeList.map(assignee => ({
        value: assignee.id,
        label: assignee.name
    }))


    const { register, control, handleSubmit, formState: { errors } } = useForm<createProjectSchemaType>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: '',
            description: '',
            assignee: []
        },
        values: initialData ? {
            name: initialData.name,
            description: initialData.description,
            assignee: initialData.assignee
        } : undefined
    })

    const { mutate, isPending } = useMutation({
        mutationFn: (data: createProjectSchemaType) => {
            console.log(isEdit, projectId)
            return (isEdit && projectId) ? updateProject(projectId, data) : createProject(data)
        },
        onSuccess: (response) => {
            toast.success(response.message);
            queryClient.invalidateQueries({
                queryKey: ['projects']
            })
            if (isEdit) {
                queryClient.invalidateQueries({
                    queryKey: ['project', projectId]
                })
            }
            router.push('/dashboard/projects');
        },
        onError: (err) => {
            toast.error(err?.message);
        }
    })

    return (
        <form onSubmit={handleSubmit((data) => mutate(data))} className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full space-y-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder="Enter project name"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-200">
                    Description
                </label>
                <textarea
                    id="description"
                    rows={4}
                    {...register('description')}
                    placeholder="Enter project description"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors resize-none"
                ></textarea>

            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="assignee" className="text-sm font-medium text-slate-200">
                    Assignee
                </label>
                <Controller name="assignee" control={control} render={({ field: { onChange, value } }) => (<Select
                    isMulti
                    options={assigneeListOptions}
                    value={assigneeListOptions.filter(opt => value?.includes(opt?.value))}
                    isSearchable
                    isLoading={isAssigneeListLoading}
                    onChange={(selectedOptions) => {
                        const ids = selectedOptions ? selectedOptions.map(opt => opt.value) : [];
                        onChange(ids);
                    }}
                    noOptionsMessage={() => 'No members found'}
                    instanceId={instanceId}
                    placeholder="Select assignees..."
                    unstyled
                    classNames={{
                        control: ({ isFocused }) =>
                            `w-full min-h-[42px] px-3 py-1.5 bg-slate-950 border rounded-lg text-sm transition-colors cursor-pointer flex items-center flex-wrap gap-1 ${isFocused ? 'border-slate-600 ring-1 ring-slate-600' : 'border-slate-800'
                            }`,
                        menu: () =>
                            'mt-1 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden text-sm z-50',
                        menuList: () => 'p-1 space-y-0.5 max-h-60 overflow-y-auto',
                        option: ({ isFocused, isSelected }) =>
                            `px-3 py-2 rounded-md transition-colors cursor-pointer text-sm ${isSelected
                                ? 'bg-slate-800 text-slate-100 font-medium'
                                : isFocused
                                    ? 'bg-slate-800/60 text-slate-200'
                                    : 'text-slate-300 hover:bg-slate-800/40'
                            }`,
                        multiValue: () =>
                            'bg-slate-800 border border-slate-700/60 text-slate-200 rounded-md px-2 py-0.5 flex items-center gap-1 text-xs font-medium',
                        multiValueLabel: () => 'text-slate-200',
                        multiValueRemove: () =>
                            'text-slate-400 hover:text-slate-100 hover:bg-slate-700/60 rounded p-0.5 transition-colors cursor-pointer',
                        placeholder: () => 'text-slate-600 text-sm',
                        input: () => 'text-slate-100 text-sm m-0 p-0',
                        singleValue: () => 'text-slate-100 text-sm',
                        valueContainer: () => 'gap-1',
                        clearIndicator: () => 'text-slate-400 hover:text-slate-200 p-1 cursor-pointer',
                        dropdownIndicator: () => 'text-slate-400 hover:text-slate-200 p-1 cursor-pointer',
                    }}
                />)} />
                {errors.assignee && <p className="text-red-400 text-xs mt-1">{errors.assignee.message}</p>}
            </div>


            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-4 py-2.5 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 cursor-pointer"
                >
                    {isPending ? (isEdit ? 'Updating' : 'Creating...') : (isEdit ? 'Update' : 'Create')}
                </button>
            </div>
        </form>
    );
}