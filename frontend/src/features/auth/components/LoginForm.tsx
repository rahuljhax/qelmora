import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all placeholder:text-slate-400"
          placeholder="name@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="password" className="text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all placeholder:text-slate-400"
          placeholder="••••••••"
        />
      </div>

      <button
        type="button"
        className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
      >
        Sign In
      </button>

      <p className="text-sm text-slate-500 text-center pt-2">
        Don't have an account?
        <Link to="/signup" className="text-indigo-600 font-semibold hover:underline ml-1">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;