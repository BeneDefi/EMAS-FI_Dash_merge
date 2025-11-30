import React, { useEffect, useState } from "react";

export const PageLoader = ({ isLoading, onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showLoader, setShowLoader] = useState(isLoading);

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true);
            setProgress(0);

            // Simulate loading progress
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setShowLoader(false);
                            if (onLoadingComplete) onLoadingComplete();
                        }, 800);
                        return 100;
                    }
                    return prev + Math.random() * 12;
                });
            }, 120);

            return () => clearInterval(interval);
        }
    }, [isLoading, onLoadingComplete]);

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b] overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-60 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Gold Bars */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`gold-bar-${i}`}
                        className="absolute w-8 h-4 bg-gradient-to-r from-[#d4af37] via-[#ffb006] to-[#d4af37] rounded-sm opacity-20 animate-bounce shadow-lg"
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + Math.sin(i) * 30}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                            transform: `rotate(${Math.random() * 45}deg)`,
                        }}
                    />
                ))}
            </div>

            {/* Main Loader Container */}
            <div className="relative flex flex-col items-center justify-center space-y-8 sm:space-y-12">
                {/* 3D Logo Container */}
                <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-r from-[#d4af37] via-[#ffb006] to-[#d4af37] opacity-15 animate-pulse blur-2xl"></div>

                    {/* Rotating Outer Ring */}
                    <div
                        className="absolute inset-2 w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full border-2 border-[#d4af37] opacity-30 animate-spin"
                        style={{ animationDuration: "4s" }}
                    >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#ffb006] rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#ffb006] rounded-full transform -translate-x-1/2 translate-y-1"></div>
                    </div>

                    {/* Middle Ring */}
                    <div
                        className="absolute inset-4 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-[#ffb006] opacity-50 animate-spin"
                        style={{ animationDuration: "3s", animationDirection: "reverse" }}
                    >
                        <div className="absolute top-1/2 left-0 w-1 h-4 bg-[#d4af37] rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                        <div className="absolute top-1/2 right-0 w-1 h-4 bg-[#d4af37] rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                    </div>

                    {/* Inner Ring */}
                    <div
                        className="absolute inset-6 w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border border-[#d4af37] opacity-70 animate-spin"
                        style={{ animationDuration: "2s" }}
                    ></div>

                    {/* Logo Container with 3D Effect */}
                    <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center">
                        <div
                            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 transform-gpu animate-bounce"
                            style={{ animationDuration: "2.5s" }}
                        >
                            {/* 3D Shadow Effect */}
                            <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-lg opacity-40 transform translate-x-2 translate-y-2 scale-110"></div>

                            {/* Main Logo Background */}
                            <div className="relative w-full h-full bg-gradient-to-br from-[#d4af37] via-[#ffb006] to-[#b8941f] rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500 border-4 border-[#ffb006]/30">
                                {/* Inner Glow */}
                                <div className="absolute inset-2 bg-gradient-to-br from-[#ffb006] to-[#d4af37] rounded-full opacity-60"></div>

                                {/* Logo Image */}
                                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                                    <img
                                        src="/logo.png"
                                        alt="EMAS-FI Logo"
                                        className="w-full h-full object-contain filter drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Rotating Shine Effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-30 rounded-full animate-spin"
                                style={{ animationDuration: "3s" }}
                            ></div>

                            {/* Pulse Effect */}
                            <div
                                className="absolute inset-0 bg-[#ffb006] rounded-full opacity-20 animate-ping"
                                style={{ animationDuration: "2s" }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-center space-y-4 sm:space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Kalnia',Helvetica] animate-pulse">
                        EMAS-FI
                    </h2>
                    <p className="text-[#d4af37] text-lg sm:text-xl lg:text-2xl [font-family:'Montserrat',Helvetica] animate-pulse">
                        Loading Gold-Backed Future...
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                        <div className="w-2 h-2 bg-[#ffb006] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="w-72 sm:w-96 lg:w-[28rem] space-y-3">
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner border border-gray-700">
                        <div
                            className="h-full bg-gradient-to-r from-[#d4af37] via-[#ffb006] to-[#d4af37] rounded-full transition-all duration-500 ease-out shadow-lg relative overflow-hidden"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Animated shine effect on progress bar */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
                            {/* Moving highlight */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-ping"></div>
                        </div>
                    </div>

                    {/* Progress Percentage */}
                    <div className="flex justify-between items-center text-[#d4af37] text-sm sm:text-base [font-family:'Montserrat',Helvetica] font-medium">
                        <span>Loading Assets...</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>

                {/* Floating Gold Particles Around Logo */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={`particle-${i}`}
                            className="absolute w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-60 animate-bounce"
                            style={{
                                left: `${45 + Math.cos((i * 30 * Math.PI) / 180) * 15}%`,
                                top: `${45 + Math.sin((i * 30 * Math.PI) / 180) * 15}%`,
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Enhanced Corner Decorations */}
            <div className="absolute top-8 left-8 w-20 h-20 border-l-3 border-t-3 border-[#d4af37] opacity-40 rounded-tl-lg"></div>
            <div className="absolute top-8 right-8 w-20 h-20 border-r-3 border-t-3 border-[#d4af37] opacity-40 rounded-tr-lg"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 border-l-3 border-b-3 border-[#d4af37] opacity-40 rounded-bl-lg"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 border-r-3 border-b-3 border-[#d4af37] opacity-40 rounded-br-lg"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>
        </div>
    );
};
