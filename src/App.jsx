import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LaunchApp } from "./pages/LaunchApp";
import { AppProvider } from "./context/AppContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { PageLoader } from "./components/common/PageLoader";
import { updateSEO } from "./utils/seo";
import "./index.css";
import "./styles/globals.css";

/**
 * App Content Component with Loading Logic
 */
const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Initial page load
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // Navigation loading and SEO updates
  // useEffect(() => {
  //   setIsNavigating(true);

    // Update SEO based on current route
    const updatePageSEO = () => {
      switch (location.pathname) {
        case '/':
          updateSEO({
            title: 'EMAS-FI | Gold-Backed Blockchain Investment Platform',
            description: 'Revolutionary blockchain platform bridging gold mining and digital assets. Invest in physical gold-backed tokens with sustainable passive income opportunities.',
            keywords: 'gold-backed cryptocurrency, blockchain investment, digital gold, mining tokens, DeFi, passive income',
            url: 'https://emas-fi.com',
            type: 'website'
          });
          break;
        case '/about':
          updateSEO({
            title: 'About EMAS-FI | Gold Mining & Blockchain Innovation',
            description: "Learn about EMAS-FI's mission to bridge real-world gold mining with blockchain technology. Meet our team and discover our innovative approach to digital assets.",
            keywords: 'EMAS-FI team, gold mining blockchain, digital asset innovation, cryptocurrency team',
            url: 'https://emas-fi.com/about',
            type: 'website'
          });
          break;
        case '/launch-app':
          updateSEO({
            title: 'Launch App - EMAS-FI | Coming Soon',
            description: 'Thank you for your interest in EMAS-FI. Our application is coming soon.',
            keywords: 'EMAS-FI app, launch app, coming soon',
            url: 'https://emas-fi.com/launch-app',
            type: 'website'
          });
          break;
        default:
          updateSEO({
            title: 'EMAS-FI | Gold-Backed Blockchain Investment Platform',
            description: 'Revolutionary blockchain platform bridging gold mining and digital assets.',
            url: 'https://emas-fi.com',
            type: 'website'
          });
      }
    };

    // updatePageSEO();

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1500);

  //   return () => clearTimeout(timer);
  // }, [location.pathname]);

  return (
    <>
      <PageLoader
        isLoading={isLoading || isNavigating}
        onLoadingComplete={() => {
          setIsLoading(false);
          setIsNavigating(false);
        }}
      />

      <ScrollToTop />
      <div className="min-h-screen bg-readdylinkwhite-cod-gray">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/launch-app" element={<LaunchApp />} />
          {/* Future routes can be added here */}
        </Routes>
      </div>
    </>
  );
};

/**
 * Main App Component
 * Central application component that handles routing, global providers, and error boundaries
 */
export const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
};