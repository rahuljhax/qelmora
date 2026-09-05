import TaskCard from "@/features/projects/components/TaskCard";
import { Search, Filter } from "lucide-react";

export default function MyTasks() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                    <h1 className="text-xl font-bold text-slate-100 tracking-tight">My Tasks</h1>
                    <p className="text-xs text-slate-400 mt-0.5">Filter and manage all tasks assigned to you</p>
                </div>
            </div>

            {/* Full-width Filter Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-200">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold">Filter Tasks</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Search Bar */}
                    <div>
                        <label className="text-xs font-medium text-slate-400 block mb-1.5">
                            Search Task
                        </label>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search by title..."
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div>
                        <label htmlFor="status" className="text-xs font-medium text-slate-400 block mb-1.5">
                            Status
                        </label>
                        <select
                            name="status"
                            id="status"
                            defaultValue="all"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-slate-700 transition-colors cursor-pointer"
                        >
                            <option value="all" className="bg-slate-900">All Statuses</option>
                            <option value="todo" className="bg-slate-900">Todo</option>
                            <option value="in-progress" className="bg-slate-900">In Progress</option>
                            <option value="done" className="bg-slate-900">Done</option>
                        </select>
                    </div>

                    {/* Priority Filter */}
                    <div>
                        <label htmlFor="priority" className="text-xs font-medium text-slate-400 block mb-1.5">
                            Priority
                        </label>
                        <select
                            name="priority"
                            id="priority"
                            defaultValue="all"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-slate-700 transition-colors cursor-pointer"
                        >
                            <option value="all" className="bg-slate-900">All Priorities</option>
                            <option value="high" className="bg-slate-900">High</option>
                            <option value="medium" className="bg-slate-900">Medium</option>
                            <option value="low" className="bg-slate-900">Low</option>
                        </select>
                    </div>

                    {/* Project Filter */}
                    <div>
                        <label htmlFor="project" className="text-xs font-medium text-slate-400 block mb-1.5">
                            Project
                        </label>
                        <select
                            name="project"
                            id="project"
                            defaultValue="all"
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-slate-700 transition-colors cursor-pointer"
                        >
                            <option value="all" className="bg-slate-900">All Projects</option>
                            <option value="website" className="bg-slate-900">Website Development</option>
                            <option value="app" className="bg-slate-900">App Development</option>
                            <option value="seo" className="bg-slate-900">SEO</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Task Listing below filter bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
}

