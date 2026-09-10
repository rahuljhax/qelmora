'use client'
import React from 'react';
import Link from 'next/link';
import { NavItem } from '../types/type';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderKanban, Users, AlertCircle, Settings, Divide, LogOut } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';

export default function Sidebar() {
    const pathName = usePathname();
    const { user, isLoading, isAuthenticated, logout } = useAuth();
    const navItems: NavItem[] = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <LayoutDashboard className="w-5 h-5" />
        },
        {
            name: "Projects",
            href: "/dashboard/projects",
            icon: <FolderKanban className="w-5 h-5" />
        },
        {
            name: "Members",
            href: "/dashboard/members",
            icon: <Users className="w-5 h-5" />
        },
        {
            name: "My Tasks",
            href: "/dashboard/tasks/mine",
            icon: <AlertCircle className="w-5 h-5" />
        }
    ];

    return (
        <aside className="w-64 bg-slate-950 border-r border-slate-800 text-slate-300 flex flex-col h-full shrink-0 select-none">
            {/* Brand Header */}
            <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-800">
                <div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-100 font-semibold text-sm">
                    Q
                </div>
                <span className="font-semibold text-slate-100 text-base tracking-tight">Qelmora</span>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
                <div className="px-3 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Menu
                </div>
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = item.href === pathName;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${isActive
                                    ? "bg-slate-800 text-slate-100 border-slate-700"
                                    : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                                    }`}
                            >
                                <span className={isActive ? "text-slate-100" : "text-slate-400 group-hover:text-slate-200"}>
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/30 border border-transparent hover:border-red-900/50 transition-colors cursor-pointer text-left mt-2"
                    >
                        <LogOut className="w-5 h-5 text-red-400" />
                        <span>Logout</span>
                    </button>
                </nav>
            </div>

            {/* Footer Profile / Workspace info */}
            {isLoading
                ? <></>
                : isAuthenticated
                    ? < div className="p-3 border-t border-slate-800">
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                                alt="user avatar"
                                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 object-cover"
                            />
                            <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-sm font-medium text-slate-200 truncate">{user?.name}</span>
                                <span className="text-xs text-slate-400 truncate">{user?.email}</span>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </aside >
    );
}
