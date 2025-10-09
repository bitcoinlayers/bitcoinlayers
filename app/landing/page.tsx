"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8 px-4">
            {/* Main heading using the site's main font (Playfair Display) */}
            <h1 className="font-playfair-display text-6xl md:text-8xl lg:text-9xl italic font-normal text-foreground">
                Welcome to<br />
                Bitcoin Layers
            </h1>
            
            {/* Description text */}
            <div className="max-w-2xl space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground font-public-sans">
                    Bitcoin Layers is a website that aims to provide neutral analysis on bitcoin L2s. It is no longer actively maintained.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground font-public-sans">
                    If you'd like to fork the repo and maintain the project, head to our{" "}
                    <a 
                        href="https://github.com/bitcoinlayers/bitcoinlayers" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand hover:underline font-medium"
                    >
                        github. The code is available under an MIT license.
                    </a>
                </p>
            </div>
            
            {/* Button to go to the main site */}
            <div className="pt-4">
                <Link href="/site">
                    <Button 
                        variant="brand" 
                        className="text-lg px-8 py-3 h-auto rounded-full border-2 border-brand bg-brand text-white hover:bg-brand/90 font-medium"
                    >
                        Or head to the site
                    </Button>
                </Link>
            </div>
        </div>
    );
}
