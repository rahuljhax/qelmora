'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/auth.types";
import apiClient, { setAccessToken } from "@/lib/apiClient";
import toast from "react-hot-toast";

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsloading] = useState<boolean>(true);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const response = await apiClient.post('/auth/refresh-token');
                if (response.data.accessToken) {
                    setAccessToken(response.data.accessToken);

                    const meResponse = await apiClient.get('/auth/me');

                    if (meResponse.data.success) {
                        setUser(meResponse.data.data)
                    }
                }
            } catch (err) {
                setUser(null);
                setAccessToken(null);
            } finally {
                setIsloading(false);
            }
        }
        initAuth();
    }, []);

    const login = (userData: User, token: string) => {
        setAccessToken(token);
        setUser(userData);
    }

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout');
        } catch (err) {
            console.log(err)
        } finally {
            toast.success('Logged out successfully!')
            setAccessToken(null);
            setUser(null);
        }
    }

    return <AuthContext.Provider value={{
        user,
        login,
        logout,
        isLoading,
        isAuthenticated: !!user
    }}>
        {children}
    </AuthContext.Provider >
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}