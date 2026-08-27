import { useNavigate } from "react-router-dom";

export const TaskDetailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 w-full">
            {/* Header with Back button and Task title */}
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="cursor-pointer bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all py-2 px-4 rounded-xl text-sm font-medium flex items-center gap-1.5 shadow-sm"
                        >
                            &larr; Back
                        </button>
                        <h2 className="dashboard-title">Fix Navigation Bar Responsiveness</h2>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/dashboard/projects/123/tasks/345/edit')}
                            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white text-sm font-medium rounded-xl transition-all shadow-sm"
                        >
                            Edit Task
                        </button>
                        <button
                            className="px-3 py-2 bg-red-800 hover:bg-red-500 cursor-pointer text-white text-sm font-medium rounded-xl transition-all shadow-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                {/* Status, Priority & Type Badges */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Status: In Progress
                    </span>
                    <span className="font-medium text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                        Priority: High
                    </span>
                    <span className="font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        Type: Bug
                    </span>
                </div>
            </div>

            {/* Main Content Details Card */}
            <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Description
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed">
                        Ensure navigation drawer closes automatically on route selection in mobile viewports. Fix layout shift when toggling dark mode sidebar.
                    </p>
                </div>

                {/* Timestamps & Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-700/50 text-xs">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/40 flex flex-col gap-1">
                        <span className="text-slate-400 font-medium">Created At</span>
                        <span className="text-slate-200">August 26, 2026 at 01:30 AM</span>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/40 flex flex-col gap-1">
                        <span className="text-slate-400 font-medium">Last Updated</span>
                        <span className="text-slate-200">Just now</span>
                    </div>
                </div>
            </div>
        </div>
    );
};