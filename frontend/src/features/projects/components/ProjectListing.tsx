import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectListing() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <span className="text-xl font-bold text-slate-100 tracking-tight">Projects</span>
                <Link href={'/dashboard/projects/create'} className="px-4 py-2 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100">
                    Create Project
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}