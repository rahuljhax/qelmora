import Link from "next/link";

export default function TaskCard() {
    return (
        <Link href={'/dashboard/projects/123/tasks/123'} className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-colors space-y-4">
            <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-semibold text-slate-100">Implement homepage ui</span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md shrink-0">
                        High
                    </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, unde iste rerum eaque quae nesciunt saepe veritatis itaque, voluptate molestiae similique alias esse odit quibusdam doloremque libero et natus voluptatibus.
                </p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-md font-medium border border-slate-700/50">
                        UI
                    </span>
                    <span className="px-2 py-0.5 bg-slate-800/80 text-slate-400 rounded-md font-medium">
                        Todo
                    </span>
                </div>
                <span className="text-slate-400 font-medium">
                    progess : 10%
                </span>
            </div>
        </Link>
    );
}