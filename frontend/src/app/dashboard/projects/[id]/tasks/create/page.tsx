import TaskForm from "@/features/projects/components/TaskForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
    return <div className="space-y-6">
        <Link
            href="/dashboard/projects/123"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
        >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
        </Link>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Create project</h1>
        <TaskForm />
    </div>
}