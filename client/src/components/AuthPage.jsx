import React, { useState } from 'react';

const AuthPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      onNavigate('notes');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-500 rounded"></div>
          <button 
            onClick={() => onNavigate('landing')}
            className="text-xl font-semibold hover:text-gray-300 transition-colors cursor-pointer"
          >
            QuickNotes
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={() => onNavigate('landing')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</button>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</a>
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[calc(100vh-170px)] px-4 pt-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 mt-8">
              Welcome to QuickNotes
            </h1>
            <p className="text-gray-400">
              Sign up or log in to start managing your notes.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </span>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 text-green-500 hover:text-green-400 font-semibold transition-colors cursor-pointer"
            >
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;