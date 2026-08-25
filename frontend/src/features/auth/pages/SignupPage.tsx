import { Link } from 'react-router-dom';
import { SignupForm } from '../components/SignupForm/SignupForm';

export const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100/70 p-4 sm:p-6 font-sans">
      <div className="w-full max-w-sm bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center">
        <Link
          to="/"
          className="self-start mb-6 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          Back to Home
        </Link>

        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-600/30 mb-4">
          Q
        </div>

        <h1 className="text-xl font-bold text-slate-900 mb-1">
          Create an account
        </h1>
        <p className="text-xs text-slate-500 mb-6">
          Get started with your free workspace
        </p>

        <SignupForm />
      </div>
    </div>
  );
};