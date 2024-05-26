import React from "react";

const GlossaryPage: React.FC = () => {
  function InfoBox({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    return (
      <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-light text-zinc-800 leading-9">
            {question}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <div className="text-base font-normal text-slate-500 leading-normal">
              {answer}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center gap-8 w-full">
          <div className="flex-grow flex items-center gap-[30px] h-[156px]">
            <div className="special_header flex-grow h-20">Glossary</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-12 w-full rounded-md">
            Coming soon.
            {/* <div className="flex flex-col gap-8 w-full">
              <InfoBox
                question="The Project"
                answer="Bitcoin Layers is an educational tool that helps users understand the risks associated with various protocols that support Bitcoin and BTC the asset. We analyze risk primarily for protocols that claim to be a Bitcoin L2. The project is free and open-source under an MIT license. Anyone is welcome to use our code and risk framework for their own project." //TODO update
              />
              <InfoBox
                question="The Team"
                answer="Bitcoin Layers is currently managed on a volunteer basis by Januszg (a pseudonymous contributor) and Red Sheehan from Messari. Januszg has experience leading marketing functions at well-known projects in the privacy and scaling space. Red is a crypto research analyst specializing in base layer network architectures."
              />
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GlossaryPage;
