import { useNavigate } from "react-router-dom";

export const ProjectCard = () => {
    const router = useNavigate();
    const goToDetail = () => {
        router('/dashboard/projects/123')
    }
    return (
        <div onClick={goToDetail} className="p-6 bg-slate-800/90 border border-slate-700/70 hover:border-indigo-500/50 rounded-2xl shadow-sm hover:shadow-indigo-500/10 transition-all duration-200 cursor-pointer flex flex-col gap-3 group">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    Website Design Project
                </h2>
                <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    12 Tasks
                </span>
            </div>
            <span className="text-sm text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing ...
            </span>
        </div>
    );
};