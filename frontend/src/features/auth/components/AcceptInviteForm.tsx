'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { acceptInvitationSchema, acceptInvitationSchemaType } from "../schema/auth.schema";
import { authService } from "../services/auth.service";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";


export default function AcceptInviteForm() {
    const params = useSearchParams();
    const router = useRouter();
    const token = params.get('token');
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(acceptInvitationSchema)
    });

    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    }, [token])

    const handleFormSubmit = async (data: acceptInvitationSchemaType) => {
        try {
            const payload = {
                name: data.name,
                password: data.password,
                token
            }
            const response = await authService.acceptInvitation(payload);
            if (response.success) {
                toast.success(response.message || 'User onboard successfully');
                router.replace('/login');
            }
        } catch (err: any) {
            toast.error(err.response.message || err.message || 'Something went wrong ! Please try after sometime')
        }
    }
    return (
        <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Accept Invitation</h1>
                <p className="text-sm text-slate-400 mt-2">Set up your profile and password to get started</p>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-200">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        {...register('name')}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-slate-200">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        {...register('password')}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password" className="text-sm font-medium text-slate-200">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        placeholder="••••••••"
                        {...register('confirmPassword')}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 mt-2 cursor-pointer"
                >
                    {isSubmitting ? 'Wait...' : 'Set Password & Accept Invite'}
                </button>
            </form>
        </div>
    );
}