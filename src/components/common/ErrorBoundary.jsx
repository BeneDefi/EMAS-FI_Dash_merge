import React, { Component } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    handleReload = () => {
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-[#1a1612] via-[#13100f] to-[#0f0c0b] flex items-center justify-center p-4">
                    <Card className="max-w-2xl w-full bg-[#1a1a1a] border-2 border-[#d4af37] rounded-xl">
                        <CardContent className="p-8 text-center">
                            <div className="mb-6">
                                <div className="w-20 h-20 mx-auto mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] rounded-full flex items-center justify-center">
                                    <span className="text-2xl">⚠️</span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-medium mb-4 bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Kalnia',Helvetica]">
                                    Oops! Something went wrong
                                </h1>
                                <p className="text-gray-300 text-base mb-6 [font-family:'Montserrat',Helvetica]">
                                    We encountered an unexpected error. Our team has been notified and is working to fix this issue.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                                <Button
                                    onClick={this.handleReload}
                                    className="px-6 py-3 rounded-lg bg-[linear-gradient(90deg,rgba(191,149,63,1)_0%,rgba(252,246,186,1)_25%,rgba(179,135,40,1)_50%,rgba(251,245,183,1)_75%,rgba(170,119,28,1)_100%)] text-black font-semibold hover:opacity-90 transition-opacity [font-family:'Montserrat',Helvetica]"
                                >
                                    Reload Page
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={this.handleGoHome}
                                    className="px-6 py-3 rounded-lg border-2 border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 [font-family:'Montserrat',Helvetica]"
                                >
                                    Go to Home
                                </Button>
                            </div>

                            {process.env.NODE_ENV === "development" && this.state.error && (
                                <details className="text-left bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
                                    <summary className="cursor-pointer text-[#d4af37] font-medium mb-2">
                                        Error Details (Development Mode)
                                    </summary>
                                    <pre className="text-xs text-gray-400 overflow-auto">
                                        {this.state.error.toString()}
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </details>
                            )}
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}
