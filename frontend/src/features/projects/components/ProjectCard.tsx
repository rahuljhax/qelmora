import Link from "next/link";
import { Project } from "../types/projects.type";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/dashboard/projects/${project.id}`}>
            <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors cursor-pointer group">
                <span className="block text-base font-semibold text-slate-100 group-hover:text-white transition-colors mb-1.5">
                    {project.name}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}