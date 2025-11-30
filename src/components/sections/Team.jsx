import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dave, Jeremy_Lum, Leee, Peterr, Sims, team, Zack } from "../../assets";

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Team member data for mapping - now with 7 members
  const teamMembers = [
    {
      id: 1,
      name: "David Martin",
      title: "Founder | CEO",
      image:
        Dave,
      bio:
        "Buisness leader with crypto experience since 2017. \n Now building EMAS-FI gold-backed with real-world yeild",
      expertise: [
        "Business Management",
        "Blockchain Strategy",
        "Project Leadership",
        "Gold Mining Operations",
      ],
      experience: "8+ years in blockchain and business",
      linkedin: "https://linkedin.com/in/david-martin-emas",
      twitter: "https://twitter.com/david_martin_emas",
    },
    {
      id: 2,
      name: "Jeremy Lum",
      title: "Founder | COO",
      image:
        Jeremy_Lum,
      bio:
        "Netflix/Amazon composer and crypto educator since 2015. \n Now build EMAS-FI: real world gold meets DeFi.",
      expertise: [
        "Operations Management",
        "Supply Chain",
        "Process Optimization",
        "Strategic Planning",
      ],
      experience: "15+ years in operations",
      linkedin: "https://linkedin.com/in/jeremy-lum-emas",
      twitter: "https://twitter.com/jeremy_lum_emas",
    },
    {
      id: 3,
      name: "Lee",
      title: "Co-Founder | S Global Resources Co",
      image:
        Leee,
      bio:
        "Over 20 years in construction, and infrastructure. \n Currently leadinf SGR's mining operations with discipline and precision, \n transforming Andrew's technology into relaible, real-world results through accountable, \n efficient execution.",
      expertise: [
        "Mining Engineering",
        "Gold Trading",
        "Regulatory Compliance",
        "Sustainable Mining",
      ],
      experience: "20+ years in gold industry",
      linkedin: "https://linkedin.com/in/michael-chen-emas",
      twitter: "https://twitter.com/michael_chen_emas",
    },
    {
      id: 4,
      name: "Zack Ho",
      title: "Co-Founder | S Global Resources Co",
      image:
        Zack,
      bio:
        "Vetran Project lead turning mining ops expert. \n Ensures real-world execution of SGR's gold tech vision",
      expertise: [
        "Blockchain Development",
        "Smart Contracts",
        "DeFi Protocols",
        "Security Architecture",
      ],
      experience: "12+ years in blockchain",
      linkedin: "https://linkedin.com/in/sarah-johnson-emas",
      twitter: "https://twitter.com/sarah_johnson_emas",
    },
    {
      id: 5,
      name: "Peter Yu",
      title: "Co-Founder | S Global Resources Co",
      image:
        Peterr,
      bio:
        "Pioneer in green gold extraction with deep SE Asia trade ties. \n Co-Fonder of SGR and developer of the Sim process.",
      expertise: [
        "Corporate Finance",
        "Investment Management",
        "Risk Assessment",
        "Financial Planning",
      ],
      experience: "18+ years in finance",
      linkedin: "https://linkedin.com/in/robert-williams-emas",
      twitter: "https://twitter.com/robert_williams_emas",
    },
    {
      id: 6,
      name: "Sim Guan Guan",
      title: "Co-Founder | S Global Resources Co",
      image:
        Sims,
      bio:
        "Chemical Engineer and gold tech innovator. \n Developed eco-friendly Sim process and drives SGR's Asia growth.",
      expertise: [
        "Digital Marketing",
        "Brand Development",
        "Community Building",
        "Strategic Partnerships",
      ],
      experience: "10+ years in marketing",
      linkedin: "https://linkedin.com/in/emily-rodriguez-emas",
      twitter: "https://twitter.com/emily_rodriguez_emas",
    },
    // {
    //   id: 7,
    //   name: "Thomas Anderson",
    //   title: "Head of Legal & Compliance",
    //   image:
    //     "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    //   bio:
    //     "Thomas is a legal expert specializing in blockchain regulation and financial compliance with over 14 years of experience in the legal field.\nHe holds a J.D. from Harvard Law School and has worked with leading law firms and regulatory bodies before joining EMAS-FI.\nHis expertise in cryptocurrency law, securities regulation, and international compliance ensures that our platform operates within all legal frameworks.\nThomas is responsible for navigating the complex regulatory landscape and ensuring that EMAS-FI maintains the highest standards of legal compliance across all jurisdictions.",
    //   expertise: [
    //     "Blockchain Law",
    //     "Securities Regulation",
    //     "International Compliance",
    //     "Legal Strategy",
    //   ],
    //   experience: "14+ years in legal",
    //   linkedin: "https://linkedin.com/in/thomas-anderson-emas",
    //   twitter: "https://twitter.com/thomas_anderson_emas",
    // },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3); // xl: 3 items
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(2); // lg: 2 items
      } else {
        setItemsPerView(1); // mobile/tablet: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleSeeMore = (memberId) => {
    setSelectedMember(selectedMember === memberId ? null : memberId);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return prev >= teamMembers.length - 1 ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev <= 0 ? teamMembers.length - 1 : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  // Calculate visible slides based on current index and items per view
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      slides.push(teamMembers[index]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  // Calculate the number of dots needed
  const totalDots = teamMembers.length;
  const activeDotIndex = currentIndex;

  return (
    <section
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 w-full min-h-screen bg-cover bg-center bg-no-repeat"
      id="team"
      style={{ backgroundImage: `url(${team})` }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col max-w-screen-2xl mx-auto items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col items-center gap-3 sm:gap-4 relative w-full text-center">
          <h2 className="relative mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-readdy-link-semantic-heading-2 font-[number:var(--readdy-link-semantic-heading-2-font-weight)] text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[length:var(--readdy-link-semantic-heading-2-font-size)] tracking-[var(--readdy-link-semantic-heading-2-letter-spacing)] leading-[var(--readdy-link-semantic-heading-2-line-height)] [font-style:var(--readdy-link-semantic-heading-2-font-style)]">
            Meet Our Team
          </h2>

          <div className="flex flex-col max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full items-center pt-0 pb-2 px-2 sm:px-4 relative">
            <p className="relative w-fit mt-[-1.00px] font-normal text-readdylinkmischka text-xs sm:text-sm md:text-base lg:text-lg text-center tracking-[0] leading-5 sm:leading-6 font-['Montserrat',Helvetica]">
              Experts in finance, technology, and blockchain working together to
              revolutionize digital assets.
            </p>
          </div>

          <div className="relative w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)]" />
        </header>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-[#d4af37] p-2 sm:p-3 rounded-full border border-[#d4af37] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-[#d4af37] p-2 sm:p-3 rounded-full border border-[#d4af37] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-8 sm:mx-12 md:mx-16">
            <div className="flex transition-transform duration-500 ease-in-out">
              {visibleSlides.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  {/* Main Team Card */}
                  <Card className="bg-black/60 backdrop-blur-sm border-2 border-[#d4af37] rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-0">
                      {/* Member Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      </div>

                      {/* Member Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Montserrat',Helvetica] leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 [font-family:'Montserrat',Helvetica] leading-tight">
                          {member.title}
                        </p>

                        <Button
                          onClick={() => handleSeeMore(member.id)}
                          className="w-full bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black font-semibold py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-md sm:rounded-lg hover:opacity-90 transition-opacity [font-family:'Montserrat',Helvetica] transform hover:scale-105 transition-all duration-200"
                        >
                          See More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDotIndex === index
                    ? 'bg-[#d4af37] scale-110'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Info Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
          <Card className="bg-[#1a1a1a] border-2 border-[#d4af37] rounded-xl sm:rounded-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
            <CardContent className="p-3 sm:p-4 md:p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-[#d4af37] hover:text-white text-xl sm:text-2xl font-bold z-10 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                ×
              </button>

              {/* Member Details */}
              {(() => {
                const member = teamMembers.find(m => m.id === selectedMember);
                if (!member) return null;

                return (
                  <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                    <div className="lg:w-1/3 flex justify-center lg:justify-start">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 sm:w-56 md:w-64 lg:w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="lg:w-2/3 space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
                          {member.name}
                        </h3>
                        <p className="text-[#d4af37] text-sm sm:text-base md:text-lg mb-1 sm:mb-2 [font-family:'Montserrat',Helvetica]">
                          {member.title}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm [font-family:'Montserrat',Helvetica]">
                          {member.experience}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[#d4af37] font-semibold mb-1 sm:mb-2 text-sm sm:text-base [font-family:'Montserrat',Helvetica]">
                          Biography
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed [font-family:'Montserrat',Helvetica]">
                          {member.bio.split("\n").map((paragraph, index) => (
                            <span key={index}>
                              {paragraph}
                              {index < member.bio.split("\n").length - 1 && (
                                <>
                                  <br />
                                  <br />
                                </>
                              )}
                            </span>
                          ))}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[#d4af37] font-semibold mb-1 sm:mb-2 text-sm sm:text-base [font-family:'Montserrat',Helvetica]">
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {member.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-[#d4af37] text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium [font-family:'Montserrat',Helvetica]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-8 sm:w-10 h-8 sm:h-10 items-center justify-center rounded-full border border-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                        >
                          <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 text-[#d4af37]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-8 sm:w-10 h-8 sm:h-10 items-center justify-center rounded-full border border-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                        >
                          <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 text-[#d4af37]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.164-10.148-5.144-.424.722-.666 1.561-.666 2.457 0 1.696.863 3.193 2.173 4.071-.803-.026-1.56-.247-2.228-.616v.062c0 2.367 1.683 4.342 3.918 4.784-.409.111-.84.171-1.284.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.316-3.809 2.1-6.102 2.1-.395 0-.79-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.985 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.46-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};