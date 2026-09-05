import Sidebar from "@/features/dashboard/components/Sidebar";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
    return (
        <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}