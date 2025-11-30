import React from "react";
import { Header } from "../components/layout/Header";
import { FaInstagram, FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";

export const LaunchApp = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic 3D Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gold Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#ffd700] rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#d4af37] rounded-full animate-bounce opacity-30"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#ffd700] rounded-full animate-pulse opacity-50"></div>
          
          {/* 3D Geometric Shapes */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="absolute top-1/4 right-1/4">
            <div className="w-64 h-64 bg-gradient-to-tr from-[#ffd700]/5 to-transparent rounded-full blur-2xl animate-bounce"></div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/4">
            <div className="w-48 h-48 bg-gradient-to-bl from-[#d4af37]/8 to-transparent rounded-full blur-xl animate-pulse"></div>
          </div>
          
          {/* Floating Hexagons */}
          <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-gradient-to-br from-[#d4af37]/10 to-transparent transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-gradient-to-tr from-[#ffd700]/8 to-transparent transform rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(212,175,55,0.1) 100px, rgba(212,175,55,0.1) 101px)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(212,175,55,0.1) 100px, rgba(212,175,55,0.1) 101px)'}}></div>
        </div>
      </div>
      
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="text-center p-8 max-w-4xl mx-auto">
          
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
              EMAS-FI
            </h1>
            <div className="w-24 h-1 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Message Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-[#d4af37]/30 rounded-2xl p-12 mb-12 backdrop-blur-xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
                Thank you for your interest in the future of gold-backed digital assets.
              </h2>
              <p className="text-xl text-[#d4af37] font-semibold mb-6">
                Stay tuned for revolutionary changes in DeFi investment.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Join and follow our official socials to stay up to date.
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>Platform Development</span>
                <span>Loading...</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 mb-4">
                <div className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] h-3 rounded-full animate-pulse" style={{width: '25%'}}></div>
              </div>
            </div>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[linear-gradient(90deg,rgba(191,149,63,0.2)_0%,rgba(252,246,186,0.2)_25%,rgba(179,135,40,0.2)_50%,rgba(251,245,183,0.2)_75%,rgba(170,119,28,0.2)_100%)] border border-[#d4af37]/40 rounded-full">
              <div className="w-3 h-3 bg-[#d4af37] rounded-full animate-pulse mr-3"></div>
              <span className="text-[#d4af37] font-bold text-lg">COMING SOON</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://instagram.com/emas_fi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 cursor-pointer">
              <FaInstagram className="text-[#d4af37] text-xl" />
            </a>
            <a href="https://twitter.com/emas_fi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 cursor-pointer">
              <FaTwitter className="text-[#d4af37] text-xl" />
            </a>
            <a href="https://t.me/emas_fi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 cursor-pointer">
              <FaTelegram className="text-[#d4af37] text-xl" />
            </a>
            <a href="mailto:info@emas-fi.com" className="w-12 h-12 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 cursor-pointer">
              <FaEnvelope className="text-[#d4af37] text-xl" />
            </a>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Revolutionary Gold-Backed Blockchain Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};