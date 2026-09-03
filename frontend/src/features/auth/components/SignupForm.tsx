import { useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

export const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, password
        })
      })
      const data = await res.json();
      if (!data.ok) {
        throw new Error(data.message)
      }
      console.log(data.message);
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <form onSubmit={handleSignup} className="w-full space-y-4">
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all placeholder:text-slate-400"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all placeholder:text-slate-400"
          placeholder="••••••••"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all placeholder:text-slate-400"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
      >
        Create Account
      </button>

      <p className="text-sm text-slate-500 text-center pt-2">
        Already have an account?
        <Link to="/login" className="text-indigo-600 font-semibold hover:underline ml-1">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;