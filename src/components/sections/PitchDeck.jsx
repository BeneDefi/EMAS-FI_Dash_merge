import { DownloadIcon, ImageIcon, X, CheckCircle, AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Container_2 } from "../../assets";

export const PitchDeck = () => {
    // State management for email subscription
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation function
    const validateEmail = (email) => {
        // Check if email is empty
        if (!email.trim()) {
            return 'Email address is required';
        }
        
        // Check email format using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        
        return '';
    };

    // Check if email already exists in local storage
    const isEmailAlreadySubscribed = (email) => {
        try {
            const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
            return subscribedEmails.includes(email.toLowerCase());
        } catch (error) {
            console.error('Error checking subscribed emails:', error);
            return false;
        }
    };

    // Add email to local storage
    const addEmailToSubscribed = (email) => {
        try {
            const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
            subscribedEmails.push(email.toLowerCase());
            localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
            return true;
        } catch (error) {
            console.error('Error saving email to local storage:', error);
            return false;
        }
    };

    // Handle email subscription
    const handleSubscribe = async () => {
        // Clear previous errors
        setEmailError('');
        setIsSubmitting(true);

        // Validate email
        const validationError = validateEmail(email);
        if (validationError) {
            setEmailError(validationError);
            setIsSubmitting(false);
            return;
        }

        // Check if email is already subscribed
        if (isEmailAlreadySubscribed(email)) {
            setEmailError('This email address is already subscribed to our newsletter');
            setIsSubmitting(false);
            return;
        }

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Add email to local storage
        const success = addEmailToSubscribed(email);
        
        if (success) {
            // Show success popup
            setShowSuccessPopup(true);
            // Clear email input
            setEmail('');
            // Auto hide popup after 3 seconds
            setTimeout(() => {
                setShowSuccessPopup(false);
            }, 3000);
        } else {
            setEmailError('Failed to subscribe. Please try again.');
        }

        setIsSubmitting(false);
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Clear error when user starts typing
        if (emailError) {
            setEmailError('');
        }
    };

    // Handle Enter key press in email input
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubscribe();
        }
    };

    // Close success popup
    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    const handleViewPitchdeck = () => {
        // Open pitch deck in new tab
        window.open('https://pdflink.to/ca23fd69/', '_blank');
    };

    const handleDownloadWhitepaper = () => {
        // Create a temporary link element and trigger download
        const link = document.createElement('a');
        link.href = '/EMAS-FI.pdf';
        link.download = 'EMAS-FI.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="flex flex-col items-center py-16 sm:py-20 lg:py-24 relative w-full" id="pitch-deck">
            {/* Success Popup Modal */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-readdylinkblack border border-[#d4af37] rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative shadow-[0px_25px_50px_-12px_#00000040]">
                        {/* Close button */}
                        <button
                            onClick={closeSuccessPopup}
                            className="absolute top-4 right-4 text-readdylinkmischka hover:text-[#d4af37] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        {/* Success content */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#d4af37]/20 rounded-full p-3 mb-4">
                                <CheckCircle className="w-8 h-8 text-[#d4af37]" />
                            </div>
                            <h3 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent text-xl sm:text-2xl font-semibold mb-2">
                                Successfully Subscribed!
                            </h3>
                            <p className="text-readdylinkmischka text-sm sm:text-base leading-6 mb-6">
                                Thank you for subscribing to our newsletter. You'll receive the latest updates and exclusive offers from EMAS-FI.
                            </p>
                            <Button
                                onClick={closeSuccessPopup}
                                className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack hover:opacity-90 px-6 py-3 rounded-lg"
                            >
                                Got it!
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(151deg,rgba(212,175,55,0.1)_0%,rgba(212,175,55,0)_50%)]" />
            <div className="absolute w-full h-full top-0 left-0 bg-readdylinkblack" />

            <div className="flex flex-col max-w-screen-2xl w-full items-start gap-16 sm:gap-24 px-4 sm:px-6 py-0 relative z-10">
                <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12">
                    <div className="flex flex-col items-start gap-6 w-full lg:w-1/2 order-2 lg:order-1">
                        <h2 className="self-stretch bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent text-2xl sm:text-3xl lg:text-[length:var(--readdy-link-semantic-heading-2-font-size)] tracking-[var(--readdy-link-semantic-heading-2-letter-spacing)] leading-[var(--readdy-link-semantic-heading-2-line-height)]">
                            View our Pitch Deck
                        </h2>

                        <div className="flex flex-col items-start pt-0 pb-2">
                            <p className="text-sm sm:text-[length:var(--readdy-link-montserrat-body-font-size)] leading-[var(--readdy-link-montserrat-body-line-height)]">
                                <span className="text-gray-300">
                                    Get a comprehensive understanding of{" "}
                                </span>
                                <span className="text-[#ffb006]">EMAS-FI's</span>
                                <span className="text-gray-300">
                                    {" "}
                                    technology, tokenomics, and roadmap. Our detailed whitepaper outlines our vision for
                                    revolutionizing the gold-backed digital asset space.
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full">
                            <Button
                                variant="outline"
                                className="gap-2 px-6 sm:px-8 py-3 rounded-lg border border-solid border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 w-full sm:w-auto"
                                onClick={handleViewPitchdeck}
                            >
                                <ImageIcon className="w-4 h-4" />
                                <span className="text-[length:var(--readdy-link-semantic-button-font-size)] leading-[var(--readdy-link-semantic-button-line-height)]">
                                    View Pitchdeck
                                </span>
                            </Button>

                            <Button 
                                className="gap-2 px-6 sm:px-8 py-3 rounded-lg bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack hover:opacity-90 w-full sm:w-auto"
                                onClick={handleDownloadWhitepaper}
                            >
                                <DownloadIcon className="w-4 h-4" />
                                <span className="text-[length:var(--readdy-link-semantic-button-font-size)] leading-[var(--readdy-link-semantic-button-line-height)]">
                                    Download Pitchdeck
                                </span>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[626.52px] rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] overflow-hidden">
                            <img
                                src={Container_2}
                                alt="Beautiful container image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <Card className="w-full bg-readdylinkblack-70 border-[#d4af37] rounded-2xl p-6 sm:p-8 lg:p-12">
                    <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                            <div className="flex flex-col w-full lg:w-2/3 gap-4">
                                <h3 className="bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] text-transparent text-xl sm:text-2xl tracking-[-0.8px] sm:tracking-[-1.20px] leading-7 sm:leading-8">
                                    Stay Updated
                                </h3>
                                <p className="text-readdylinkmischka text-sm sm:text-base leading-6">
                                    Subscribe to our newsletter to receive the latest updates,
                                    announcements, and exclusive offers.
                                </p>
                            </div>

                            <div className="w-full lg:w-1/3">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="flex-1">
                                        <Input
                                            value={email}
                                            onChange={handleEmailChange}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Your email address"
                                            className={`rounded-r-none sm:rounded-r-none rounded-b-none sm:rounded-b-lg bg-[#0000004c] border-[#d4af374c] text-readdylinkgray-chateau text-[length:var(--readdy-link-semantic-input-font-size)] leading-[var(--readdy-link-semantic-input-line-height)] mb-2 sm:mb-0 ${
                                                emailError ? 'border-red-500 border-2' : ''
                                            }`}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <Button 
                                        onClick={handleSubscribe}
                                        disabled={isSubmitting}
                                        className="rounded-l-none sm:rounded-l-none rounded-t-none sm:rounded-t-lg bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-readdylinkblack hover:opacity-90 w-full sm:w-auto disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                    </Button>
                                </div>
                                
                                {/* Error message display */}
                                {emailError && (
                                    <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>{emailError}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};