import { useNavigate } from "react-router-dom"
import { TaskForm } from "../components/TaskForm"

export const CreateTaskPage = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="cursor-pointer bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all py-2 px-4 rounded-xl text-sm font-medium flex items-center gap-1.5 shadow-sm"
                    >
                        &larr; Back
                    </button>
                    <h2 className="dashboard-title">Create Task</h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    Add a new task to your project workspace.
                </p>
            </div>
            <TaskForm />
        </div>
    );
};