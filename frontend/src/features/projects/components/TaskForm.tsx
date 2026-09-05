export default function TaskForm() {
    return (
        <form className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full space-y-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium text-slate-200">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter task title"
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
                    placeholder="Enter task description"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors resize-none"
                ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                <div className="flex flex-col gap-2">
                    <label htmlFor="assignee" className="text-sm font-medium text-slate-200">
                        Assignee
                    </label>
                    <select
                        name="assignee"
                        id="assignee"
                        defaultValue="me"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="me" className="bg-slate-900 text-slate-100">Me</option>
                        <option value="pooja" className="bg-slate-900 text-slate-100">Pooja Jha</option>
                        <option value="rishabh" className="bg-slate-900 text-slate-100">Rishabh Jha</option>
                        <option value="pankaj" className="bg-slate-900 text-slate-100">Pankaj Jha</option>
                        <option value="rita" className="bg-slate-900 text-slate-100">Rita Jha</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-sm font-medium text-slate-200">
                        Status
                    </label>
                    <select
                        name="status"
                        id="status"
                        defaultValue="todo"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="todo" className="bg-slate-900 text-slate-100">Todo</option>
                        <option value="in-progress" className="bg-slate-900 text-slate-100">Inprogress</option>
                        <option value="done" className="bg-slate-900 text-slate-100">Done</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="priority" className="text-sm font-medium text-slate-200">
                        Priority
                    </label>
                    <select
                        name="priority"
                        id="priority"
                        defaultValue="high"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="high" className="bg-slate-900 text-slate-100">High</option>
                        <option value="medium" className="bg-slate-900 text-slate-100">Medium</option>
                        <option value="low" className="bg-slate-900 text-slate-100">Low</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="text-sm font-medium text-slate-200">
                        Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        defaultValue="ui"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="ui" className="bg-slate-900 text-slate-100">UI/UX</option>
                        <option value="bug" className="bg-slate-900 text-slate-100">Bug</option>
                        <option value="improvement" className="bg-slate-900 text-slate-100">Improvement</option>
                        <option value="task" className="bg-slate-900 text-slate-100">Task</option>
                        <option value="testing" className="bg-slate-900 text-slate-100">Testing</option>
                        <option value="feature" className="bg-slate-900 text-slate-100">Feature</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="progress" className="text-sm font-medium text-slate-200">
                        Progress
                    </label>
                    <select
                        name="progress"
                        id="progress"
                        defaultValue="0"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    >
                        <option value="0" className="bg-slate-900 text-slate-100">0%</option>
                        <option value="10" className="bg-slate-900 text-slate-100">10%</option>
                        <option value="20" className="bg-slate-900 text-slate-100">20%</option>
                        <option value="30" className="bg-slate-900 text-slate-100">30%</option>
                        <option value="40" className="bg-slate-900 text-slate-100">40%</option>
                        <option value="50" className="bg-slate-900 text-slate-100">50%</option>
                        <option value="60" className="bg-slate-900 text-slate-100">60%</option>
                        <option value="70" className="bg-slate-900 text-slate-100">70%</option>
                        <option value="80" className="bg-slate-900 text-slate-100">80%</option>
                        <option value="90" className="bg-slate-900 text-slate-100">90%</option>
                        <option value="100" className="bg-slate-900 text-slate-100">100%</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="url" className="text-sm font-medium text-slate-200">
                        Reference URL (Figma, Docs)
                    </label>
                    <input
                        type="text"
                        id="url"
                        placeholder="https://figma.com/... or https://..."
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="attachement" className="text-sm font-medium text-slate-200">
                        Attachment (JPG, PNG, JPEG)
                    </label>
                    <input
                        type="file"
                        name="attachement"
                        id="attachement"
                        accept="image/png, image/jpeg, image/jpg"
                        className="w-full px-3.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                    />
                </div>
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="px-4 py-2.5 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 cursor-pointer"
                >
                    Create Task
                </button>
            </div>
        </form>
    );
}