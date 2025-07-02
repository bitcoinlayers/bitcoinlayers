import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <Alert className="bg-[#fff4ed] dark:bg-blue-950/20 border-[#ffe6d4] dark:border-blue-800 mb-8">
      <InfoIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      <AlertTitle className="text-[#1a202c] dark:text-blue-100 font-semibold">
        Welcome to Bitcoin Layers
      </AlertTitle>
      <AlertDescription className="text-[#1a202c] dark:text-blue-200 mt-2">
        <p className="mb-3">
          Bitcoin Layers is an open-source platform for analyzing bitcoin l2s, wrapped bitcoin tokens, and other bitcoin-adjacent protocols. Learn more about the tradeoffs below.
        </p>
        <Link 
          href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch10.asciidoc#soft-forks"
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