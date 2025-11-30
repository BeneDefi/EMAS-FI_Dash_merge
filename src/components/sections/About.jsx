import React from "react";
import { Separator } from "../ui/separator";
import { Container_1 } from "../../assets";

export const About = () => {
    const handleReadMoreClick = () => {
        window.location.href = '/about';
    };

    return (
        <div className="flex flex-col w-full items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-24 2xl:py-28 bg-[#13100f] bg-opacity-80">
            <div className="flex flex-col max-w-screen-2xl w-full items-start gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20">
                <div className="flex flex-col items-center gap-3 xs:gap-4 md:gap-5 lg:gap-6 w-full">
                    <h2 className="w-full mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-readdy-link-semantic-heading-2 font-[number:var(--readdy-link-semantic-heading-2-font-weight)] text-transparent text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--readdy-link-semantic-heading-2-font-size)] xl:text-5xl 2xl:text-6xl text-center tracking-[var(--readdy-link-semantic-heading-2-letter-spacing)] leading-[var(--readdy-link-semantic-heading-2-line-height)] [font-style:var(--readdy-link-semantic-heading-2-font-style)]">
                        About Us
                    </h2>
                    <Separator className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-0.5 xs:h-1 md:h-1.5 lg:h-2 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]" />
                </div>

                <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center w-full gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                    <div className="flex flex-col items-start gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10 lg:pr-8 xl:pr-12 2xl:pr-16 flex-1">
                        <div className="flex flex-col items-start w-full">
                            <p className="w-full mt-[-1.00px] font-['Montserrat',Helvetica] font-normal text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl tracking-[0] leading-[18px] xs:leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px]">
                                The innovative blockchain platform that bridges the gap
                                between real-world gold mining and digital asset investment.
                            </p>
                        </div>

                        <div className="flex flex-col items-start w-full">
                            <p className="w-full mt-[-1.00px] font-readdy-link-montserrat-body font-[number:var(--readdy-link-montserrat-body-font-weight)] text-readdylinkmischka text-xs xs:text-sm sm:text-[length:var(--readdy-link-montserrat-body-font-size)] md:text-base lg:text-lg xl:text-xl 2xl:text-xl tracking-[var(--readdy-link-montserrat-body-letter-spacing)] leading-[18px] xs:leading-[20px] sm:leading-[var(--readdy-link-montserrat-body-line-height)] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] [font-style:var(--readdy-link-montserrat-body-font-style)]">
                                EMAS-FI offers investors a unique opportunity to participate
                                in the growth of tangible gold assets, capitalizing on the
                                rising gold prices while enjoying the benefits of blockchain
                                transparency and security.
                            </p>
                        </div>

                        <div className="flex items-center cursor-pointer group" onClick={handleReadMoreClick}>
                            <div className="flex items-center gap-2 xs:gap-2.5 md:gap-3 lg:gap-3.5">
                                <span className="font-readdy-link-montserrat-body font-[number:var(--readdy-link-montserrat-body-font-weight)] text-readdylinkold-gold text-xs xs:text-sm sm:text-[length:var(--readdy-link-montserrat-body-font-size)] md:text-base lg:text-lg xl:text-xl 2xl:text-xl tracking-[var(--readdy-link-montserrat-body-letter-spacing)] leading-[var(--readdy-link-montserrat-body-line-height)] [font-style:var(--readdy-link-montserrat-body-font-style)] group-hover:text-opacity-80 transition-colors">
                                    READ MORE
                                </span>
                            </div>
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-readdylinkold-gold group-hover:text-opacity-80 transition-colors ml-1.5 xs:ml-2 md:ml-3 lg:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col items-start flex-1 w-full">
                        <div className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0px_15px_30px_-8px_#00000040] xs:shadow-[0px_20px_40px_-10px_#00000040] sm:shadow-[0px_25px_50px_-12px_#00000040] md:shadow-[0px_30px_60px_-15px_#00000040] lg:shadow-[0px_35px_70px_-18px_#00000040] overflow-hidden">
                            <img
                                src={Container_1}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};