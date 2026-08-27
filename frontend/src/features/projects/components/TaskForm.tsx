export const TaskForm = () => {
    return (
        <form className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-slate-300">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Task Title..."
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-slate-300">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows={4}
                    placeholder="Add description here..."
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm resize-y"
                ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                    <label htmlFor="priority" className="block text-sm font-medium text-slate-300">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm cursor-pointer"
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="status" className="block text-sm font-medium text-slate-300">
                        Status
                    </label>
                    <select
                        id="status"
                        defaultValue="todo"
                        className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm cursor-pointer"
                    >
                        <option value="todo">Todo</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="progress" className="block text-sm font-medium text-slate-300">
                        Progress
                    </label>
                    <select
                        id="progress"
                        defaultValue="0"
                        className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm cursor-pointer"
                    >
                        <option value="0">0%</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                        <option value="100">100%</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="type" className="block text-sm font-medium text-slate-300">
                        Type
                    </label>
                    <select
                        id="type"
                        defaultValue="bug"
                        className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm cursor-pointer"
                    >
                        <option value="bug">Bug</option>
                        <option value="ui">UI</option>
                        <option value="improvement">Improvement</option>
                    </select>
                </div>
            </div>

            <div className="space-y-3 bg-slate-900/40 p-4 rounded-xl border border-slate-700/50">
                <label htmlFor="attachement" className="block text-sm font-medium text-slate-300">
                    Attachment
                </label>
                <p className="text-xs text-slate-400">Select Your Attachment Type</p>

                <div className="flex items-center gap-6 py-1">
                    <label htmlFor="file" className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                        <input type="radio" name="attachement_type" id="file" className="accent-indigo-500 cursor-pointer" />
                        File
                    </label>
                    <label htmlFor="url" className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                        <input type="radio" name="attachement_type" id="url" className="accent-indigo-500 cursor-pointer" />
                        URL
                    </label>
                </div>

                <div className="space-y-3 pt-1">
                    <input
                        type="file"
                        name="file"
                        id="attachement"
                        className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-700 file:text-slate-200 hover:file:bg-slate-600 cursor-pointer transition-all"
                    />
                    <input
                        type="text"
                        name="url"
                        placeholder="Enter the URL here..."
                        className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end pt-2">
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-sm shadow-indigo-600/20 cursor-pointer"
                >
                    Create Task
                </button>
            </div>
        </form>
    );
};