'use client';
import Link from "next/link";
import { ArrowLeft, DeleteIcon, Edit3, Trash } from "lucide-react";
import TaskListing from "./TaskListing";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProject, getProjectById } from "../services/projects.service";
import toast from "react-hot-toast";

export default function ProjectDetail() {
    const queryClient = useQueryClient();
    const params = useParams();
    const projectId = params.id as string;
    const router = useRouter();

    const { data: project, isLoading, error } = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProjectById(projectId),
        enabled: !!projectId
    })

    const { mutate, isPending } = useMutation({
        mutationFn: () => deleteProject(projectId),
        onSuccess: (response) => {
            toast.success(response.message);
            queryClient.invalidateQueries({
                queryKey: ['projects']
            })
            router.replace('/dashboard/projects')
        },
        onError: (err) => {
            toast.error(err?.message || 'Something went wrong')
        }
    })
    const handleDelete = () => {
        if (window.confirm('Are you sure! You want to delete this project')) {
            mutate();
        }
    }
    if (isLoading) {
        return <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-slate-200"></div>
        </div>
    }
    if (error) {
        return <h1>{error?.message}</h1>
    }
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <Link
                    href="/dashboard/projects"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Projects</span>
                </Link>
                <div className="flex gap-3">
                    <button
                        onClick={handleDelete}
                        disabled={isPending}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg transition-colors cursor-pointer"
                    >
                        <Trash className="w-3.5 h-3.5" />
                        <span>Delete Project</span>
                    </button>
                    <Link
                        href={`/dashboard/projects/${project?.data?.id}/edit`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                    >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </Link>
                </div>
            </div>
            <div className="border-b border-slate-800 pb-6 space-y-2">
                {project?.data?.name && <h1 className="text-2xl font-bold text-slate-100 tracking-tight">{project?.data?.name}</h1>}
                {project?.data?.description && <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">{project?.data?.description}</p>}
            </div>
            <TaskListing />
        </div>
    );
}