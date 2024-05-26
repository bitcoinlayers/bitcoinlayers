import React, { useState, useEffect } from "react";
import { Layer } from "./layerProps";

const LayerMenu: React.FC<{ layer: Layer }> = ({ layer }) => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "overview";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 80) {
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
  };

  return (
    <nav className="sticky top-0 h-screen w-full overflow-y-auto pt-6">
      <div className="flex flex-col justify-start items-start gap-4"> 
      {/**TODO menu is not updating with coloring to match the live section */}
        {[
          { id: "overview", title: "Overview" },
          { id: "riskanalysis", title: "Risk Analysis" },
          ...layer.sections,
          { id: "knowledgebits", title: "Knowledge Bits" },
        ].map((section, index) => (
          <div key={index} className="flex justify-start items-center gap-4">
            <div
              className={`w-[3px] h-10 ${
                activeSection === section.id ? "bg-brand" : "opacity-0 bg-brand_neutral"
              }`}
            ></div>
            <a
              className={`no-underline text-sm ${
                activeSection === section.id
                  ? 'text-orange-600 font-semibold font-["Inter"] leading-tight'
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

export default LayerMenu;
