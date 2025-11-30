import React from "react";
import { Foooter, logo } from "../../assets";
import { Twitter, Linkedin, MessageCircle, Send, MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const socialLinks = [
        { icon: Twitter, alt: "Twitter", href: "https://x.com/emas_fi" },
        { icon: Linkedin, alt: "LinkedIn", href: "https://linkedin.com/company/emas-fi" },
        { icon: MessageCircle, alt: "Discord", href: "https://discord.gg/emas-fi" },
        { icon: Send, alt: "Telegram", href: "https://t.me/emasfiofficial" },
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "Team", href: "#team" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pitch Deck", href: "/pitch-deck.pdf" },
    ];

    const resources = [
        { name: "FAQ", href: "#faq" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Security", href: "/security" },
        { name: "Careers", href: "/careers" },
    ];

    const contactInfo = [
        { icon: MapPin, text: "One Financial Center, London, UK" },
        { icon: Mail, text: "Investor@emas-fi.com", href: "mailto:investor@emas-fi.com" },
        { icon: Phone, text: "+44 (0) 20 7123 4567", href: "tel:+442071234567" },
    ];

    const footerLinks = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ];

    return (
        <footer 
            className="flex flex-col items-center pt-12 sm:pt-16 lg:pt-[65px] pb-8 sm:pb-12 lg:pb-16 px-0 relative self-stretch w-full flex-[0_0_auto] border-t border-solid border-[#d4af37] bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${Foooter})`,
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Dark overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1a1612]/95 via-[#13100f]/90 to-[#0f0c0b]/95 z-0"></div> */}
            
            <div className="flex flex-col max-w-screen-2xl w-full items-start gap-8 sm:gap-12 px-4 sm:px-6 py-0 relative flex-[0_0_auto] z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    {/* Company Info */}
                    <div className="flex flex-col items-start gap-6 relative">
                        <div className="flex items-center gap-2.5 relative">
                            <div
                                className="relative w-[40px] h-[40px] sm:w-[57px] sm:h-[57px] bg-cover bg-center rounded-full border-2 border-[#d4af37]/30 shadow-lg"
                                style={{ backgroundImage: `url(${logo})` }}
                            />
                            <div className="relative w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-transparent text-xl sm:text-2xl lg:text-3xl tracking-[0] leading-tight whitespace-nowrap drop-shadow-sm">
                                EMAS-FI
                            </div>
                        </div>

                        <p className="relative self-stretch mt-[-1.00px] font-normal text-gray-200 text-sm sm:text-base tracking-[0] leading-6 drop-shadow-sm">
                            Revolutionary blockchain technology
                            backed by gold, bringing stability and
                            security to the digital asset space.
                        </p>

                        <div className="flex items-start gap-4 relative self-stretch w-full">
                            {socialLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={`social-${index}`}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center p-2 relative rounded-full border border-solid border-[#d4af37] hover:bg-[#d4af37]/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:shadow-[#d4af37]/25"
                                    >
                                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37]" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-start gap-6 relative">
                        <h4 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-lg sm:text-xl tracking-[0] leading-tight drop-shadow-sm">
                            Quick Links
                        </h4>
                        <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                            {quickLinks.map((link, index) => (
                                <div key={`quick-link-${index}`} className="flex flex-col items-start relative self-stretch w-full">
                                    <div className="inline-flex items-start relative">
                                        <a
                                            href={link.href}
                                            className="relative w-fit mt-[-1.00px] font-normal text-gray-200 text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#d4af37] transition-all duration-300 cursor-pointer hover:translate-x-1 drop-shadow-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col items-start gap-6 relative">
                        <h4 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-lg sm:text-xl tracking-[0] leading-tight drop-shadow-sm">
                            Resources
                        </h4>
                        <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                            {resources.map((resource, index) => (
                                <div key={`resource-${index}`} className="flex flex-col items-start relative self-stretch w-full">
                                    <div className="inline-flex items-start relative">
                                        <a
                                            href={resource.href}
                                            className="relative w-fit mt-[-1.00px] font-normal text-gray-200 text-sm sm:text-base tracking-[0] leading-6 hover:text-[#d4af37] transition-all duration-300 cursor-pointer hover:translate-x-1 drop-shadow-sm"
                                        >
                                            {resource.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col items-start gap-6 relative">
                        <h4 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-lg sm:text-xl tracking-[0] leading-tight drop-shadow-sm">
                            Contact Us
                        </h4>
                        <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                const ContactContent = (
                                    <div className="flex items-start relative self-stretch w-full group">
                                        <div className="flex w-6 h-6 sm:w-8 sm:h-6 pl-0 pr-3 pt-1 pb-0 flex-col items-start relative">
                                            <div className="flex w-4 h-4 sm:w-5 sm:h-5 items-center justify-center relative">
                                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <div className="relative w-fit mt-[-1.00px] font-normal text-gray-200 text-sm sm:text-base drop-shadow-sm">
                                            {info.text}
                                        </div>
                                    </div>
                                );

                                return info.href ? (
                                    <a key={`contact-${index}`} href={info.href} className="hover:text-[#d4af37] transition-colors duration-300">
                                        {ContactContent}
                                    </a>
                                ) : (
                                    <div key={`contact-${index}`}>
                                        {ContactContent}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-600/50 backdrop-blur-sm"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4 relative self-stretch w-full">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="relative w-fit mt-[-1.00px] font-normal text-gray-300 text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap drop-shadow-sm">
                            © 2025 EMAS-FI. All rights reserved.
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {footerLinks.map((link, index) => (
                            <div key={`footer-link-${index}`} className="inline-flex flex-col items-start">
                                <a
                                    href={link.href}
                                    className="relative w-fit mt-[-1.00px] font-normal text-gray-300 text-xs sm:text-sm hover:text-[#d4af37] transition-all duration-300 cursor-pointer hover:scale-105 drop-shadow-sm"
                                >
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};