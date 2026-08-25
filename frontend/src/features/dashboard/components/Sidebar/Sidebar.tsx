import { NavLink, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const router = useNavigate();
  const handleLogout = () => {
    router('/login')
  }
  return (
    <aside className="w-60 min-w-[240px] h-screen bg-slate-900 border-r border-slate-800 flex flex-col p-5 text-slate-100">
      <div className="flex items-center gap-3 pb-5 mb-4 border-b border-slate-800">
        <span className="text-xl">⚡</span>
        <span className="text-lg font-bold tracking-tight text-slate-100">Qelmora</span>
      </div>

      <nav className="flex flex-col gap-1.5">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
              ? 'bg-slate-800 text-indigo-400 font-semibold'
              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/projects"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
              ? 'bg-slate-800 text-indigo-400 font-semibold'
              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
            }`
          }
        >
          <span>📁</span>
          <span>Projects</span>
        </NavLink>
        <button className='w-full bg-slate-400 rounded-lg px-3.5 py-2' onClick={handleLogout}>Logout</button>
      </nav>
    </aside>
  );
};