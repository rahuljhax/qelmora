import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 sm:px-12 py-5 border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="flex items-center gap-2.5 text-lg font-bold text-white tracking-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
          <span>Qelmora</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-slate-400 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm shadow-indigo-600/20 active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8">
          Simple & Minimalist Project Platform
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
          Manage projects with <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
            clarity & precision.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
          Qelmora brings your tasks, teams, and timelines together in one lightweight, distraction-free workspace.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/signup"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            Get Started Free
          </Link>
          <Link
            to="/dashboard"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium px-7 py-3.5 rounded-xl transition-all text-sm"
          >
            Open Dashboard
          </Link>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-900">
        © {new Date().getFullYear()} Qelmora. Built for speed and focus.
      </footer>
    </div>
  );
};

export default HomePage;
