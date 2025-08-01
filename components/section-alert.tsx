"use client";

import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, AlertTriangleIcon, ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { SectionAlert } from "@/content/props";

interface SectionAlertProps {
    alert: SectionAlert;
}

export default function SectionAlertComponent({ alert }: SectionAlertProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(alert.collapsible || false);
    
    // Split content by lines or sentences to determine if we should show "See more"
    const lines = alert.content.split(/\n|\. /).filter(line => line.trim().length > 0);
    const shouldTruncate = alert.expandable && lines.length > 2;

    const getAlertStyles = () => {
        switch (alert.type) {
            case "info":
                return {
                    className: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mb-4",
                    iconColor: "text-blue-600 dark:text-blue-400",
                    titleColor: "text-blue-900 dark:text-blue-100",
                    contentColor: "text-blue-800 dark:text-blue-200",
                    linkColor: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                    buttonColor: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
                    icon: InfoIcon,
                };
            case "warning":
                return {
                    className: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 mb-4",
                    iconColor: "text-orange-600 dark:text-orange-400",
                    titleColor: "text-orange-900 dark:text-orange-100",
                    contentColor: "text-orange-800 dark:text-orange-200",
                    linkColor: "text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300",
                    buttonColor: "text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300",
                    icon: AlertTriangleIcon,
                };
            case "error":
                return {
                    className: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 mb-4",
                    iconColor: "text-red-600 dark:text-red-400",
                    titleColor: "text-red-900 dark:text-red-100",
                    contentColor: "text-red-800 dark:text-red-200",
                    linkColor: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300",
                    buttonColor: "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300",
                    icon: AlertTriangleIcon,
                };
        }
    };

    const styles = getAlertStyles();
    const IconComponent = styles.icon;

    // If collapsible and collapsed, show just the button
    if (alert.collapsible && isCollapsed) {
        return (
            <div className="w-full max-w-2xl mb-4">
                <button
                    onClick={() => setIsCollapsed(false)}
                    className={`inline-flex items-center ${styles.buttonColor} font-medium transition-colors text-sm hover:underline`}
                >
                    {alert.buttonText || `Learn more about ${alert.title}`}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl">
            <div className="relative">
                <Alert className={styles.className}>
                    <IconComponent className={`h-5 w-5 ${styles.iconColor}`} />
                    <AlertTitle className={`${styles.titleColor} font-semibold pr-8`}>
                        {alert.title}
                    </AlertTitle>
                    {alert.collapsible && (
                        <button
                            onClick={() => setIsCollapsed(true)}
                            className={`absolute top-3 right-3 ${styles.iconColor} hover:opacity-70 transition-opacity`}
                            aria-label="Close alert"
                        >
                            <XIcon className="h-4 w-4" />
                        </button>
                    )}
            <AlertDescription className={`${styles.contentColor} mt-2`}>
                <p 
                    className={`mb-2 ${
                        shouldTruncate && !isExpanded 
                            ? "line-clamp-2 overflow-hidden" 
                            : ""
                    }`}
                >
                    {alert.content}
                </p>
                
                {shouldTruncate && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`inline-flex items-center ${styles.buttonColor} font-medium transition-colors text-sm hover:underline`}
                    >
                        {isExpanded ? (
                            <>
                                See less
                                <ChevronUpIcon className="ml-1 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                See more
                                <ChevronDownIcon className="ml-1 h-4 w-4" />
                            </>
                        )}
                    </button>
                )}

                {alert.linkText && alert.linkUrl && (
                    <div className={shouldTruncate ? "mt-2" : ""}>
                        <Link 
                            href={alert.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center ${styles.linkColor} font-medium transition-colors`}
                        >
                            {alert.linkText}
                            <ExternalLinkIcon className="ml-1 h-4 w-4" />
                        </Link>
                    </div>
                )}
            </AlertDescription>
                </Alert>
            </div>
        </div>
    );
} 