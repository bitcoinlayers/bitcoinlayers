"use client";

import { useState, useEffect } from "react";
import { LayerProject } from "@/content/props";
import { EntityCategory } from "@/content/props";

const LayerMenu: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentSection = "overview";
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 140) {
                    currentSection = section.getAttribute("id") || "overview";
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id: string) => {
        setActiveSection(id);
        scrollToSectionWithOffset(id);
    };

    // mobile view offset of 48px needed
    function scrollToSectionWithOffset(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            const yCoordinate =
                element.getBoundingClientRect().top + window.scrollY - 48;
            window.scrollTo({ top: yCoordinate, behavior: "smooth" });
        }
    }

    const getIconForSection = (sectionId: string) => {
        switch (sectionId) {
            case "overview":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                );
            case "data":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                );
            case "tokencontracts":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="9" y1="15" x2="15" y2="15"/>
                        <line x1="9" y1="18" x2="12" y2="18"/>
                    </svg>
                );
            case "risksummary":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                );
            case "trust":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                );
            case "categorization":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                        <line x1="7" y1="7" x2="7.01" y2="7"/>
                    </svg>
                );
            case "manualcontracts":
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                        <line x1="9" y1="14" x2="15" y2="14"/>
                        <line x1="9" y1="18" x2="12" y2="18"/>
                    </svg>
                );
            default:
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                    </svg>
                );
        }
    };

    return (
        <nav className="w-full overflow-x-hidden">
            <div className="flex lg:flex-col justify-start items-start lg:gap-2 gap-1 z-40">
                {[
    { id: "overview", title: "Overview" },
    { id: "data", title: "Data" },
    ...(layer.entityCategory === EntityCategory.BitcoinNative
        ? []
        : [{ id: "tokencontracts", title: "Token Contracts" }]),
    ...(layer.partialReview && layer.partialReviewAfter
        ? (() => {
            const sections = [];
            const after = layer.partialReviewAfter;
            
            // Add sections based on partialReviewAfter setting
            if (["risksummary", "categorization", "trust", "manualcontracts"].includes(after!) && layer.riskSummary && layer.riskSummary.length > 0) {
                sections.push({ id: "risksummary", title: "Risk Summary" });
            }
            if (["categorization", "trust", "manualcontracts"].includes(after!) && layer.categorization && layer.categorization.length > 0) {
                sections.push({ id: "categorization", title: "Categorization" });
            }
            if (["trust", "manualcontracts"].includes(after!) && !layer.underReview) {
                sections.push({ id: "trust", title: "Trust Assumptions" });
            }
            if (after === "manualcontracts" && layer.manualContracts && layer.manualContracts.length > 0) {
                sections.push({ id: "manualcontracts", title: "Additional Contracts" });
            }
            
            return sections;
        })()
        : layer.partialReview
        ? [] // If partialReview is true but no partialReviewAfter, show only basic sections
        : [
            ...(layer.riskSummary && layer.riskSummary.length > 0
                ? [{ id: "risksummary", title: "Risk Summary" }]
                : []),
            ...(layer.categorization && layer.categorization.length > 0
                ? [{ id: "categorization", title: "Categorization" }]
                : []),
            ...(!layer.underReview
                ? [{ id: "trust", title: "Trust Assumptions" }]
                : []),
            ...(layer.manualContracts && layer.manualContracts.length > 0
                ? [{ id: "manualcontracts", title: "Additional Contracts" }]
                : []),
            ...layer.sections,
        ]),
                ].map((section, index) => (
                    <div
                        key={index}
                        className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer w-full ${
                            activeSection === section.id
                                ? "bg-brand/10 text-brand"
                                : "text-foreground hover:bg-muted/30"
                        }`}
                        onClick={() => handleClick(section.id)}
                    >
                        <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-200 ${
                            activeSection === section.id
                                ? "text-brand"
                                : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                            {getIconForSection(section.id)}
                        </div>
                        <a
                            className={`no-underline text-sm font-medium tracking-[-0.01em] leading-tight transition-all duration-200 ${
                                activeSection === section.id
                                    ? "text-brand font-semibold"
                                    : "text-foreground group-hover:text-foreground"
                            }`}
                            href={`#${section.id}`}
                        >
                            {section.title}
                        </a>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default LayerMenu;
