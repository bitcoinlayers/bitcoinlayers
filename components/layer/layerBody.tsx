import React from "react";
import { Layer } from "./layerProps";
import Link from "next/link";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import RiskAnalysis from "./layerBodyRiskAnalysis";

const LayerBody: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <main className="content flex-grow p-4 sm:mt-0 pt-0">
      {layer.sections.map((section, index) => (
        <div
          key={index}
          className="self-stretch px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 mb-6"
          id={section.id}
        >
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="body_title">{section.title}</div>
          </div>
          {section.id === "riskanalysis" ? (
            <RiskAnalysis section={section} riskFactors={layer.riskFactors} />
          ) : (
            section.content.map((content, contentIndex) => (
              <div key={contentIndex} className="flex-col justify-start items-start gap-2 flex">
                {content.title && (
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="body_section">{content.title}</div>
                  </div>
                )}
                <div className="">{parseTextWithLinks(content.content)}</div>
              </div>
            ))
          )}
        </div>
      ))}
      <div
        className="self-stretch px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 mb-6"
        id="knowledgebits"
      >
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">Knowledge Bits</div>
        </div>
        {layer.knowledgeBits.map((link) => (
          <p key={link.url}>
            <Link href={link.url} rel="noopener noreferrer" target="_blank">
              <span className="text-orange-600 text-base font-medium font-['Public Sans'] underline leading-normal">{link.displayText}</span>
            </Link>
          </p>
        ))}
      </div>
    </main>
  );
};

export default LayerBody;
