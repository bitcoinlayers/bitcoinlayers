import React from "react";

const AboutPage: React.FC = () => {
    function InfoBox({
        question,
        answer,
    }: {
        question: string;
        answer: string;
    }) {
        return (
            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-light leading-9">
                        {question}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8 w-full">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <div className="text-base font-normal leading-normal">
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20">
                            About
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <InfoBox
                                question="The Project"
                                answer="Bitcoin Layers is a website that analyzes Bitcoin L2s and sidechain protocols against a general framework. The goal of this site is to show users and other ecosystem participants trust assumptions related to Bitcoin L2s, sidechains and related infrastructure. Bitcoin Layers offers an opinionated analysis, and is aimed to show a high level overview of the technologies being developed in the Bitcoin scaling space. These assessments do not necessarily reflect the security of a given system, but shares if a system is natively integrated with, and derives security from, Bitcoin. The website is developed by LX Research Labs and is free and open-source under the MIT license. Anyone is welcome to use our research however they see fit, but we do request that you credit us when doing so. Nothing in the Bitcoin Layers website should be considered financial advice. Our risk assessments are not designed to be recommendations, or endorsements, of specific protocols. Our risk assessments are not security audits. Users should do their own research when choosing a scaling protocol to interact with. 
"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AboutPage;
