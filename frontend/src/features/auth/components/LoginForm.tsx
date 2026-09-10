'use client';
import Link from "next/link";
import { authService } from "../services/auth.service";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "../schema/auth.schema";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const { login } = useAuth();
    const router = useRouter();
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<loginSchemaType>({
        resolver: zodResolver(loginSchema)
    })

    const handleLogin = async (data: loginSchemaType) => {
        try {
            const response = await authService.login(data);
            if (response.success) {
                login(response.data, response.accessToken);
                toast.success(response.message);
                router.push('/dashboard')
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    }
    return (
        <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight">Welcome back</h1>
                <p className="text-sm text-slate-400 mt-2">Enter your credentials to access your account</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-200">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="text-sm font-medium text-slate-200">
                            Password
                        </label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        {...register('password')}
                        className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                    />
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full py-2.5 px-4 bg-slate-100 text-slate-950 hover:bg-slate-200 rounded-lg text-sm font-semibold transition-colors border border-slate-100 mt-2"
                >
                    {isSubmitting ? 'Loading...' : 'Login'}
                </button>
            </form>

            <div className="mt-6 text-center text-xs text-slate-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-slate-200 font-medium hover:underline">
                    Sign up
                </Link>
            </div>
        </div>
    );
}