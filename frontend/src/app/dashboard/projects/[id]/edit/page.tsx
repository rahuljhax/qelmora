'use client';
import ProjectForm from "@/features/projects/components/ProjectForm";
import { getProjectById } from "@/features/projects/services/projects.service";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {
    const params = useParams();
    const projectId = params.id as string;
    const { data: project, isLoading, error } = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProjectById(projectId)
    })
    if (isLoading) {
        return <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-slate-200"></div>
        </div>
    }
    if (error) {
        return <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-red-400">
            {error?.message || 'Failed to load project details. Please try again.'}
        </div>
    }
    return <div className="space-y-6">
        <Link
            href={`/dashboard/projects/${project.data.id}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors w-fit"
        >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
        </Link>
        <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Edit Project</h1>
        <ProjectForm
            initialData={project.data}
            isEdit={true}
            projectId={project.data.id}
        />
    </div>
}