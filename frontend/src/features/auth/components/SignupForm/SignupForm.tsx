import { Link } from 'react-router-dom';

export const SignupForm = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="name@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="password" className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 transition-all placeholder:text-slate-400 text-slate-900"
          placeholder="••••••••"
        />
      </div>

      <button
        type="button"
        className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg shadow-sm shadow-indigo-600/20 transition-all cursor-pointer active:scale-[0.99]"
      >
        Create Account
      </button>

      <p className="text-xs text-slate-500 text-center pt-2 font-normal">
        Already have an account?
        <Link to="/login" className="text-indigo-600 font-semibold hover:underline ml-1">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
