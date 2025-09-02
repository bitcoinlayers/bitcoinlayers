"use client";

import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, ExternalLinkIcon, X } from "lucide-react";
import Link from "next/link";

export default function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Alert className="bg-[#fff4ed] dark:bg-blue-950/20 border-[#ffe6d4] dark:border-blue-800 mb-8 relative">
      <InfoIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Close welcome banner"
      >
        <X className="h-4 w-4 text-[#1a202c] dark:text-blue-200" />
      </button>
      <AlertTitle className="text-[#1a202c] dark:text-blue-100 font-semibold pr-8">
        Welcome to Bitcoin Layers
      </AlertTitle>
      <AlertDescription className="text-[#1a202c] dark:text-blue-200 mt-2 pr-8">
        <p className="mb-3">
          Bitcoin Layers is an open-source platform for analyzing bitcoin l2s, wrapped bitcoin tokens, and other bitcoin-adjacent protocols. Learn more about the tradeoffs below.
        </p>
        <Link 
          href="https://lxresearch.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
        >
          Learn more about bitcoin layers
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </Link>
      </AlertDescription>
    </Alert>
  );
} 