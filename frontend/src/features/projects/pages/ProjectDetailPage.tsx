import { useNavigate, useParams } from "react-router-dom";
import { TasksListing } from "../components/TasksListing";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  return (
    <div className="space-y-8">
      {/* Header section with back button & project title */}
      <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all py-2 px-4 rounded-xl text-sm font-medium flex items-center gap-1.5 shadow-sm"
            >
              &larr; Back
            </button>
            <h2 className="dashboard-title">Project Name</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(`/dashboard/projects/${id}/edit`)} className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white text-sm font-medium rounded-xl transition-all shadow-sm">Edit Project</button>
            <button className="px-3 py-2 bg-rose-600/90 hover:bg-rose-600 cursor-pointer text-white text-sm font-medium rounded-xl transition-all shadow-sm">Delete Project</button>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus atque quaerat aliquid numquam sunt dolore quas tenetur. Expedita maxime, deleniti mollitia hic quod dicta quos nostrum. Excepturi nobis magnam labore.
        </p>
      </div>

      {/* Tasks Section Header & Listing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-100 tracking-tight">Tasks</h3>
          <div className="flex flex-1 justify-end gap-5 items-center">
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              6 Tasks
            </span>
            <button onClick={() => navigate(`/dashboard/projects/${id}/tasks/create`)} className="px-3 py-2 bg-slate-600 hover:bg-slate-700 cursor-pointer text-white text-sm font-medium rounded-xl transition-all shadow-sm">Create Task</button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-3 bg-slate-800/60 p-3 sm:p-4 rounded-2xl border border-slate-700/60 shadow-sm">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="status" className="sr-only text-xs font-medium text-slate-400 hidden sm:inline">Status:</label>
            <select
              name="status"
              id="status"
              defaultValue="all"
              className="bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 cursor-pointer transition-all"
            >
              <option value="all">Status : All</option>
              <option value="todo">Todo</option>
              <option value="inprogress">InProgress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="priority" className="sr-only text-xs font-medium text-slate-400 hidden sm:inline">Priority:</label>
            <select
              name="priority"
              id="priority"
              defaultValue="all"
              className="bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 cursor-pointer transition-all"
            >
              <option value="all">Priority: All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="type" className="sr-only text-xs font-medium text-slate-400 hidden sm:inline">Type:</label>
            <select
              name="type"
              id="type"
              defaultValue="all"
              className="bg-slate-900/80 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 cursor-pointer transition-all"
            >
              <option value="all">Type: All</option>
              <option value="bug">Bug</option>
              <option value="ui">UI</option>
              <option value="improvement">Improvement</option>
            </select>
          </div>
        </div>

        <TasksListing />
      </div>
    </div>
  );
};