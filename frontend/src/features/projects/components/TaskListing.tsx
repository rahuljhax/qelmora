import TaskCard from '@/features/projects/components/TaskCard';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function TaskListing() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                    <h2 className="text-lg font-bold text-slate-100 tracking-tight">Tasks</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Manage and track all tasks for this project</p>
                </div>
                <Link
                    href={'/dashboard/projects/123/tasks/create'}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100"
                >
                    <Plus className="w-4 h-4" />
                    <span>Create Task</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
}