import { useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      });
      const data = await res.json();
      alert(data.message)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleLogin} className="w-full space-y-4">
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

      <button
        type="submit"
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