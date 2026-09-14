'use client';
import { useAuth } from "@/features/auth/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isLoading, isAuthenticated } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.replace('/login')
        }
    }, [isLoading, isAuthenticated, router])

    if (isLoading) {
        return <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-slate-200"></div>
        </div>
    }
    if (!isAuthenticated) {
        return null;
    }
    return <>{children}</>;
}
export default ProtectedRoute;