import React from "react";

const AboutPage: React.FC = () => {
    // Function to process text with line breaks and markdown links
    function processText(text: string): React.ReactNode[] {
        // Split by double line breaks first
        const paragraphs = text.split('\n\n');
        const result: React.ReactNode[] = [];
        
        paragraphs.forEach((paragraph, paragraphIndex) => {
            if (paragraphIndex > 0) {
                result.push(<br key={`br-${paragraphIndex}`} />);
                result.push(<br key={`br2-${paragraphIndex}`} />);
            }
            
            // Process markdown links in each paragraph
            const parts = paragraph.split(/(\[([^\]]+)\]\(([^)]+)\))/g);
            const paragraphElements: React.ReactNode[] = [];
            
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)) {
                    // This is a markdown link
                    const linkText = parts[i + 1];
                    const linkUrl = parts[i + 2];
                    paragraphElements.push(
                        <a
                            key={`link-${paragraphIndex}-${i}`}
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            {linkText}
                        </a>
                    );
                    i += 2; // Skip the next two parts as they're part of the link
                } else if (!part.match(/^[^\]]+$/) || !parts[i - 1]?.match(/^\[([^\]]+)\]$/)) {
                    // Regular text (not part of a link)
                    if (part) {
                        paragraphElements.push(part);
                    }
                }
            }
            
            result.push(...paragraphElements);
        });
        
        return result;
    }

    function InfoBox({
        question,
        answer,
    }: {
        question: string;
        answer: string;
    }): React.ReactNode {
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
                            {processText(answer)}
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
                                answer={`Bitcoin Layers is a website that analyzes bitcoin L2s, sidesystems, and more. The goal of this site is to show users and other ecosystem participants trust assumptions related to thes systems.\n\nBitcoin Layers offers an opinionated analysis and is aimed to show a high-level overview of the technologies being developed in the bitcoin scaling space. These assessments do not necessarily reflect the security of a given system but share if a system is natively integrated with, and derives security from, bitcoin. The website is free and open-source under the MIT license.\n\nAnyone is welcome to use our research however they see fit, but we do request that you credit us when doing so. Nothing in the Bitcoin Layers website should be considered financial advice. Our risk assessments are not designed to be recommendations or endorsements of specific protocols. Our risk assessments are not security audits. Users should do their own research when choosing a scaling protocol to interact with.`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <InfoBox
                                question="Contributors"
                                answer={`Research for Bitcoin Layers is maintained by [Janusz](https://janusz.cash), a pseudonymous bitcoin enthusiast. Data is maintained by [Red](https://x.com/redvelvetzip). The project is currently maintained on a volunteer basis. Bitcoin Layers was initially bootstrapped by a small research company supported by investment checks from venture capital firms.\n\nNow, the project has since seperated itself from any specific entity and funding model. Bitcoin Layers has no affiliation with any specific organization, ecosystem, or protocol.\n\nIf you'd like to contribute to Bitcoin Layers, please reach out to [Janusz](https://t.me/januszgrze).`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AboutPage;
