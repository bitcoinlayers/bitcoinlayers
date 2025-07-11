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

    return (
        <nav className="w-full overflow-x-hidden">
            <div className="flex lg:flex-col justify-start items-start lg:gap-4 gap-2 z-40">
                {[
    { id: "overview", title: "Overview" },
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
                        className={`flex lg:flex-row flex-row justify-start items-center lg:gap-4 gap-2 p-3 whitespace-nowrap ${
                            activeSection === section.id
                                ? "border-b-[3px] lg:border-l-[3px] lg:border-b-0 border-brand"
                                : "border-b-[3px] border-transparent lg:border-l-[3px]"
                        }`}
                    >
                        <a
                            className={`no-underline text-sm ${
                                activeSection === section.id
                                    ? "text-brand font-semibold font-inter leading-tight"
                                    : "text-foreground font-light leading-tight"
                            } w-full whitespace-normal break-words`}
                            onClick={() => handleClick(section.id)}
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
