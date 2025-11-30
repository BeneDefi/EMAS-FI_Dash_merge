import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { logo } from "../../assets";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    const navLinks = [
	{ text: "About Us", href: "/about" },
	{ text: "Features", href: "#features" },
	{ text: "Tokenomics", href: "#tokenomics" },
	{ text: "Team", href: "#team" },
	{ text: "How it Works", href: "#how-it-works" },
	{ text: "Pitch Deck", href: "#pitch-deck" },
    ];

    useEffect(() => {
	const updateActiveLink = () => {
	    const currentPath = window.location.pathname;
	    const currentHash = window.location.hash;

	    // Check if we're on a specific page
	    if (currentPath !== '/') {
	        setActiveLink(currentPath);
	        return;
	    }

	    // Check hash-based navigation
	    if (currentHash) {
	        setActiveLink(currentHash);
	        return;
	    }

	    // Check which section is currently in view
	    const sections = ['#features', '#tokenomics', '#team', '#how-it-works', '#pitch-deck'];
	    let currentSection = '';

	    sections.forEach(section => {
	        const element = document.querySelector(section);
	        if (element) {
	            const rect = element.getBoundingClientRect();
	            const isInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
	            if (isInView) {
	                currentSection = section;
	            }
	        }
	    });

	    setActiveLink(currentSection);
	};

	// Initial check
	updateActiveLink();

	// Listen for URL changes
	const handleUrlChange = () => {
	    updateActiveLink();
	};

	// Listen for scroll events to update active section
	const handleScroll = () => {
	    if (window.location.pathname === '/') {
	        updateActiveLink();
	    }
	};

	window.addEventListener('popstate', handleUrlChange);
	window.addEventListener('scroll', handleScroll);
	window.addEventListener('hashchange', handleUrlChange);

	return () => {
	    window.removeEventListener('popstate', handleUrlChange);
	    window.removeEventListener('scroll', handleScroll);
	    window.removeEventListener('hashchange', handleUrlChange);
	};
    }, []);

    const handleNavClick = (href) => {
	if (href.startsWith('/')) {
	    window.location.href = href;
	} else {
	    if (window.location.pathname === '/') {
	        const element = document.querySelector(href);
	        if (element) {
	            element.scrollIntoView({ behavior: 'smooth' });
	        }
	    } else {
	        window.location.href = `/${href}`;
	    }
	}
	setIsMobileMenuOpen(false);
    };

    const handleLaunchAppClick = (e) => {
	e.preventDefault();
	e.stopPropagation();
	window.location.href = '/launch-app';
	setIsMobileMenuOpen(false);
    };

    const isLinkActive = (href) => {
	return activeLink === href;
    };

    return (
	<header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full items-center justify-center bg-transparent">
	    <div className="flex flex-col items-center px-4 sm:px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#000000cc] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
	        <div className="flex max-w-screen-2xl w-full items-center justify-between gap-4 sm:gap-8 relative flex-[0_0_auto]">
	            {/* Logo */}
	            <div className="flex items-center gap-2 sm:gap-2.5 relative cursor-pointer" onClick={() => window.location.href = '/'}>
	                <div className="relative w-[40px] h-[40px] sm:w-[57px] sm:h-[57px] rounded-full overflow-hidden bg-gradient-to-br  p-1">
	                    <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center">
	                        <img
	                            src={logo}
	                            alt="EMAS-FI Logo"
	                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-lg"
	                        />
	                    </div>
	                </div>
	                <div className="relative w-fit bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica] font-semibold text-transparent text-xl sm:text-2xl lg:text-3xl tracking-[0] leading-tight whitespace-nowrap">
	                    EMAS-FI
	                </div>
	            </div>

	            {/* Desktop Navigation */}
	            <div className="hidden lg:flex">
	                <NavigationMenu className="max-w-none">
	                    <NavigationMenuList className="flex items-center gap-6 xl:gap-8">
	                        {navLinks.map((link, index) => (
	                            <NavigationMenuItem key={index}>
	                                <NavigationMenuLink
	                                    className={`text-lg font-readdy-link-semantic-link font-[number:var(--readdy-link-semantic-link-font-weight)] text-readdylinkold-gold text-[length:var(--readdy-link-semantic-link-font-size)] tracking-[var(--readdy-link-semantic-link-letter-spacing)] leading-[var(--readdy-link-semantic-link-line-height)] whitespace-nowrap [font-style:var(--readdy-link-semantic-link-font-style)] hover:text-opacity-80 transition-all cursor-pointer relative ${
	                                        isLinkActive(link.href) 
	                                            ? 'text-opacity-100 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] after:transition-all after:duration-300' 
	                                            : 'text-opacity-80'
	                                    }`}
	                                    onClick={() => handleNavClick(link.href)}
	                                >
	                                    {link.text}
	                                </NavigationMenuLink>
	                            </NavigationMenuItem>
	                        ))}

	                        {/* Launch App Button */}
	                        <NavigationMenuItem>
	                            <div className="relative overflow-hidden rounded-lg">
	                                <Button 
	                                    className="px-4 xl:px-6 py-2 rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack font-readdy-link-semantic-button font-[number:var(--readdy-link-semantic-button-font-weight)] text-[length:var(--readdy-link-semantic-button-font-size)] text-center tracking-[var(--readdy-link-semantic-button-letter-spacing)] leading-[var(--readdy-link-semantic-button-line-height)] whitespace-nowrap [font-style:var(--readdy-link-semantic-button-font-style)] hover:opacity-90 transition-opacity"
	                                    onClick={handleLaunchAppClick}
	                                >
	                                    Launch App
	                                </Button>
	                                <div className="absolute w-[352px] h-20 -top-5 left-[-88px] rotate-[30deg] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)] pointer-events-none" />
	                            </div>
	                        </NavigationMenuItem>
	                    </NavigationMenuList>
	                </NavigationMenu>
	            </div>

	            {/* Mobile Menu Button and Connect Wallet */}
	            <div className="flex lg:hidden items-center gap-3">
	                {/* <Button className="px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack font-readdy-link-semantic-button hover:opacity-90 transition-opacity">
	                    Connect
	                </Button> */}
	                <button
	                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
	                    className="p-2 text-readdylinkold-gold hover:text-opacity-80 transition-colors"
	                >
	                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
	                </button>
	            </div>
	        </div>

	        {/* Mobile Navigation Menu */}
	        {isMobileMenuOpen && (
	            <div className="lg:hidden absolute top-full left-0 right-0 bg-[#000000f2] backdrop-blur-[6px] border-t border-[#d4af37] z-50">
	                <div className="flex flex-col py-4 px-6 space-y-4">
	                    {navLinks.map((link, index) => (
	                        <button
	                            key={index}
	                            className={`font-readdy-link-semantic-link font-[number:var(--readdy-link-semantic-link-font-weight)] text-readdylinkold-gold text-[length:var(--readdy-link-semantic-link-font-size)] tracking-[var(--readdy-link-semantic-link-letter-spacing)] leading-[var(--readdy-link-semantic-link-line-height)] [font-style:var(--readdy-link-semantic-link-font-style)] hover:text-opacity-80 transition-all py-2 border-b border-gray-700 last:border-b-0 text-left relative ${
	                                isLinkActive(link.href) 
	                                    ? 'text-opacity-100 border-l-2 border-l-[#d4af37] pl-4 bg-gradient-to-r from-[#d4af37]/10 to-transparent' 
	                                    : 'text-opacity-80 pl-0'
	                            }`}
	                            onClick={() => handleNavClick(link.href)}
	                        >
	                            {link.text}
	                        </button>
	                    ))}
	                    
	                    {/* Launch App Button in Mobile Dropdown */}
	                    <div className="pt-2">
	                        <Button 
	                            className="w-full px-4 py-2 rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack font-readdy-link-semantic-button font-[number:var(--readdy-link-semantic-button-font-weight)] text-[length:var(--readdy-link-semantic-button-font-size)] text-center tracking-[var(--readdy-link-semantic-button-letter-spacing)] leading-[var(--readdy-link-semantic-button-line-height)] whitespace-nowrap [font-style:var(--readdy-link-semantic-button-font-style)] hover:opacity-90 transition-opacity"
	                            onClick={handleLaunchAppClick}
	                        >
	                            Launch App
	                        </Button>
	                    </div>
	                </div>
	            </div>
	        )}
	    </div>
	</header>
    );
};