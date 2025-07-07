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
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { CustodyTitle } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Link from "next/link";
import Image from "next/image";
import custodyTradeoffs from "./chart-content/custody-tradeoffs";
import custodyTradeoffsDistributed from "./chart-content/custody-tradeoffs-distributed";
import custodyTradeoffsCentralized from "./chart-content/custody-tradeoffs-centralized";

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
    label: "Distributed Third-Party",
    description: "These protocols distribute third-party custody across multiple parties through federations, multi-sigs, or threshold signature schemes. While custodial, they reduce single points of failure by requiring multiple entities to collude to steal funds.",
  },
  [CustodyTitle.Centralized]: {
    label: "Centralized Third-Party",
    description: "These protocols rely on a centralized third party to hold Bitcoin reserves backing tokens on their networks. Users must trust these entities not to steal funds and to maintain proper reserves.",
  },
};

// Helper function to get projects by custody type (layers + infrastructures + more)
const getProjectsByCustodyType = (custodyType: CustodyTitle): { slug: string; type: string }[] => {
  const layers = allLayers.filter(layer => layer.custodyTitle === custodyType).map(layer => ({ slug: layer.slug, type: 'layer' }));
  const infrastructures = allInfrastructures.filter(infra => infra.custodyTitle === custodyType).map(infra => ({ slug: infra.slug, type: 'infrastructure' }));
  const more = allMore.filter(more => more.custodyTitle === custodyType).map(more => ({ slug: more.slug, type: 'more' }));
  return [...layers, ...infrastructures, ...more];
};

// Updated network lookup to search layers, infrastructures, and more
const getProjectBySlug = (slug: string): { project: any; type: string } | null => {
  const layer = allLayers.find(layer => layer.slug === slug.trim().toLowerCase());
  if (layer) return { project: layer, type: 'layer' };
  const infra = allInfrastructures.find(infra => infra.slug === slug.trim().toLowerCase());
  if (infra) return { project: infra, type: 'infrastructure' };
  const more = allMore.find(more => more.slug === slug.trim().toLowerCase());
  if (more) return { project: more, type: 'more' };
  return null;
};

// Enhanced Network Card Component
const NetworkCard = ({ networkSlug, type }: { networkSlug: string, type: string }) => {
  const result = getProjectBySlug(networkSlug);
  if (!result) {
    // Fallback for projects not found
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
          {networkSlug.trim()}
        </span>
      </div>
    );
  }
  const { project, type: projectType } = result;
  let href = projectType === 'layer' ? `/layers/${project.slug}` : projectType === 'infrastructure' ? `/infrastructure/${project.slug}` : `/infrastructure/${project.slug}`;
  return (
    <Link 
      href={href}
      className="group bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Image
            src={`/logos/${project.slug}.png`}
            alt={`${project.title} logo`}
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
            {project.title}
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
const colorMap = {
  blue: {
    from: "from-blue-50",
    to: "to-blue-100", 
    darkFrom: "dark:from-blue-900/20",
    darkTo: "dark:to-blue-800/20",
    border: "border-blue-200",
    darkBorder: "dark:border-blue-800",
    ring: "ring-blue-500",
    text: "text-blue-600",
    darkText: "dark:text-blue-400",
    bold: "text-blue-900",
    darkBold: "dark:text-blue-100",
    icon: "text-blue-500",
    panelBorder: "border-blue-200",
    panelDarkBorder: "dark:border-blue-800",
    panelText: "text-blue-900",
    panelDarkText: "dark:text-blue-100",
    closeText: "text-blue-600",
    closeDarkText: "dark:text-blue-400",
    closeHover: "hover:text-blue-800",
    closeDarkHover: "dark:hover:text-blue-200",
  },
  green: {
    from: "from-green-50",
    to: "to-green-100",
    darkFrom: "dark:from-green-900/20", 
    darkTo: "dark:to-green-800/20",
    border: "border-green-200",
    darkBorder: "dark:border-green-800",
    ring: "ring-green-500",
    text: "text-green-600",
    darkText: "dark:text-green-400",
    bold: "text-green-900",
    darkBold: "dark:text-green-100",
    icon: "text-green-500",
    panelBorder: "border-green-200",
    panelDarkBorder: "dark:border-green-800",
    panelText: "text-green-900",
    panelDarkText: "dark:text-green-100",
    closeText: "text-green-600",
    closeDarkText: "dark:text-green-400",
    closeHover: "hover:text-green-800",
    closeDarkHover: "dark:hover:text-green-200",
  },
  purple: {
    from: "from-purple-50",
    to: "to-purple-100",
    darkFrom: "dark:from-purple-900/20",
    darkTo: "dark:to-purple-800/20", 
    border: "border-purple-200",
    darkBorder: "dark:border-purple-800",
    ring: "ring-purple-500",
    text: "text-purple-600",
    darkText: "dark:text-purple-400",
    bold: "text-purple-900",
    darkBold: "dark:text-purple-100",
    icon: "text-purple-500",
    panelBorder: "border-purple-200",
    panelDarkBorder: "dark:border-purple-800",
    panelText: "text-purple-900",
    panelDarkText: "dark:text-purple-100",
    closeText: "text-purple-600",
    closeDarkText: "dark:text-purple-400",
    closeHover: "hover:text-purple-800",
    closeDarkHover: "dark:hover:text-purple-200",
  },
};

const CustodyToggleButtons = ({ 
  selectedMechanism, 
  onMechanismClick 
}: { 
  selectedMechanism: string;
  onMechanismClick: (mechanism: string) => void;
}) => {
  const mechanisms = [
    { key: CustodyTitle.BitcoinNative, icon: BitcoinIcon, color: "blue" as const },
    { key: CustodyTitle.Distributed, icon: NetworkIcon, color: "green" as const },
    { key: CustodyTitle.Centralized, icon: PiggyBankIcon, color: "purple" as const }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {mechanisms.map(({ key, icon: Icon, color }) => {
        const mechanism = custodyMechanisms[key];
        const isActive = selectedMechanism === key;
        const buttonColorClasses = colorMap[color];
        
        return (
          <button
            key={key}
            className={`bg-gradient-to-br ${buttonColorClasses.from} ${buttonColorClasses.to} ${buttonColorClasses.darkFrom} ${buttonColorClasses.darkTo} rounded-lg p-4 border ${buttonColorClasses.border} ${buttonColorClasses.darkBorder} cursor-pointer transition-all hover:shadow-md ${
              isActive ? `ring-2 ${buttonColorClasses.ring} shadow-lg` : ""
            }`}
            onClick={() => onMechanismClick(key)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className={`text-sm font-medium ${buttonColorClasses.text} ${buttonColorClasses.darkText} flex items-center`}>
                  {mechanism.label}
                  <ChevronDown className={`ml-1 h-4 w-4 ${buttonColorClasses.icon} transition-transform ${isActive ? 'rotate-180' : ''}`} />
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Icon className={`h-8 w-8 ${buttonColorClasses.icon}`} />
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
  const projects = getProjectsByCustodyType(selectedMechanism as CustodyTitle);
  
  // Get the correct tradeoffs object based on custody type
  const getTradeoffsForCustodyType = (custodyType: string) => {
    switch (custodyType) {
      case CustodyTitle.BitcoinNative:
        return custodyTradeoffs[CustodyTitle.BitcoinNative];
      case CustodyTitle.Distributed:
        return custodyTradeoffsDistributed[CustodyTitle.Distributed];
      case CustodyTitle.Centralized:
        return custodyTradeoffsCentralized[CustodyTitle.Centralized];
      default:
        return null;
    }
  };

  const currentTradeoffs = getTradeoffsForCustodyType(selectedMechanism);
  
  const getColorClass = (mechanismKey: string) => {
    switch (mechanismKey) {
      case CustodyTitle.BitcoinNative: return "blue";
      case CustodyTitle.Distributed: return "green";
      case CustodyTitle.Centralized: return "purple";
      default: return "gray";
    }
  };
  
  const color = getColorClass(selectedMechanism);
  const colorClasses = colorMap[color as keyof typeof colorMap];
  
  return (
    <div className="mt-6 mb-6 animate-in slide-in-from-top-2 duration-300">
      <div className={`bg-white dark:bg-gray-900/50 rounded-lg p-6 border ${colorClasses?.panelBorder || 'border-gray-200'} ${colorClasses?.panelDarkBorder || 'dark:border-gray-800'} shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-semibold ${colorClasses?.panelText || 'text-gray-900'} ${colorClasses?.panelDarkText || 'dark:text-gray-100'}`}>
            {mechanism.label} Custody
          </h3>
          <button
            onClick={onClose}
            className={`${colorClasses?.closeText || 'text-gray-600'} ${colorClasses?.closeDarkText || 'dark:text-gray-400'} ${colorClasses?.closeHover || 'hover:text-gray-800'} ${colorClasses?.closeDarkHover || 'dark:hover:text-gray-200'} transition-colors`}
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
            
            {/* Learn More Button - show for all custody types that have tradeoffs */}
            {currentTradeoffs && (
              <div className="mt-4">
                <button
                  onClick={() => setShowTradeoffs(!showTradeoffs)}
                  className={`inline-flex items-center text-sm font-medium ${colorClasses?.text || 'text-blue-600'} ${colorClasses?.darkText || 'dark:text-blue-400'} hover:${colorClasses?.closeHover || 'text-blue-700'} ${colorClasses?.closeDarkHover || 'dark:hover:text-blue-300'} transition-colors`}
                >
                  {showTradeoffs ? "Show less" : "Learn more about different designs"}
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
          {showTradeoffs && currentTradeoffs && (
            <div className="animate-in slide-in-from-top-2 duration-300 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {currentTradeoffs.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentTradeoffs.subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                {currentTradeoffs.mechanisms.map((mech, index) => (
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
                           Some networks using {mech.name}:
                         </div>
                         <div className="flex flex-wrap gap-3">
                           {mech.networks.map((networkSlug, i) => {
                             const network = getProjectBySlug(networkSlug);
                             if (network) {
                               const { project, type: projectType } = network;
                               return (
                                 <Link 
                                   key={i}
                                   href={projectType === 'layer' ? `/layers/${project.slug}` : `/infrastructure/${project.slug}`}
                                   className="group flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                                 >
                                   <Image
                                     src={`/logos/${project.slug}.png`}
                                     alt={`${project.title} logo`}
                                     width={24}
                                     height={24}
                                     className="rounded-sm"
                                     onError={(e) => {
                                       e.currentTarget.style.display = 'none';
                                     }}
                                   />
                                   <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                     {project.title}
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
                             }
                             return null;
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
          {!showTradeoffs && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Some networks using this mechanism
              </h4>
              {projects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {projects.map(({ slug, type }, index) => (
                    <NetworkCard key={index} networkSlug={slug} type={type} />
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
  title = "Custody mechanisms for Bitcoin Layers",
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
            Learn more about different custody mechanisms for bitcoin layers
          </div>
          <Link
            href="/layers"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Head to bitcoinlayers.research
            <span className="ml-1">→</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}