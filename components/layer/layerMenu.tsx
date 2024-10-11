"use client";

import { useState, useEffect } from "react";
import { Layer } from "./layerProps";

const LayerMenu: React.FC<{ layer: Layer }> = ({ layer }) => {
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
        <nav className="">
            <div className="flex lg:flex-col justify-start items-start lg:gap-4 gap-2 z-40">
                {/*  menu is updating with coloring to match the live section */}

                {[
                    { id: "overview", title: "Overview" },
                    { id: "riskanalysis", title: "Risk Analysis" },
                    ...layer.sections,
                ].map((section, index) => (
                    <div
                        key={index}
                        className={`flex lg:flex-row flex-col-reverse justify-start items-center lg:gap-4 gap-2 p-3 ${
                            activeSection === section.id
                                ? " border-b-[3px] lg:border-l-[3px] lg:border-0 border-brand"
                                : " border-b-[3px] border-transparent lg:border-l-[3px]"
                        } `}
                    >
                        <a
                            className={`no-underline text-sm whitespace-pre ${
                                activeSection === section.id
                                    ? "text-orange-600 font-semibold font-inter leading-tight"
                                    : "text-neutral-700 font-light leading-tight"
                            }`}
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
