import React from "react";
import { Infrastructure } from "./infrastructureProps";
import { RISK_FACTOR_CATEGORIES } from "@/constants";
import Link from "next/link";

const InfrastructureBody: React.FC<{ infrastructure: Infrastructure }> = ({
  infrastructure,
}) => {
  const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
      case "Low":
        return "text-low";
      case "Medium":
        return "text-medium";
      case "High":
        return "text-high";
      default:
        return ""; //not sure about default
    }
  };

  return (
    <div className="container flex">
      <nav className="table-of-contents sticky top-0 h-screen w-0 sm:w-1/5 overflow-y-auto invisible sm:visible pt-6">
        <ol className="marker:font-extrabold marker:dark:text-bitcoin">
          {[
            ...infrastructure.sections,
            { id: "knowledgebits", title: "Knowledge Bits" },
          ].map((section, index) => (
            <li key={index}>
              <h3>
                <a className="no-underline" href={`#${section.id}`}>
                  {section.title}
                </a>
              </h3>
            </li>
          ))}
        </ol>
      </nav>

      <main className="content flex-grow p-4 -mt-6 sm:mt-0 pt-0 w-4/5">
        {infrastructure.sections.map((section, index) => (
          <div
            key={index}
            className="rounded-xl bg-lightsecondary dark:bg-secondary px-6 pt-0 pb-1 mb-6"
            id={section.id}
          >
            <h2 className="pt-7">{section.title}</h2>
            {section.id === "riskanalysis"
              ? section.content.map((content, contentIndex) => (
                  <React.Fragment key={contentIndex}>
                    <h3>{RISK_FACTOR_CATEGORIES[contentIndex]}</h3>
                    <h4
                      className={`${getRiskColorClass(
                        infrastructure.riskFactors[contentIndex]
                      )}`}
                    >
                      {content.title}
                    </h4>
                    <p>{content.content}</p>
                  </React.Fragment>
                ))
              : section.content.map((content, contentIndex) => (
                  <React.Fragment key={contentIndex}>
                    {content.title && <h3>{content.title}</h3>}
                    <p>{content.content}</p>
                  </React.Fragment>
                ))}
          </div>
        ))}
        <div
          className="rounded-xl bg-lightsecondary dark:bg-secondary px-6 pt-0 pb-1 mb-6"
          id="knowledgebits"
        >
          {" "}
          <h2 className="pt-7">Knowledge Bits</h2>
          {infrastructure.knowledgeBits.map((link, index) => (
            <p key={link.url}>
              <Link href={link.url} rel="noopener noreferrer" target="_blank">
                {link.displayText}
              </Link>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InfrastructureBody;
