"use client";

import { Project } from "@/content/props";
import React, { useState, useEffect } from "react";

const InfrastructureMenu: React.FC<{ infrastructure: Project }> = ({
    infrastructure,
}) => {
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
        <nav className="w-full overflow-x-auto">
            <div className="flex lg:flex-col justify-start items-start lg:gap-4 gap-2 z-40 min-w-max">
                {/*  menu is updating with coloring to match the live section */}
                {[
                    { id: "overview", title: "Overview" },
                    ...infrastructure.sections,
                ].map((section, index) => (
                    <div
                        key={index}
                        className="flex justify-start items-center gap-4 whitespace-nowrap"
                    >
                        <div
                            className={`w-[3px] h-10 ${
                                activeSection === section.id
                                    ? "bg-brand"
                                    : "opacity-0 bg-brand_neutral"
                            }`}
                        ></div>
                        <a
                            className={`no-underline text-sm ${
                                activeSection === section.id
                                    ? "text-orange-600 font-semibold font-inter leading-tight"
                                    : "text-neutral-700 font-light leading-tight"
                            }`}
                            href={`#${section.id}`}
                            onClick={() => handleClick(section.id)}
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
