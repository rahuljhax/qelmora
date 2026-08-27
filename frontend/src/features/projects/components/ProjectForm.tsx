export const ProjectForm = () => {
    return (
        <form className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
                <label
                    htmlFor="project_name"
                    className="block text-sm font-medium text-slate-300"
                >
                    Project Name
                </label>
                <input
                    type="text"
                    id="project_name"
                    name="project_name"
                    placeholder="Enter project name..."
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="project_description"
                    className="block text-sm font-medium text-slate-300"
                >
                    Project Description
                </label>
                <textarea
                    name="project_description"
                    id="project_description"
                    rows={4}
                    placeholder="Brief description of the project..."
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm resize-y"
                ></textarea>
            </div>

            <div className="flex items-center justify-end pt-2">
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-sm shadow-indigo-600/20 cursor-pointer"
                >
                    Create Project
                </button>
            </div>
        </form>
    );
};
