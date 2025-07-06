import React from 'react';
import { Search, FileText, Cloud, Facebook, Instagram, Twitter } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
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
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</a>
          <button 
            onClick={() => onNavigate('auth')}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Start Noting
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl overflow-hidden relative">
            <div className="flex items-center justify-between p-8 md:p-12">
              <div className="flex-1 z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Capture Your Thoughts Instantly
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                  QuickNotes is your go-to app for jotting down ideas, tasks, and inspirations. Seamlessly organize your thoughts and access them anytime, anywhere.
                </p>
                <button 
                  onClick={() => onNavigate('auth')}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer"
                >
                  Start Noting
                </button>
              </div>
              
              {/* Illustration */}
              <div className="flex-1 relative">
                <div className="relative w-full h-80 md:h-96">
                  <div className="absolute right-0 top-0 w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute top-8 right-16 w-20 h-24 bg-yellow-200 rounded-full"></div>
                    <div className="absolute top-6 right-12 w-28 h-32 bg-amber-800 rounded-full"></div>
                    <div className="absolute top-10 right-18 w-16 h-20 bg-yellow-100 rounded-full"></div>
                    <div className="absolute top-14 right-20 w-12 h-6 border-2 border-gray-800 rounded-full bg-transparent"></div>
                    <div className="absolute top-14 right-16 w-12 h-6 border-2 border-gray-800 rounded-full bg-transparent"></div>
                    <div className="absolute top-28 right-12 w-24 h-40 bg-teal-500 rounded-t-3xl"></div>
                    <div className="absolute top-32 right-8 w-8 h-20 bg-yellow-200 rounded-full transform rotate-12"></div>
                    <div className="absolute top-32 right-32 w-8 h-20 bg-yellow-200 rounded-full transform -rotate-12"></div>
                    <div className="absolute bottom-20 right-8 w-32 h-20 bg-gray-300 rounded-lg"></div>
                    <div className="absolute bottom-24 right-12 w-24 h-16 bg-gray-800 rounded-lg"></div>
                    <div className="absolute top-48 right-6 w-2 h-12 bg-gray-800 rounded-full transform rotate-45"></div>
                    <div className="absolute top-46 right-7 w-2 h-4 bg-silver rounded-full transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Features</h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            QuickNotes offers a range of features designed to enhance your note-taking experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Note Creation</h3>
              <p className="text-gray-400 text-sm">
                Create notes quickly and easily with our intuitive interface. Add text, images, and files to your notes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Powerful Search</h3>
              <p className="text-gray-400 text-sm">
                Find any note instantly with our robust search functionality. Search by keywords, tags, or content.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud Sync</h3>
              <p className="text-gray-400 text-sm">
                Access your notes on any device with automatic cloud synchronization. Never lose your important information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 QuickNotes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;