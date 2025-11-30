import React from "react";
import { baseLogo } from "../../assets";

export const CryptoTicker = () => {
    // Create a data array for cryptocurrencies to enable mapping
    const cryptocurrencies = [
        {
            name: "Base",
            icon: baseLogo,
            alt: "Base",
        },
        {
            name: "Base",
            icon: baseLogo,
            alt: "Base",
        },
        {
            name: "Base",
            icon: baseLogo,
            alt: "Base",
        },
        {
            name: "Base",
            icon: baseLogo,
            alt: "Base",
        },
        {
            name: "Base",
            icon: baseLogo,
            alt: "Base",
        }
    ];

    return (
        <div className="flex flex-col min-h-[70px] sm:min-h-[90px] items-center justify-center px-4 sm:px-8 lg:px-[100px] py-2.5 w-full bg-[#d4af37]">
            <div className="flex flex-wrap items-center justify-center sm:justify-between w-full gap-4 sm:gap-6">
                {cryptocurrencies.map((crypto, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <img
                            className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px] lg:h-[34px] lg:w-[34px] rounded-full object-cover"
                            alt={crypto.alt}
                            src={crypto.icon}
                        />
                        <div className="[font-family:'Montserrat',Helvetica] font-semibold text-readdylinkmischka text-sm sm:text-lg lg:text-2xl tracking-[-0.5px] sm:tracking-[-1.20px] leading-tight truncate">
                            {crypto.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};