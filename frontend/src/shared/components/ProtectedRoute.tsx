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
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-medium">
            Verifying authentication...
        </div>
    }
    if (!isAuthenticated) {
        return null;
    }
    return <>{children}</>;
}
export default ProtectedRoute;