"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState } from "react";
import { BitcoinIcon, NetworkIcon, ComputerIcon, ChevronDown, ChevronRight, ShieldIcon } from "lucide-react";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Link from "next/link";
import Image from "next/image";
import custodyTradeoffs from "./chart-content/custody-tradeoffs";
import custodyTradeoffsDistributed from "./chart-content/custody-tradeoffs-distributed";

interface MechanismConfig {
  key: string;
  label: string;
  description: string;
  icon: string;
  color: "blue" | "green" | "purple";
  tradeoffs?: any;
  projects?: string[];
}

type LayerReviewCustodyChartProps = {
  title?: string;
  description?: string;
  mechanisms?: MechanismConfig[];
};

// Default mechanism definitions (can be overridden via props)
const defaultMechanisms: MechanismConfig[] = [
  {
    key: "data-availability",
    label: "Data Availability",
    description: "How the network ensures transaction data is available and accessible to all participants for verification and state reconstruction.",
    icon: "BitcoinIcon",
    color: "blue",
    tradeoffs: {
      title: "Data Availability Mechanisms",
      subtitle: "How alternative blockchains store and make transaction data available",
      mechanisms: [
        {
          name: "Consensus Network Storage",
          description: "Data is stored and made available by full nodes participating in the network's consensus mechanism",
          pros: [
            "Anyone can run a node and access data",
            "Distributed across network participants", 
            "Integrated with consensus for consistency"
          ],
          cons: [
            "Relies on alternative consensus security",
            "Data availability tied to network health",
            "Not secured by Bitcoin's proof-of-work"
          ],
          networks: ["ethereum", "avalanche", "solana"]
        }
      ]
    },
    projects: ["ethereum", "avalanche", "solana"]
  },
  {
    key: "network-operators", 
    label: "Network Operators",
    description: "Who operates the network, produces blocks, and validates transactions. Understanding the operator model is crucial for assessing centralization risks.",
    icon: "NetworkIcon",
    color: "green",
    tradeoffs: {
      title: "Network Operator Models",
      subtitle: "How alternative blockchains handle block production and validation",
      mechanisms: [
        {
          name: "Proof-of-Stake Validators",
          description: "Network operated by validators who stake tokens and participate in consensus",
          pros: [
            "Distributed validator set",
            "Economic incentives align operators",
            "Often permissionless participation"
          ],
          cons: [
            "Not secured by Bitcoin miners",
            "Validator centralization risks",
            "Slashing and staking requirements"
          ],
          networks: ["ethereum", "avalanche", "solana"]
        }
      ]
    },
    projects: ["ethereum", "avalanche", "solana"]
  },
  {
    key: "finality-guarantees",
    label: "Finality Guarantees", 
    description: "How the network ensures transactions are irreversible and cannot be reorganized once confirmed.",
    icon: "ShieldIcon",
    color: "purple",
    tradeoffs: {
      title: "Finality Guarantee Models",
      subtitle: "How alternative blockchains achieve transaction finality",
      mechanisms: [
        {
          name: "Proof-of-Stake Finality",
          description: "Transactions finalize through validator consensus with economic penalties for dishonest behavior",
          pros: [
            "Fast finality (seconds to minutes)",
            "Economic security through slashing",
            "Deterministic finality in most cases"
          ],
          cons: [
            "Not secured by Bitcoin's proof-of-work",
            "Requires trust in validator honesty",
            "Potential for long-range attacks"
          ],
          networks: ["ethereum", "avalanche", "solana"]
        }
      ]
    },
    projects: ["ethereum", "avalanche", "solana"]
  }
];

// Icon resolver function
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "BitcoinIcon":
      return BitcoinIcon;
    case "NetworkIcon":
      return NetworkIcon;
    case "ComputerIcon":
      return ComputerIcon;
    case "ShieldIcon":
      return ShieldIcon;
    default:
      return ComputerIcon; // fallback
  }
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

// Enhanced Network Card Component that handles "wrapper on network" entries
const NetworkCard = ({ networkSlug, type }: { networkSlug: string, type: string }) => {
  // Check if this is a compound entry like "coinbase-cbbtc on base"
  if (networkSlug.includes(' on ')) {
    const [wrapperSlug, networkSlugPart] = networkSlug.split(' on ').map(s => s.trim());
    
    const wrapperResult = getProjectBySlug(wrapperSlug);
    const networkResult = getProjectBySlug(networkSlugPart);
    
    if (wrapperResult && networkResult) {
      return (
        <Link 
          href={`/infrastructure/${wrapperResult.project.slug}`}
          className="group bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Image
                src={`/logos/${wrapperResult.project.slug}.png`}
                alt={`${wrapperResult.project.title} logo`}
                width={24}
                height={24}
                className="rounded-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate block">
                {wrapperResult.project.title} on {networkResult.project.title}
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
    }
  }

  // Handle regular single slug entries (existing logic)
  const result = getProjectBySlug(networkSlug);
  if (!result) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
          {networkSlug.trim()}
        </span>
      </div>
    );
  }
  
  const { project, type: projectType } = result;
  let href = projectType === 'layer' ? `/layers/${project.slug}` : `/infrastructure/${project.slug}`;
  
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
  onMechanismClick,
  mechanisms
}: { 
  selectedMechanism: string;
  onMechanismClick: (mechanism: string) => void;
  mechanisms: MechanismConfig[];
}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {mechanisms.map((mechanismConfig) => {
        const { key, label, description, icon, color } = mechanismConfig;
        const Icon = getIconComponent(icon);
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
                  {label}
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
  onClose,
  mechanisms
}: { 
  selectedMechanism: string | null;
  onClose: () => void;
  mechanisms: MechanismConfig[];
}) => {
  const [showTradeoffs, setShowTradeoffs] = useState(false);
  
  const mechanism = mechanisms.find(m => m.key === selectedMechanism);
  if (!selectedMechanism || !mechanism) return null;
  
  // Get tradeoffs from the mechanism config
  const tradeoffs = mechanism.tradeoffs;

  const colorClass = mechanism.color;
  
  const colorClasses = colorMap[colorClass];
  
  return (
    <div className="mt-6 mb-6 animate-in slide-in-from-top-2 duration-300">
      <div className={`bg-white dark:bg-gray-900/50 rounded-lg p-6 border ${colorClasses?.panelBorder || 'border-gray-200'} ${colorClasses?.panelDarkBorder || 'dark:border-gray-800'} shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
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
            {tradeoffs && (
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
          {showTradeoffs && tradeoffs && (
            <div className="animate-in slide-in-from-top-2 duration-300 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {tradeoffs.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tradeoffs.subtitle}
                </p>
              </div>
              
              <div className="space-y-6">
                {tradeoffs.mechanisms.map((mech: any, index: number) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <div className="mb-3">
                      <div>
                        <h6 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {mech.name}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {mech.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                          ✓ Advantages
                        </div>
                        <ul className="space-y-1">
                          {mech.pros.map((pro: any, i: number) => (
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
                          {mech.cons.map((con: any, i: number) => (
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
                           Some protocols using {mech.name}:
                         </div>
                         <div className="flex flex-wrap gap-3">
                                                       {mech.networks.map((networkSlug: any, i: number) => {
                             // Handle compound entries like "coinbase-cbbtc on base"
                             if (networkSlug.includes(' on ')) {
                               const [wrapperSlug, networkSlugPart] = networkSlug.split(' on ').map((s: string) => s.trim());
                               const wrapperResult = getProjectBySlug(wrapperSlug);
                               const networkResult = getProjectBySlug(networkSlugPart);
                               
                               if (wrapperResult && networkResult) {
                                 return (
                                   <Link 
                                     key={i}
                                     href={`/infrastructure/${wrapperResult.project.slug}`}
                                     className="group flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                                   >
                                     <Image
                                       src={`/logos/${wrapperResult.project.slug}.png`}
                                       alt={`${wrapperResult.project.title} logo`}
                                       width={24}
                                       height={24}
                                       className="rounded-sm"
                                       onError={(e) => {
                                         e.currentTarget.style.display = 'none';
                                       }}
                                     />
                                     <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                       {wrapperResult.project.title} on {networkResult.project.title}
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
                             }

                             // Handle regular single slug entries (existing logic)
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
          {!showTradeoffs && mechanism.projects && mechanism.projects.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Some protocols using this mechanism
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mechanism.projects.map((projectSlug, index) => (
                  <NetworkCard key={index} networkSlug={projectSlug} type="layer" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function LayerReviewCustodyChart({
  title = "Alternative Blockchain Architecture",
  description = "Understand how alternative blockchains handle key infrastructure components",
  mechanisms = defaultMechanisms
}: LayerReviewCustodyChartProps) {
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
    <Card className="bg-background" id="layer-review-custody-chart">
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
          mechanisms={mechanisms}
        />
        
        <MechanismContentPanel 
          selectedMechanism={selectedMechanism}
          onClose={() => setSelectedMechanism(null)}
          mechanisms={mechanisms}
        />
        
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Learn more about different custody mechanisms for bitcoin layers
          </div>
          <Link
            href="https://lxresearch.co"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Check out Bitcoin Layers&apos; Research
            <span className="ml-1">→</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
