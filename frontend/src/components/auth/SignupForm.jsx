import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import { registerUser } from '../../services/authService';

const SignupForm = ({ type = 'driver', hideSocial = false }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });
      
      // Redirect based on role
      navigate(formData.role === 'driver' ? '/driver' : '/owner');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {!hideSocial && <SocialAuth mode="SIGN UP" />}

      {error && (
        <div className="p-3 bg-red-50 text-red-500 text-sm rounded-xl border border-red-100 font-medium animate-shake">
          {error}
        </div>
      )}

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type={showPassword ? "text" : "password"} 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-12 pr-12 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-12 pr-12 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button 
          disabled={loading}
          className="w-full bg-[#0047FF] hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-[#0047FF] font-bold hover:underline">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
