import Link from "next/link";

export default function ProjectCard() {
    return (
        <Link href={'/dashboard/projects/123'}>
            <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors cursor-pointer group">
                <span className="block text-base font-semibold text-slate-100 group-hover:text-white transition-colors mb-1.5">
                    Website Designing Project
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                    Lorem ipsum, dolor sit
                </p>
            </div>
        </Link>
    );
}