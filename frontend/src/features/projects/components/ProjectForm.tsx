'use client'
import CustomSelect from "@/shared/components/CustomSelect";
export default function ProjectForm() {
    const options = [
        { value: 'pankaj', label: 'Pankaj' },
        { value: 'pooja', label: 'Pooja' },
        { value: 'risabh', label: 'Rishabh' },
        { value: 'priyanka', label: 'Priyanka' },
        { value: 'rita', label: 'Rita' },
    ];
    return (
        <form className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full space-y-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter project name"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-200">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows={4}
                    placeholder="Enter project description"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors resize-none"
                ></textarea>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="assignee" className="text-sm font-medium text-slate-200">
                    Assignee
                </label>
                <CustomSelect isMulti options={options} />
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="px-4 py-2.5 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 cursor-pointer"
                >
                    Create Project
                </button>
            </div>
        </form>
    );
}