import Link from "next/link";
import { ArrowLeft, Edit3 } from "lucide-react";
import TaskListing from "./TaskListing";

export default function ProjectDetail() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <Link
                    href="/dashboard/projects"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Projects</span>
                </Link>
                <Link
                    href={'/dashboard/projects/123/edit'}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                </Link>
            </div>
            <div className="border-b border-slate-800 pb-6 space-y-2">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Website Designing Project</h1>
                <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rerum possimus beatae iure aperiam adipisci blanditiis itaque placeat excepturi dolor odio, molestias vero. Quisquam itaque dolore assumenda ipsum maiores molestias.
                </p>
            </div>
            <TaskListing />
        </div>
    );
}