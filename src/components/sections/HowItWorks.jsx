import React from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { HowItWork, logo, untitled_120, untitled_124 } from "../../assets";

export const HowItWorks = () => {
    const cards = [
        {
            id: 1,
            title: "Buy and Stake",
            points: [
                "Buy Token from DEX or CEX",
                "Stake tokens on our DeFi platform",
            ],
            iconUrl:
                untitled_120,
        },
        {
            id: 2,
            title: "Earn Rewards",
            points: [
                "Mining profits are distributed to stakers",
                "Rewards scale with staking duration and engagement",
            ],
            iconUrl:
                logo,
        },
        {
            id: 3,
            title: "Boost Earnings",
            points: [
                "Higher staking tiers receive bonus rewards",
                "Leaderboard competitions offer incentives",
            ],
            iconUrl:
                untitled_124,
        },
    ];

    const goldGradientText =
        "bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";

    return (
        <section
            className="relative flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full flex-[0_0_auto] bg-cover bg-center bg-no-repeat min-h-screen"
            id="how-it-works"
            style={{ backgroundImage: `url(${HowItWork})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col max-w-screen-2xl w-full items-start gap-12 sm:gap-16 flex-[0_0_auto]">
                <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="items-center relative self-stretch w-full flex-[0_0_auto] flex flex-col">
                        <h2
                            className={`relative self-stretch mt-[-1.00px] ${goldGradientText} font-readdy-link-semantic-heading-2 font-[number:var(--readdy-link-semantic-heading-2-font-weight)] text-transparent text-2xl sm:text-3xl lg:text-[length:var(--readdy-link-semantic-heading-2-font-size)] text-center tracking-[var(--readdy-link-semantic-heading-2-letter-spacing)] leading-[var(--readdy-link-semantic-heading-2-line-height)] [font-style:var(--readdy-link-semantic-heading-2-font-style)]`}
                        >
                            How it Works
                        </h2>
                    </div>

                    <div className="flex flex-col max-w-2xl w-full items-center pt-0 pb-2 px-4 relative flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-readdylinkmischka text-sm sm:text-base text-center tracking-[0] leading-6">
                            Our revolutionary platform functions in 3 simple ways
                        </p>
                    </div>

                    <Separator className="w-16 sm:w-24 h-1 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]" />
                </header>

                <div className="flex flex-col w-full items-center gap-8 sm:gap-[43px] relative flex-[0_0_auto]">
                    <div className="flex flex-col lg:flex-row h-auto items-start justify-center gap-6 lg:gap-8 relative self-stretch w-full">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="relative flex-1 w-full lg:w-auto max-w-[400px] mx-auto lg:mx-0"
                            >
                                <div className="flex justify-center mb-[-40px] relative z-10">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#d4af37] bg-gradient-to-br from-[#d4af37] to-[#b8941f] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                        <img
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                                            alt={`Feature icon ${card.id}`}
                                            src={card.iconUrl}
                                        />
                                    </div>
                                </div>

                                <Card className="w-full h-auto min-h-[320px] sm:min-h-[380px] pt-16 pb-8 px-6 sm:px-8 flex flex-col items-center justify-center rounded-[20px] border-2 border-solid border-[#d4af37] bg-black/70 backdrop-blur-sm hover:bg-black/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                                    <CardContent className="p-0 flex flex-col items-center justify-center w-full h-full text-center">
                                        <div className="inline-flex flex-col items-center pt-0 pb-6 px-0 relative flex-[0_0_auto]">
                                            <h3
                                                className={`relative self-stretch mt-[-1.00px] ${goldGradientText} font-readdy-link-semantic-heading-3 font-[number:var(--readdy-link-semantic-heading-3-font-weight)] text-transparent text-lg sm:text-xl lg:text-[length:var(--readdy-link-semantic-heading-3-font-size)] text-center tracking-[var(--readdy-link-semantic-heading-3-letter-spacing)] leading-[var(--readdy-link-semantic-heading-3-line-height)] [font-style:var(--readdy-link-semantic-heading-3-font-style)]`}
                                            >
                                                {card.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
                                            <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                                                <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-readdylinkmischka text-sm sm:text-base text-center tracking-[0] leading-6">
                                                    {card.points[0]}
                                                </p>
                                            </div>

                                            <Separator className="w-[120px] sm:w-[146px] h-px bg-[#d4af37] opacity-30" />

                                            <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                                                <p className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-readdylinkmischka text-sm sm:text-base text-center tracking-[0] leading-6">
                                                    {card.points[1]}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
