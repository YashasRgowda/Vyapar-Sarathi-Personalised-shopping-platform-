import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginFlow = () => {
  const [step, setStep] = useState(1);
  const [uciId, setUciId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFirstStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("adjasjdabj")
    console.log('Login attempted with:', { uciId, password }); // Fixed from email to uciId
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16 px-4">
      <div className="w-full max-w-md">
        {/* Brand Name */}
        <div className="flex justify-center mb-16">
          <h1 className="text-3xl font-serif tracking-tight">Vyapar Sarathi</h1>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <h2 className="text-2xl leading-tight">
              Enter your UCI id to join us or sign in.
            </h2>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Karnataka</span>
              <button className="text-gray-800 underline">Change</button>
            </div>

            <form onSubmit={handleFirstStep} className="space-y-6">
              <div>
                <label className="text-sm text-gray-900">UCI*</label>
                <input
                  type="text"
                  value={uciId}
                  onChange={(e) => setUciId(e.target.value)}
                  placeholder="Enter your UCI ID"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div className="text-sm text-gray-600">
                By continuing, I agree to Vyapar Sarathi's{' '}
                <a href="#" className="underline">Privacy Policy</a>
                {' '}and{' '}
                <a href="#" className="underline">Terms of Use</a>.
              </div>

              <button
                type="submit"
                className="w-32 bg-black text-white rounded-full py-2 px-6 hover:bg-gray-800 transition-colors float-right"
              >
                Continue
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl">What's your password?</h2>
            
            <div className="text-sm">
              {uciId}{' '}
              <button 
                onClick={() => setStep(1)} 
                className="text-gray-600 underline"
              >
                Edit
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <label className="text-sm text-gray-600">Password*</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[70%] -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <a href="#" className="block text-gray-600 underline">
                Forgotten your password?
              </a>

              <button
                onClick={() => navigate('/login/category')}
                type="submit"
                className="w-32 bg-black text-white rounded-full py-2 px-6 hover:bg-gray-800 transition-colors float-right"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginFlow;