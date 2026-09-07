'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signupSchema, SingupSchemaType } from "../schema/auth.schema";
import { authService } from "../services/auth.service";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function SignupForm() {
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            role: 'admin'
        }
    })
    const onSubmit = async (data: SingupSchemaType) => {
        try {
            const response = await authService.signup(data);
            if (response.success) {
                toast.success(response.message);
                login(response.data, response.accessToken);
            }
        } catch (err: any) {
            console.log(err)
        }
    }
    return (
        <div className="w-full max-w-lg bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Create an account</h1>
                <p className="text-sm text-slate-400 mt-2">Get started with Qelmora workspace in seconds</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="full_name" className="text-sm font-medium text-slate-200">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full_name"
                            {...register("name")}
                            placeholder="John Doe"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="org_name" className="text-sm font-medium text-slate-200">
                            Organization Name
                        </label>
                        <input
                            type="text"
                            id="org_name"
                            {...register("organization")}
                            placeholder="Acme Corp"
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                        {errors.organization && <p className="text-red-400 text-xs mt-1">{errors.organization.message}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Work Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            placeholder="••••••••"
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
                            {...register("confirmPassword")}
                            className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                        {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full py-2.5 px-4 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 mt-4"
                >
                    {isSubmitting ? 'Loading...' : 'Create Workspace'}
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