import Link from "next/link";

export default function SignupForm() {
    return (
        <div className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Create an account</h1>
                <p className="text-sm text-slate-400 mt-2">Get started with Qelmora workspace in seconds</p>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="full_name" className="text-sm font-medium text-slate-200">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            placeholder="John Doe"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="org_name" className="text-sm font-medium text-slate-200">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            id="org_name"
                            placeholder="Acme Corp"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Work Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirm_password" className="text-sm font-medium text-slate-200">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            placeholder="••••••••"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 mt-4"
                >
                    Create Workspace
                </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-400">
                Already have an account?{" "}
                <Link href="/login" className="text-slate-200 font-medium hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    );
}