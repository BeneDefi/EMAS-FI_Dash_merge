import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Commuunity, Container_3, dollar_square, gold_r, Image_fx_9, innovation, Introducing, MFPS, roadmap, sim, tick } from "../assets";

export const About = () => {
    const whyInvestItems = [
        {
            src: tick,
            title: "Real-World Backed",
            description: "Every token is backed by physical gold reserves, providing tangible value and security."
        },
        {
            src: dollar_square,
            title: "Passive Income",
            description: "Earn consistent returns through our innovative staking and mining profit distribution."
        },
        {
            src: Commuunity,
            title: "Community",
            description: "Join a thriving community of investors and blockchain enthusiasts."
        },
        {
            src: innovation,
            title: "Innovation",
            description: "Leverage cutting-edge blockchain technology for secure and transparent investments."
        }
    ];

    const productionProcess = [
        {
            src: MFPS,
            title: "MFPB Gold Recovery",
            description: "Using advanced Froth Processing & System (MFPB) to extract gold from ore efficiently."
        },
        {
            src: sim,
            title: "SIM Process",
            description: "Utilizing concentrated & further processed using our proprietary SIM technique."
        },
        {
            src: gold_r,
            title: "Gold Refinement",
            description: "Refining and Purifying processes gold into investment-grade bars ready for tokenization."
        }
    ];

    const globalStats = [
        {
            value: "$12+ Trillion",
            label: "Global Gold Market"
        },
        {
            value: "$80+ Billion",
            label: "DeFi TVL 2024"
        },
        {
            value: "Rising demand",
            label: "for gold-backed assets"
        },
        {
            value: "First-Mover Advantage",
            label: "in gold and DeFi rewards"
        }
    ];


    return (
        <div className="flex flex-col items-center relative bg-readdylinkwhite-cod-gray overflow-x-hidden min-h-screen">
            <Header />

            {/* Hero Section - Introducing EMAS-FI */}
            <section
                className="relative w-full min-h-screen flex items-center justify-center pt-20"
                // style={{ backgroundImage: "url('/team.png')" }}
            >
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${Introducing})`
                    }}
                >
                    {/* Dark overlay for better text readability */}
                    {/* <div className="absolute inset-0 bg-black/70"></div> */}

                    {/* Golden gradient overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1a1612]/90 via-[#13100f]/85 to-[#0f0c0b]/90"></div> */}
                </div>

                {/* Background with golden flowing design */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b]"> */}
                {/* Golden flowing curves */}
                {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                            <defs>
                                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                                    <stop offset="50%" stopColor="rgba(255,215,0,0.2)" />
                                    <stop offset="100%" stopColor="rgba(212,175,55,0.1)" />
                                </linearGradient>
                            </defs>
                            <path d="M0,200 Q400,100 800,150 T1600,200 Q1800,250 1920,200 L1920,0 L0,0 Z" fill="url(#goldGradient)" />
                            <path d="M0,400 Q600,300 1200,350 T1920,400 L1920,0 L0,0 Z" fill="url(#goldGradient)" opacity="0.5" />
                        </svg>
                    </div> */}

                {/* Floating gold particles */}
                {/* <div className="absolute top-20 left-10 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-3 h-3 bg-[#ffb006] rounded-full opacity-40 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-[#d4af37] rounded-full opacity-80 animate-pulse delay-500"></div>
                    <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-[#ffb006] rounded-full opacity-50 animate-pulse delay-1500"></div> */}
                {/* </div> */}

                <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                            Introducing EMAS-FI
                        </h1>
                        <p className="text-lg sm:text-xl text-[#d4af37] mb-8 [font-family:'Montserrat',Helvetica] font-medium">
                            Elevating Mining Assets Safely, Fostering Innovation
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed [font-family:'Montserrat',Helvetica]">
                            The innovative blockchain platform that bridges the gap between real-world gold mining and digital asset investment. EMAS-FI offers investors a unique opportunity to participate in the growth of tangible gold assets, capitalizing on the rising gold prices while enjoying the benefits of blockchain transparency and security.
                        </p>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed [font-family:'Montserrat',Helvetica]">
                            Our Gold is extracted through a pioneering process that attracts gold from gold ore using the SIM alloy technique—an eco-friendly method that reduces acid extracts gold without the use of harmful chemicals like mercury.
                        </p>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed [font-family:'Montserrat',Helvetica]">
                            This sustainable approach not only ensures environmentally responsible mining but also guarantees the purity and quality of the gold produced.
                        </p>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed [font-family:'Montserrat',Helvetica]">
                            By investing in EMAS-FI, you gain exposure to the valuable gold market, with your investment backed by actual gold mined through innovative and eco-conscious processes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#13100f] via-[#1a1612] to-[#13100f]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 order-1 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                                Our Vision
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg mb-6 [font-family:'Montserrat',Helvetica]">
                                The innovative blockchain platform that bridges the gap between real-world gold mining and digital asset investment.
                            </p>
                            <blockquote className="border-l-4 border-[#d4af37] pl-6 italic text-[#d4af37] text-lg sm:text-xl [font-family:'Montserrat',Helvetica]">
                                "Bringing the stability of gold to the future of finance"
                            </blockquote>
                        </div>
                        <div className="flex-1 order-2 lg:order-2">
                            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={Container_3}
                                    alt="Gold vault with digital interface"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Why Invest Section */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                            Why Invest?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyInvestItems.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] rounded-full flex items-center justify-center shadow-lg p-4">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed [font-family:'Montserrat',Helvetica]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gold Production Process Section */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#13100f] via-[#1a1612] to-[#13100f]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                            Gold Production Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productionProcess.map((process, index) => (
                            <Card key={index} className="bg-[#1a1a1a] border-2 border-[#d4af37] rounded-xl hover:bg-[#222] transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] rounded-full flex items-center justify-center shadow-lg p-4">
                                        <img
                                            src={process.src}
                                            alt={process.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                        {process.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed [font-family:'Montserrat',Helvetica]">
                                        {process.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 order-1 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                                Global Presence
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg mb-8 [font-family:'Montserrat',Helvetica]">
                                The global demand for gold and DeFi is ever increasing
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {globalStats.map((stat, index) => (
                                    <Card key={index} className="bg-[#1a1a1a] border-2 border-[#d4af37] rounded-xl">
                                        <CardContent className="p-6">
                                            <div className="text-2xl sm:text-3xl font-bold mb-2 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                                {stat.value}
                                            </div>
                                            <p className="text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 order-2 lg:order-2">
                            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={Image_fx_9}
                                    alt="Global network visualization"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Project Roadmap Section - Exact Recreation */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#13100f] via-[#1a1612] to-[#13100f] overflow-hidden"
            >

                {/* Background curved path */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
                    style={{
                        backgroundImage: `url(${roadmap})`
                    }}
                >
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-45"></div>
                {/* <div className="absolute inset-0">
                    <svg className="absolute w-full h-full" viewBox="0 0 1200 1400" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(212,175,55,0.15)" />
                                <stop offset="50%" stopColor="rgba(212,175,55,0.08)" />
                                <stop offset="100%" stopColor="rgba(212,175,55,0.03)" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 600 100 Q 200 300 400 600 Q 600 900 800 1200 Q 1000 1500 600 1800"
                            stroke="url(#pathGradient)"
                            strokeWidth="120"
                            fill="none"
                            opacity="0.3"
                        />
                    </svg>
                </div> */}

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                            Project Roadmap
                        </h2>
                        <p className="text-gray-300 text-lg [font-family:'Montserrat',Helvetica]">
                            Here is how we change the future of blockchain
                        </p>
                        <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Central Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#d4af37] via-[#d4af37] to-[#d4af37] opacity-60"></div>

                        <div className="space-y-32">
                            {/* Phase 1 - Infrastructure Setup */}
                            <div className="relative flex items-start">
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#1a1612] z-20"></div>

                                {/* Content positioned to the right */}
                                <div className="w-full flex justify-end pr-8">
                                    <div className="w-[480px] max-w-full">
                                        <Card className="bg-[rgba(26,26,26,0.95)] border border-[#d4af37] rounded-xl backdrop-blur-sm">
                                            <CardContent className="p-6">
                                                {/* Header with badges */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-bold [font-family:'Montserrat',Helvetica]">
                                                        Phase 1
                                                    </span>
                                                    <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-xs font-medium [font-family:'Montserrat',Helvetica]">
                                                        In Progress
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                                    Infrastructure Setup
                                                </h3>

                                                <ul className="space-y-2 mb-6">
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Launch website and project deck
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Build community and social presence
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Conduct private sale and secure partnerships
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Secure mining sites and licenses
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Establish blockchain-based financing
                                                    </li>
                                                </ul>

                                                {/* Progress Section */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-400 text-xs [font-family:'Montserrat',Helvetica]">Progress</span>
                                                        <span className="text-[#d4af37] text-xs font-bold [font-family:'Montserrat',Helvetica]">35%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div className="bg-[#d4af37] h-2 rounded-full" style={{ width: '35%' }}></div>
                                                    </div>
                                                </div>

                                                {/* Timeline */}
                                                <div className="flex justify-between text-xs text-gray-400 mb-4 [font-family:'Montserrat',Helvetica]">
                                                    <span>Started: January 2025</span>
                                                    <span>Expected Completion: October 2025</span>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Legal Acquisition</span>
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Blockchain Framework</span>
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Public Execution</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 2 - Deployment */}
                            <div className="relative flex items-start">
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#1a1612] z-20"></div>

                                {/* Content positioned to the left */}
                                <div className="w-full flex justify-start pl-8">
                                    <div className="w-[480px] max-w-full">
                                        <Card className="bg-[rgba(26,26,26,0.95)] border border-[#d4af37] rounded-xl backdrop-blur-sm">
                                            <CardContent className="p-6">
                                                {/* Header with badges */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-bold [font-family:'Montserrat',Helvetica]">
                                                        Phase 2
                                                    </span>
                                                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium [font-family:'Montserrat',Helvetica]">
                                                        Pending
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                                    Deployment
                                                </h3>

                                                <ul className="space-y-2 mb-6">
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Release updated website and scale marketing
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Conduct public sale and launch staking platform
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Begin gold production and distribute rewards
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Form strategic partnerships
                                                    </li>
                                                </ul>

                                                {/* Progress Section */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-400 text-xs [font-family:'Montserrat',Helvetica]">Progress</span>
                                                        <span className="text-[#d4af37] text-xs font-bold [font-family:'Montserrat',Helvetica]">0%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div className="bg-[#d4af37] h-2 rounded-full" style={{ width: '0%' }}></div>
                                                    </div>
                                                </div>

                                                {/* Timeline */}
                                                <div className="flex justify-between text-xs text-gray-400 mb-4 [font-family:'Montserrat',Helvetica]">
                                                    <span>Expected Start: November 2025</span>
                                                    <span>Expected Completion: March 2026</span>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Marketing</span>
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Gold Production</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 - Expansion */}
                            <div className="relative flex items-start">
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full border-4 border-[#1a1612] z-20"></div>

                                {/* Content positioned to the right */}
                                <div className="w-full flex justify-end pr-8">
                                    <div className="w-[480px] max-w-full">
                                        <Card className="bg-[rgba(26,26,26,0.95)] border border-[#d4af37] rounded-xl backdrop-blur-sm">
                                            <CardContent className="p-6">
                                                {/* Header with badges */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-bold [font-family:'Montserrat',Helvetica]">
                                                        Phase 3
                                                    </span>
                                                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium [font-family:'Montserrat',Helvetica]">
                                                        Pending
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                                                    Expansion
                                                </h3>

                                                <ul className="space-y-2 mb-6">
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Expand gold mining operations
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Secure private and VC investments
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Introduce NFT-backed gold ownership
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Enable cross-chain lending and staking
                                                    </li>
                                                    <li className="flex items-start text-gray-300 text-sm [font-family:'Montserrat',Helvetica]">
                                                        <span className="text-[#d4af37] mr-2">●</span>
                                                        Execute global marketing
                                                    </li>
                                                </ul>

                                                {/* Progress Section */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-400 text-xs [font-family:'Montserrat',Helvetica]">Progress</span>
                                                        <span className="text-[#d4af37] text-xs font-bold [font-family:'Montserrat',Helvetica]">0%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div className="bg-[#d4af37] h-2 rounded-full" style={{ width: '0%' }}></div>
                                                    </div>
                                                </div>

                                                {/* Timeline */}
                                                <div className="flex justify-between text-xs text-gray-400 mb-4 [font-family:'Montserrat',Helvetica]">
                                                    <span>Expected Start: April 2026</span>
                                                    <span>Expected Completion: December 2027</span>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Marketing</span>
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Finance</span>
                                                    <span className="bg-[#d4af37] text-black px-2 py-1 rounded text-xs [font-family:'Montserrat',Helvetica]">Gold M.</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                    <Card className="bg-[#1a1a1a] border-2 border-[#d4af37] rounded-2xl overflow-hidden">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl sm:text-4xl font-medium mb-6 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                                Join the Gold Revolution
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto [font-family:'Montserrat',Helvetica]">
                                The innovative blockchain platform that bridges the gap between real-world gold mining and digital asset investment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="px-8 py-3 rounded-lg bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black font-semibold hover:opacity-90 transition-opacity [font-family:'Montserrat',Helvetica]">
                                    Get Started Now
                                </Button>
                                <Button
                                    variant="outline"
                                    className="px-8 py-3 rounded-lg border-2 border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 [font-family:'Montserrat',Helvetica]"
                                    onClick={() => window.location.href = '/'}
                                >
                                    Back to Home
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};