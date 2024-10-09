"use client";

import React, { useState, useEffect } from "react";
import { Opcode } from "./opcodeProps";
import { useTranslations } from "next-intl";

const OpcodeMenu: React.FC<{ opcode: Opcode }> = ({ opcode }) => {
    const [activeSection, setActiveSection] = useState("overview");
    const t = useTranslations("opcode");

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
        <nav className="sticky top-0 h-screen w-full overflow-y-auto pt-6">
            <div className="flex flex-col justify-start items-start gap-4">
                {/*  menu is updating with coloring to match the live section */}

                {[
                    { id: "overview", title: t("overview") },
                    ...opcode.sections,
                ].map((section, index) => (
                    <div
                        key={index}
                        className="flex justify-start items-center gap-4"
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

export default OpcodeMenu;
