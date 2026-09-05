import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                Project Management Platform
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100 leading-tight mb-6">
                Qelmora Project Management Platform
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Streamline workflows, manage issues effortlessly, and collaborate seamlessly with your team in one clean, minimal workspace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/signup"
                    className="px-6 py-3 rounded-lg bg-slate-100 text-slate-950 hover:bg-slate-200 font-medium text-sm transition-colors border border-slate-100"
                >
                    Get Started Now
                </Link>
            </div>
        </section>
    );
}