'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { membersSchema, membersSchemaType } from "../schema/members.schema";
import { useAuth } from "@/features/auth/context/AuthContext";
import toast from "react-hot-toast";
import { sendInvite } from "../services/members.service";

export default function MemberForm() {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm({
        resolver: zodResolver(membersSchema)
    });
    const handleFormSubmit = async (data: membersSchemaType) => {
        try {
            const payload = {
                email: data.email,
                role: data.role,
                invitedBy: user?.id,
                organization: user?.organization
            }
            const response = await sendInvite(payload);
            if (response.success) {
                toast((t) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '14px', wordBreak: 'break-all' }}>
                            {response.url}
                        </span>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(response.url);
                                toast.success("Copied to clipboard!", { id: 'copy-success' });
                                toast.dismiss(t.id); // Closes the original URL toast automatically
                            }}
                            style={{
                                background: '#0070f3',
                                color: '#fff',
                                border: 'none',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Copy
                        </button>
                    </div>
                ), {
                    duration: 5000, // Keeps the toast visible long enough for the user to act
                });
                reset();
            }
        } catch (err: any) {
            toast.error(err.response.message || err.message || 'Something went wrong')
        }
    }
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full space-y-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    {...register('email')}
                    placeholder="member@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-medium text-slate-200">
                    Role
                </label>
                <select
                    id="role"
                    defaultValue="member"
                    {...register('role')}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-slate-600 transition-colors cursor-pointer"
                >
                    <option value="manager" className="bg-slate-900 text-slate-100">Manager</option>
                    <option value="member" className="bg-slate-900 text-slate-100">Member</option>
                </select>
                {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>}
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2.5 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 cursor-pointer"
                >
                    {isSubmitting ? 'Cooking...' : 'Submit'}
                </button>
            </div>
        </form>
    );
}