"use client";

import { InfrastructureProject, EntityCategory } from "@/content/props";
import React, { useState, useEffect } from "react";

const InfrastructureMenu: React.FC<{
    infrastructure: InfrastructureProject;
}> = ({ infrastructure }) => {
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
                    ...(infrastructure.entityCategory === EntityCategory.More
                        ? []
                        : [{ id: "tokencontracts", title: "Token Contracts" }]),
                    ...(infrastructure.partialReview && infrastructure.partialReviewAfter
                        ? (() => {
                            const sections = [];
                            const after = infrastructure.partialReviewAfter;
                            
                            // Add sections based on partialReviewAfter setting
                            if (["risksummary", "assessment", "manualcontracts"].includes(after!) && infrastructure.riskSummary && infrastructure.riskSummary.length > 0) {
                                sections.push({ id: "risksummary", title: "Risk Summary" });
                            }
                            if (["assessment", "manualcontracts"].includes(after!) && infrastructure.assessment) {
                                sections.push({ id: "assessment", title: "Assessment" });
                            }
                            if (after === "manualcontracts" && infrastructure.manualContracts && infrastructure.manualContracts.length > 0) {
                                sections.push({ id: "manualcontracts", title: "Additional Contracts" });
                            }
                            
                            return sections;
                        })()
                        : infrastructure.partialReview
                        ? [] // If partialReview is true but no partialReviewAfter, show only basic sections
                        : [
                            ...(infrastructure.riskSummary && infrastructure.riskSummary.length > 0
                                ? [{ id: "risksummary", title: "Risk Summary" }]
                                : []),
                            ...(infrastructure.assessment
                                ? [{ id: "assessment", title: "Assessment" }]
                                : []),
                            ...(infrastructure.manualContracts && infrastructure.manualContracts.length > 0
                                ? [{ id: "manualcontracts", title: "Additional Contracts" }]
                                : []),
                            ...infrastructure.sections,
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

export default InfrastructureMenu;
