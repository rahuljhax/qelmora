import { useNavigate } from "react-router-dom";

export const TaskCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/dashboard/projects/123/tasks/123')} className="cursor-pointer p-5 bg-slate-800/90 border border-slate-700/70 hover:border-slate-600 rounded-2xl shadow-sm transition-all duration-200 flex flex-col gap-3 group">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    Fix Navigation Bar Responsiveness
                </h2>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    In Progress
                </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
                Ensure navigation drawer closes automatically on route selection.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-slate-700/50 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                        High
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-700/60 text-slate-300">
                        Bug
                    </span>
                </div>
                <span className="text-slate-400 text-[11px]">Created: Aug 26</span>
            </div>
        </div>
    );
};