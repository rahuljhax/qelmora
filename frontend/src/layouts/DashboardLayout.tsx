import { Outlet } from "react-router-dom";
import { Sidebar } from "../features/dashboard/components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex w-screen min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            <Sidebar />
            <main className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-900">
                <Outlet />
            </main>
        </div>
    )
}
export default DashboardLayout;