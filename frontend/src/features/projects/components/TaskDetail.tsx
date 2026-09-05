import Link from "next/link";
import { ArrowLeft, Tag, AlertTriangle, Clock, Activity, Edit3 } from "lucide-react";

export default function TaskDetail() {
    return (
        <div className="space-y-6 max-w-full">
            <div className="flex justify-between items-center">
                <Link
                    href="/dashboard/projects/123"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Project</span>
                </Link>
                <Link
                    href={'/dashboard/projects/123/tasks/123/edit'}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-100 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                </Link>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
                <div className="space-y-3 border-b border-slate-800 pb-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xl font-bold text-slate-100 tracking-tight">Implement website ui</span>
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md">
                                High
                            </span>
                            <span className="px-2.5 py-1 text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 rounded-md">
                                Todo
                            </span>
                        </div>
                    </div>
                    <span className="block text-sm text-slate-400 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus earum reiciendis asperiores sit laudantium? Recusandae cupiditate cum, repudiandae veritatis non incidunt molestias est distinctio, nesciunt, beatae dignissimos! Impedit, quod voluptate.
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                    <div className="bg-slate-950/50 border border-slate-800/80 rounded-lg p-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <Tag className="w-3.5 h-3.5" />
                            <span>Type</span>
                        </div>
                        <span className="text-slate-200 font-semibold block">UI</span>
                    </div>
                    <div className="bg-slate-950/50 border border-slate-800/80 rounded-lg p-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                            <span>Priority</span>
                        </div>
                        <span className="text-amber-400 font-semibold block">High</span>
                    </div>
                    <div className="bg-slate-950/50 border border-slate-800/80 rounded-lg p-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Status</span>
                        </div>
                        <span className="text-slate-300 font-semibold block">Todo</span>
                    </div>
                    <div className="bg-slate-950/50 border border-slate-800/80 rounded-lg p-3 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <Activity className="w-3.5 h-3.5" />
                            <span>Progress</span>
                        </div>
                        <span className="text-slate-200 font-semibold block">10%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}