import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Coins, TrendingUp, DollarSign, Users, ArrowRightLeft } from 'lucide-react';

export function Features() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(1);

    const featureCards = [
        {
            number: "1",
            icon: Coins,
            title: "Invest in Physical Gold",
            description:
                "At EMAS-FI, purchase physical gold that aligns with your investment goals and store it securely in our advanced vaults. Benefit from enhanced security measures and unparalleled peace of mind, knowing that your assets are safeguarded.",
        },
        {
            number: "2",
            icon: TrendingUp,
            title: "Capitalize on Gold price appreciation",
            description:
                "Our platform allows you to benefit from the appreciation of gold prices. Monitor the market trends and cash out directly from your account through our user-friendly website interface. Accessing your investment earnings is now quicker and more convenient than ever.",
        },
        {
            number: "3",
            icon: DollarSign,
            title: "Leverage Gold for Financial Stability",
            description:
                "Need cash without your assets? Our innovative service enables you to acquire loans against your gold holdings. Unlock liquidity while retaining your investment position, giving you financial freedom and flexibility without compromise.",
        },
        {
            number: "4",
            icon: Users,
            title: "Peer-to-Peer Investment Loans",
            description:
                "Explore our peer-to-peer lending option, where you can loan out to other investors. Take advantage of mutually agreed interest rates to earn additional income on your gold holdings. This service fosters a collaborative and profitable investment community.",
        },
        {
            number: "5",
            icon: ArrowRightLeft,
            title: "Seamless Transactions",
            description:
                "Utilize our on-and-off ramp services to effortlessly purchase gold or cash out to access funds. Our streamlined processes are designed to provide a hassle-free experience, ensuring that managing your investments is as smooth and efficient as possible.",
        },
    ];

    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) =>
                    prev >= featureCards.length - itemsPerView ? 0 : prev + 1
                );
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, itemsPerView, featureCards.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev >= featureCards.length - itemsPerView ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev <= 0 ? featureCards.length - itemsPerView : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Touch handling for mobile
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsAutoPlaying(false);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setTimeout(() => setIsAutoPlaying(true), 3000);
    };

    return (
        <div className="flex flex-col w-full items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 bg-[#13100f] bg-opacity-80">
            <div className="flex flex-col max-w-screen-2xl w-full items-start gap-12 sm:gap-16">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h2 className="w-full mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] bg-clip-text text-transparent font-bold text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight leading-tight">
                        Features
                    </h2>

                    <div className="flex flex-col max-w-2xl w-full items-center pt-0 pb-2 px-4">
                        <p className="w-full mt-[-1.00px] font-['Montserrat',Helvetica] font-normal text-gray-300 text-sm sm:text-base lg:text-lg text-center tracking-[0] leading-6">
                            Our revolutionary platform combines the stability of gold with
                            the innovation of blockchain technology.
                        </p>
                    </div>

                    <div className="w-16 sm:w-24 h-1 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] rounded-full" />
                </div>

                <div className="flex flex-col w-full items-center gap-8 sm:gap-12">
                    {/* Carousel Container */}
                    <div
                        className="relative w-full overflow-hidden"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        {/* Carousel Content */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {featureCards.map((card, index) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
                                    >
                                        <div className="h-auto min-h-[400px] sm:min-h-[450px] lg:h-[500px] rounded-[20px] border border-solid border-[#d4af37] bg-gradient-to-b from-[#121212] to-[#0a0a0a] shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-95 group">
                                            <div className="flex flex-col items-center justify-center p-6 sm:p-8 h-full">
                                                {/* Number Badge */}
                                                <div className="flex flex-col w-16 h-[88px] items-start pt-0 pb-6 px-0">
                                                    <div className="flex w-16 h-16 items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                                        <span className="font-['Montserrat',Helvetica] font-bold text-black text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
                                                            {card.number}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Icon */}
                                                <div className="flex flex-col w-16 h-[88px] items-start pt-0 pb-6 px-0">
                                                    <div className="flex w-16 h-16 items-center justify-center">
                                                        <IconComponent
                                                            className="w-8 h-8 text-[#d4af37] group-hover:text-[#ffb006] transition-colors duration-300"
                                                            strokeWidth={1.5}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <div className="inline-flex flex-col items-center pt-0 pb-4 px-0">
                                                    <div className="flex flex-col w-full items-center justify-center gap-2.5">
                                                        <h3 className="w-full mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] bg-clip-text text-transparent font-bold text-lg sm:text-xl text-center tracking-tight leading-tight">
                                                            {card.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="flex flex-col items-center w-full">
                                                    <p className="w-full mt-[-1.00px] font-['Montserrat',Helvetica] font-normal text-gray-300 text-sm sm:text-base text-center tracking-[0] leading-6 group-hover:text-gray-200 transition-colors duration-300">
                                                        {card.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation Buttons - Desktop */}
                        <div className="hidden md:flex">
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:bg-[#ffb006] text-black rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] hover:bg-[#ffb006] text-black rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        {Array.from({ length: Math.ceil(featureCards.length / itemsPerView) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-[#ffb006] scale-125 shadow-lg'
                                        : 'bg-[#d4af371a] hover:bg-[#d4af3740]'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="flex md:hidden items-center justify-center gap-4 mt-4">
                        <button
                            onClick={prevSlide}
                            className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black rounded-full p-3 shadow-lg active:scale-95 transition-transform duration-150"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black rounded-full p-3 shadow-lg active:scale-95 transition-transform duration-150"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}