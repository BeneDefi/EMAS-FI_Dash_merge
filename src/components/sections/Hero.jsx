import React from "react";
import { HeroSection } from "../../assets";
import { Button } from "../ui/button";

export const Hero = () => {
    // Handle whitepaper view
    const handleViewWhitepaper = () => {
        // Open whitepaper in new tab - you can replace this URL with your actual whitepaper link
        window.open('https://emas-fi.gitbook.io/emas-fi-docs/', '_blank');
    };

    // Handle get started button - scroll to CTA section
    const handleGetStarted = () => {
        const ctaSection = document.getElementById('cta');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${HeroSection})`,
                }}
            />

            {/* Content container with glass effect - positioned exactly as in image */}
            <div className="relative z-10 w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[900px] xl:max-w-[1000px] mx-auto mt-8 sm:mt-12 lg:mt-16">
                {/* Glass morphism container with exact positioning and blur */}
                <div className="relative bg-black/30 backdrop-blur-[12px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border border-white/10 px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20">
                    {/* Content */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-center">
                        {/* Main Heading - exact typography as image */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] leading-[1.1] sm:leading-[1.05] lg:leading-[1] [font-family:'Kalnia',Helvetica] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                            Gold on Chain
                            <br />
                            Wealth in Hand
                        </h1>

                        {/* Subtitle - exact positioning and styling */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal tracking-[-0.3px] sm:tracking-[-0.5px] lg:tracking-[-0.8px] leading-relaxed text-white [font-family:'Montserrat',Helvetica] max-w-4xl px-2 sm:px-4">
                            Bridging Gold mining and Blockchain for sustainable passive income
                        </p>

                        {/* Call to action buttons - exact styling and positioning */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
                            <Button 
                                onClick={handleGetStarted}
                                className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] rounded-[8px] lg:rounded-[10px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black font-semibold text-sm sm:text-base lg:text-lg hover:opacity-90 transition-opacity px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 [font-family:'Montserrat',Helvetica]"
                            >
                                Get Started
                            </Button>

                            <Button
                                onClick={handleViewWhitepaper}
                                variant="outline"
                                className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] rounded-[8px] lg:rounded-[10px] border-2 border-[#d4af37] text-[#d4af37] font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 bg-transparent hover:bg-[#d4af37]/10 transition-all duration-300 [font-family:'Montserrat',Helvetica]"
                            >
                                View Whitepaper
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};