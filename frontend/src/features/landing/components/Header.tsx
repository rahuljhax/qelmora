import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-slate-950 border-b border-slate-800 text-slate-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-slate-100 group-hover:bg-slate-700 transition-colors">
                        Q
                    </div>
                    <span className="font-semibold text-slate-100 text-base tracking-tight">Qelmora</span>
                </Link>
                <div className="flex items-center gap-3 text-sm">
                    <Link
                        href="/login"
                        className="px-3.5 py-1.5 rounded-md text-slate-300 hover:text-slate-100 hover:bg-slate-900 border border-transparent transition-colors font-medium"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="px-3.5 py-1.5 rounded-md bg-slate-100 text-slate-950 hover:bg-slate-200 transition-colors font-medium border border-slate-100"
                    >
                        Signup
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-3.5 py-1.5 rounded-md bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800 transition-colors font-medium"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    );
}