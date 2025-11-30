import React from "react";
import { useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { burn, gold_backing, initial, tokenomics, total } from "../../assets";

// Token allocation data with exact colors from the image
const tokenAllocations = [
    { color: "#e74c3c", label: "Marketing - 5%" },
    { color: "#3498db", label: "Private Sale - 5%" },
    { color: "#f39c12", label: "Advisors - 5%" },
    { color: "#2ecc71", label: "Partnerships: Funding or incentivizing collaborations with other projects - 5%" },
    { color: "#9b59b6", label: "Team tokens - 10%" },
    { color: "#e67e22", label: "Private investors - 10%" },
    { color: "#f1c40f", label: "Public sale - 15%" },
    { color: "#95a5a6", label: "Ecosystem Reserves / Future Developing - 10%" },
    { color: "#3498db", label: "Liquidity - 20%" },
    { color: "#2980b9", label: "Venture Capitalists / Angel investors - 15%" },
];

// Token info cards data
const tokenInfoCards = [
    {
        title: "Total Supply",
        value: "5,000,000 GOLD",
        src: total,
    },
    {
        title: "Gold Backing",
        value: "TBA",
        src: gold_backing,
    },
    {
        title: "Initial Price",
        value: "TBA",
        src: initial,
    },
    {
        title: "Burn Mechanism",
        value: "TBA",
        src: burn,
    },
];

export const Tokenomics = () => {
    return (
        <section
            className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center bg-no-repeat min-h-screen w-full"
            id="tokenomics"
            style={{ backgroundImage: `url(${tokenomics})` }}
        >
            {/* <div className="absolute inset-0 bg-black/70" /> */}

            <div className="flex flex-col max-w-screen-2xl mx-auto items-center justify-center gap-12 sm:gap-16 px-4 sm:px-6 relative z-10">
                <div className="flex flex-col items-center w-full gap-4 animate-[fadeInUp_1s_ease-out] transform-gpu">
                    <h2 className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent font-bold text-4xl sm:text-5xl lg:text-6xl text-center hover:scale-110 transition-all duration-500 ease-in-out transform-gpu perspective-1000 hover:rotateX-5">
                        Tokenomics
                    </h2>
                    <p className="font-normal text-gray-300 text-lg sm:text-xl text-center leading-7 mb-2 max-w-2xl animate-[fadeInUp_1s_ease-out_0.2s_both] transform-gpu hover:translateY-1 transition-all duration-300 ease-in-out">
                        Understanding the economic model behind EMAS-FI tokens.
                    </p>
                    <Separator className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 animate-[fadeInUp_1s_ease-out_0.4s_both] transform-gpu hover:scale-x-150 transition-all duration-500 ease-in-out" />
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full animate-[fadeInUp_1.2s_ease-out_0.6s_both] transform-gpu">
                    <div className="relative flex-shrink-0 group">
                        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] relative transform-gpu transition-all duration-700 ease-in-out hover:scale-105 hover:rotateY-12 hover:rotateX-5 perspective-1000 group-hover:drop-shadow-2xl">
                            <svg className="w-full h-full transform -rotate-90 transition-all duration-1000 ease-in-out group-hover:rotate-[-85deg] filter group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]" viewBox="0 0 200 200">
                                <defs>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
                                    </filter>
                                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#2a2a2a" strokeWidth="40" className="transition-all duration-500 ease-in-out" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#e74c3c" strokeWidth="40" strokeDasharray="25.13 477.87" strokeDashoffset="0" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#3498db" strokeWidth="40" strokeDasharray="25.13 477.87" strokeDashoffset="-25.13" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#f39c12" strokeWidth="40" strokeDasharray="25.13 477.87" strokeDashoffset="-50.26" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#2ecc71" strokeWidth="40" strokeDasharray="25.13 477.87" strokeDashoffset="-75.39" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#9b59b6" strokeWidth="40" strokeDasharray="50.26 452.74" strokeDashoffset="-100.52" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#e67e22" strokeWidth="40" strokeDasharray="50.26 452.74" strokeDashoffset="-150.78" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#f1c40f" strokeWidth="40" strokeDasharray="75.39 427.61" strokeDashoffset="-201.04" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#95a5a6" strokeWidth="40" strokeDasharray="50.26 452.74" strokeDashoffset="-276.43" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#3498db" strokeWidth="40" strokeDasharray="100.52 402.48" strokeDashoffset="-326.69" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                                <circle cx="100" cy="100" r="80" fill="none" stroke="#2980b9" strokeWidth="40" strokeDasharray="75.39 427.61" strokeDashoffset="-427.21" filter="url(#shadow)" className="transition-all duration-500 ease-in-out hover:filter-[url(#glow)]" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col w-full lg:w-auto max-w-[600px] items-start gap-8 lg:gap-12 animate-[fadeInRight_1.2s_ease-out_0.8s_both] transform-gpu">
                        <div className="flex flex-col w-full items-start">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                                {tokenAllocations.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 transform-gpu transition-all duration-300 ease-in-out hover:scale-105 hover:translateX-2 hover:drop-shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm flex-shrink-0 transform-gpu transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-45 hover:drop-shadow-md" style={{ backgroundColor: item.color }} />
                                        <span className="font-normal text-gray-300 text-xs sm:text-sm leading-5 transition-all duration-300 ease-in-out hover:text-white hover:drop-shadow-sm">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                            {tokenInfoCards.map((card, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-900/80 border-yellow-400/30 rounded-xl w-full hover:bg-gray-800/90 transition-all duration-500 ease-in-out hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 transform-gpu hover:scale-105 hover:rotateY-5 hover:rotateX-2 hover:translateY-2 hover:drop-shadow-2xl perspective-1000 animate-[fadeInUp_0.8s_ease-out_both]"
                                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                                >
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="flex flex-col gap-3 sm:gap-4">
                                            <div className="flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center bg-yellow-400/10 rounded-lg transform-gpu transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:bg-yellow-400/20 hover:drop-shadow-lg">
                                                <img
                                                    src={card.src}
                                                    alt={card.title}
                                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain transform-gpu transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-12 hover:drop-shadow-md"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <h4 className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent font-bold text-base sm:text-lg transform-gpu transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-sm">
                                                    {card.title}
                                                </h4>
                                                <p className="font-normal text-gray-300 text-sm sm:text-base leading-6 transform-gpu transition-all duration-300 ease-in-out hover:text-white hover:scale-105 hover:drop-shadow-sm">
                                                    {card.value}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .transform-gpu {
                    transform: translateZ(0);
                }
            `}</style>
        </section>
    );
};