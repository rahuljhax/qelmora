export default function AcceptInviteForm() {
    return (
        <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Accept Invitation</h1>
                <p className="text-sm text-slate-400 mt-2">Set up your profile and password to get started</p>
            </div>

            <form className="space-y-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-200">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                </div>

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

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 mt-2 cursor-pointer"
                >
                    Set Password & Accept Invite
                </button>
            </form>
        </div>
    );
}