export default function MemberForm() {
    return (
        <form className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full space-y-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="member@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium text-slate-200">
                    Role
                </label>
                <select
                    name="role"
                    id="role"
                    defaultValue="member"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                >
                    <option value="manager" className="bg-slate-900 text-slate-100">Manager</option>
                    <option value="member" className="bg-slate-900 text-slate-100">Member</option>
                </select>
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="px-4 py-2.5 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}