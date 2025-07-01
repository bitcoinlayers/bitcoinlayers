"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState } from "react";
import { BitcoinIcon, NetworkIcon, PiggyBankIcon, ChevronDown, ChevronRight } from "lucide-react";
import { allLayers } from "@/util/layer_index";
import { CustodyTitle } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Link from "next/link";
import Image from "next/image";

type CustodyChartProps = {
  title?: string;
  description?: string;
};

// Custody mechanism definitions
const custodyMechanisms = {
  [CustodyTitle.BitcoinNative]: {
    label: "Bitcoin Native",
    description: "These protocols enable unilateral exits. Bitcoin native protocols can leverage payment channels, Arks, or Statechains to ensure users have a unilateral exit path. Trust assumptions differ between each design. Learn more below.",
  },
  [CustodyTitle.Distributed]: {
    label: "Distributed",
    description: "These protocols distribute trust across multiple parties through federations, multi-signature wallets, or Multi-Party Computation (MPC) schemes. While not fully self-custodial, they reduce single points of failure by requiring multiple entities to collude to steal funds. This includes federated bridges, threshold signatures, and validator-managed custody.",
  },
  [CustodyTitle.Centralized]: {
    label: "Centralized",
    description: "These protocols rely on centralized custodians or trusted third parties to hold Bitcoin reserves backing tokens on their networks. Users must trust these entities not to steal funds and to maintain proper reserves. This includes major centralized exchanges and institutional custody providers.",
  },
};

// Detailed tradeoffs for each custody mechanism
const custodyTradeoffs = {
  [CustodyTitle.BitcoinNative]: {
    title: "Bitcoin Native Custody Mechanisms",
    subtitle: "Deep dive into different approaches to maintaining Bitcoin's security guarantees",
    mechanisms: [
      {
        name: "Payment Channels",
        description: "Payment channels using 2-of-2 multisigs",
        pros: [
          "Unilateral exit paths maintained",
          "Mechanism to prevent fraud",
          "Can be leveraged peer-to-peer",
        ],
        cons: [
          "Requires active liquidity management",
          "Channel capacity limitations",
          "Need to monitor for force closures",
          "Inbound liquidity bootstrapping challenges"
        ],
        riskLevel: "Low",
        networks: ["lightning"]
      },
      {
        name: "Statechains",
        description: "Statechains using 2-of-2 multisigs (or MPC schemes)",
        pros: [
          "Unilateral exit paths maintained",
          "No channel management overhead"
        ],
        cons: [
          "Trust operators to delete keyshares held with previous owners",
          "Key deletion not cryptographically verifiable",
          "Previous owners can force current owners onchain"
        ],
        riskLevel: "Medium",
        networks: ["spark"]
      },
      {
        name: "Ark",
        description: "Shared UTXO pools with virtual transaction trees",
        pros: [
          "Unilateral exit paths maintained",
          "No channel management overhead"
        ],
        cons: [
          "Interactivity: users must coordinate with ASP",
          "ASP liquidity requirements",
          "Operator can double-spend out-of-round transactions"
        ],
        riskLevel: "Medium",
        networks: ["mercurylayer"]
      }
    ]
  }
};

// Helper function to get networks by custody type
const getNetworksByCustodyType = (custodyType: CustodyTitle): string[] => {
  return allLayers
    .filter(layer => layer.custodyTitle === custodyType)
    .map(layer => layer.slug);
};

// Network mapping utility to get full project data from slug
const getNetworkBySlug = (slug: string) => {
  return allLayers.find(layer => layer.slug === slug.trim().toLowerCase());
};

// Enhanced Network Card Component
const NetworkCard = ({ networkSlug }: { networkSlug: string }) => {
  const network = getNetworkBySlug(networkSlug);
  
  if (!network) {
    // Fallback for networks not found in layer index
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
          {networkSlug.trim()}
        </span>
      </div>
    );
  }

  return (
    <Link 
      href={`/layers/${network.slug}`}
      className="group bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Image
            src={`/logos/${network.slug}.png`}
            alt={`${network.title} logo`}
            width={24}
            height={24}
            className="rounded-sm"
            onError={(e) => {
              // Hide image on error and show fallback
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate block">
            {network.title}
          </span>
        </div>
        <div className="flex-shrink-0">
          <svg 
            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

// Toggle buttons component for custody mechanisms
const CustodyToggleButtons = ({ 
  selectedMechanism, 
  onMechanismClick 
}: { 
  selectedMechanism: string;
  onMechanismClick: (mechanism: string) => void;
}) => {
  const mechanisms = [
    { key: CustodyTitle.BitcoinNative, icon: BitcoinIcon, color: "blue" },
    { key: CustodyTitle.Distributed, icon: NetworkIcon, color: "green" },
    { key: CustodyTitle.Centralized, icon: PiggyBankIcon, color: "purple" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {mechanisms.map(({ key, icon: Icon, color }) => {
        const mechanism = custodyMechanisms[key];
        const networkCount = getNetworksByCustodyType(key).length;
        const isActive = selectedMechanism === key;
        
        return (
          <button
            key={key}
            className={`bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-900/20 dark:to-${color}-800/20 rounded-lg p-4 border border-${color}-200 dark:border-${color}-800 cursor-pointer transition-all hover:shadow-md ${
              isActive ? `ring-2 ring-${color}-500 shadow-lg` : ""
            }`}
            onClick={() => onMechanismClick(key)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className={`text-sm font-medium text-${color}-600 dark:text-${color}-400 flex items-center`}>
                  {mechanism.label}
                  <ChevronDown className={`ml-1 h-4 w-4 text-${color}-500 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                </p>
              </div>
              <div className="text-left">
                <p className={`text-2xl font-bold text-${color}-900 dark:text-${color}-100`}>
                  {networkCount}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Icon className={`h-8 w-8 text-${color}-500`} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

// Content panel showing mechanism description and networks
const MechanismContentPanel = ({ 
  selectedMechanism,
  onClose 
}: { 
  selectedMechanism: string | null;
  onClose: () => void;
}) => {
  const [showTradeoffs, setShowTradeoffs] = useState(false);
  
  if (!selectedMechanism || !custodyMechanisms[selectedMechanism as CustodyTitle]) return null;

  const mechanism = custodyMechanisms[selectedMechanism as CustodyTitle];
  const networks = getNetworksByCustodyType(selectedMechanism as CustodyTitle);
  
  const getColorClass = (mechanismKey: string) => {
    switch (mechanismKey) {
      case CustodyTitle.BitcoinNative: return "blue";
      case CustodyTitle.Distributed: return "green";
      case CustodyTitle.Centralized: return "purple";
      default: return "gray";
    }
  };
  
  const color = getColorClass(selectedMechanism);
  
  return (
    <div className="mt-6 mb-6 animate-in slide-in-from-top-2 duration-300">
      <div className={`bg-white dark:bg-gray-900/50 rounded-lg p-6 border border-${color}-200 dark:border-${color}-800 shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-semibold text-${color}-900 dark:text-${color}-100`}>
            {mechanism.label} Custody
          </h3>
          <button
            onClick={onClose}
            className={`text-${color}-600 dark:text-${color}-400 hover:text-${color}-800 dark:hover:text-${color}-200 transition-colors`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Description Section */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              How it works
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {parseTextWithLinks(mechanism.description)}
            </div>
            
            {/* Learn More Button - only show for Bitcoin Native */}
            {selectedMechanism === CustodyTitle.BitcoinNative && custodyTradeoffs[CustodyTitle.BitcoinNative] && (
              <div className="mt-4">
                <button
                  onClick={() => setShowTradeoffs(!showTradeoffs)}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {showTradeoffs ? "Show less" : "Learn more about mechanisms"}
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${showTradeoffs ? "rotate-180" : ""}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Expandable Tradeoffs Section */}
          {showTradeoffs && selectedMechanism === CustodyTitle.BitcoinNative && custodyTradeoffs[CustodyTitle.BitcoinNative] && (
            <div className="animate-in slide-in-from-top-2 duration-300 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {custodyTradeoffs[CustodyTitle.BitcoinNative].title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {custodyTradeoffs[CustodyTitle.BitcoinNative].subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                {custodyTradeoffs[CustodyTitle.BitcoinNative].mechanisms.map((mech, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h6 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {mech.name}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {mech.description}
                        </p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        mech.riskLevel === "Low" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" :
                        mech.riskLevel === "Medium-Low" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400" :
                        mech.riskLevel === "Medium" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400" :
                        "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                      }`}>
                        {mech.riskLevel} Risk
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                          ✓ Advantages
                        </div>
                        <ul className="space-y-1">
                          {mech.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-red-700 dark:text-red-400 mb-2">
                          ⚠ Tradeoffs
                        </div>
                        <ul className="space-y-1">
                          {mech.cons.map((con, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-red-600 dark:text-red-400 mr-2 flex-shrink-0 mt-0.5">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                                         </div>
                     
                     {/* Networks for this mechanism */}
                     {mech.networks && mech.networks.length > 0 && (
                       <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                         <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                           Networks using {mech.name}:
                         </div>
                         <div className="flex flex-wrap gap-3">
                           {mech.networks.map((networkSlug, i) => {
                             const network = getNetworkBySlug(networkSlug);
                             return (
                               <Link 
                                 key={i}
                                 href={`/layers/${networkSlug}`}
                                 className="group flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                               >
                                 <Image
                                   src={`/logos/${networkSlug}.png`}
                                   alt={`${network?.title || networkSlug} logo`}
                                   width={24}
                                   height={24}
                                   className="rounded-sm"
                                   onError={(e) => {
                                     e.currentTarget.style.display = 'none';
                                   }}
                                 />
                                 <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                   {network?.title || networkSlug.charAt(0).toUpperCase() + networkSlug.slice(1)}
                                 </span>
                                 <svg 
                                   className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" 
                                   fill="none" 
                                   stroke="currentColor" 
                                   viewBox="0 0 24 24"
                                 >
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                 </svg>
                               </Link>
                             );
                           })}
                         </div>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
           )}
          
          {/* Networks Section - only show when tradeoffs are NOT expanded */}
          {(!showTradeoffs || selectedMechanism !== CustodyTitle.BitcoinNative) && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Networks using this mechanism ({networks.length})
              </h4>
              {networks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {networks.map((networkSlug, index) => (
                    <NetworkCard key={index} networkSlug={networkSlug} />
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  No networks with this custody mechanism have been categorized yet.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CustodyChart({
  title = "Bitcoin Layer 2 Custody Mechanisms",
  description = "Explore how different L2 protocols secure user Bitcoin deposits"
}: CustodyChartProps) {
  const [selectedMechanism, setSelectedMechanism] = useState<string | null>(null);
  
  const handleMechanismClick = (mechanism: string) => {
    if (selectedMechanism === mechanism) {
      setSelectedMechanism(null); // Close if already open
    } else {
      setSelectedMechanism(mechanism); // Open new mechanism
    }
  };

  // Calculate total networks with custody titles
  const totalNetworksWithCustody = allLayers.filter(layer => layer.custodyTitle).length;

  return (
    <Card className="bg-background" id="custody-chart">
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <CustodyToggleButtons 
          selectedMechanism={selectedMechanism || ""}
          onMechanismClick={handleMechanismClick}
        />
        
        <MechanismContentPanel 
          selectedMechanism={selectedMechanism}
          onClose={() => setSelectedMechanism(null)}
        />
        
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Analyze custody mechanisms across {totalNetworksWithCustody} Bitcoin L2 networks
          </div>
          <Link
            href="/layers"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View all layers
            <span className="ml-1">→</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}