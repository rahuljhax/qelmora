import { Outlet } from "react-router-dom";
import { Sidebar } from "../features/dashboard/components/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex w-full min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
            <Sidebar />
            <main className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-900">
                <Outlet />
            </main>
        </div>
    )
}
export default DashboardLayout;