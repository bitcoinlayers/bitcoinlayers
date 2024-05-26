import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface Risksection {
  category: string;
  score: number;
  tier: string;
  title: string;
  content: string;
}

interface RiskAnalysisProps {
  riskAnalysis: Risksection[];
  riskFactors: string[];
}

const RiskAnalysis: React.FC<RiskAnalysisProps> = ({
  riskAnalysis,
  riskFactors,
}) => {
  const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
      case "Low":
        return "text-text_risk_low";
      case "Medium":
        return "text-text_risk_midlow";
      case "Medium-High":
        return "text-text_risk_midhigh";
      case "High":
        return "text-text_risk_high";
      default:
        return "text-text_secondary";
    }
  };

  if (!riskAnalysis) {
    return null;
  }

  return (
    <div className="content flex-grow p-4 sm:mt-0 pt-0">
      <div
        className="self-stretch px-8 pt-6 pb-8 mb-6 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4"
        id="riskanalysis"
      >
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="body_section">Risk Analysis</div>
        </div>
        {riskAnalysis.map((content, contentIndex) => (
          <React.Fragment key={contentIndex}>
            <div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="body_risksection">{content.category}</div>
                  <div className="h-8 justify-end items-center gap-2 flex">
                    <div
                      className={`${getRiskColorClass(
                        riskFactors[contentIndex]
                      )} text-sm font-medium leading-tight`}
                    >
                      {riskFactors[contentIndex]} risk
                    </div>
                    <div className="w-8 h-8 justify-center items-center flex">
                      <div
                        className={`w-8 h-8 bg-${riskFactors[
                          contentIndex
                        ].toLowerCase()}-100 rounded-full`}
                      ></div>
                      <div
                        className={`text-center text-${riskFactors[
                          contentIndex
                        ].toLowerCase()}-600 text-base font-bold font-['Hack']`}
                      >
                        {contentIndex + 1}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <div className="self-stretch justify-between items-end inline-flex">
                    <div className="grow shrink basis-0 body_subsection">
                      {content.title}
                    </div>
                  </div>
                  <div className="body_paragraph self-stretch mt-3">
                    {parseTextWithLinks(content.content)}
                  </div>
                </div>
              </div>
            </div>
            {contentIndex < riskAnalysis.length - 1 && (
              <div className="border-b border-slate-300 my-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RiskAnalysis;
