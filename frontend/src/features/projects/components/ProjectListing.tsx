'use client'
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/projects.service";
import { Project } from "../types/projects.type";

export default function ProjectListing() {
    const fetchProjects = async () => {
        const response = await getProjects();
        if (!response.success) {
            throw new Error(response.message)
        }
        return response.data;
    }

    const { data: projects = [], isPending, error } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        staleTime: 60 * 1000
    });

    if (isPending) {
        return <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-slate-200"></div>
        </div>
    }

    if (error) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <span className="text-xl font-bold text-slate-100 tracking-tight">Projects</span>
                <Link href={'/dashboard/projects/create'} className="px-4 py-2 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100">
                    Create Project
                </Link>
            </div>
            {projects.length === 0 ? (
                <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <p className="text-slate-400 text-sm">No projects found. Create your first project!</p>
                </div>
            ) : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.length && projects.map((project: Project) => <ProjectCard key={project.id} project={project} />)}
            </div>}

        </div>
    );
}