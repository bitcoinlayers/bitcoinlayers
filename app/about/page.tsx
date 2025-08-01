import React from "react";

const DonationsPage: React.FC = () => {
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
                                question="About Bitcoin Layers"
                                answer={`Thank you for supporting Bitcoin Layers' mission to ensure that users and developers alike understand the tradeoffs for the growing bitcoin scaling ecosystem.\n\nBitcoin Layers is an open-source, public goods dashboard that covers trust assumptions related to bitcoin L2s, other scaling protocols, and wrapped versions of bitcoin on alternative blockchains. The project is funded through grants and donations. We will be accepting more donations and grants in the future.\n\nThe project is actively maintained by a lone contributor, Janusz. If you'd like to donate to Janusz individually, please see his [personal website](https://janusz.cash).`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl font-light leading-9">
                                        Funding Sources
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-8 w-full">
                                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                                        <div className="text-base font-normal leading-normal mb-4">
                                            Bitcoin Layers is a public goods platform that is funded by bitcoin ecosystem participants. For transparency, we are providing our funding sources below:
                                        </div>
                                        <div className="w-full overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-border">
                                                        <th className="text-left py-2 pr-4 font-semibold">Source</th>
                                                        <th className="text-left py-2 font-semibold">Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">StarkWare</td>
                                                        <td className="py-2">Janusz&apos;s maintenance grant</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">Alpen Labs</td>
                                                        <td className="py-2">Janusz&apos;s maintenance grant</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">Lightspark</td>
                                                        <td className="py-2">Janusz&apos;s maintenance grant</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">Babylon Foundation</td>
                                                        <td className="py-2">Bitcoin Layers&apos; validator delegation (discontinued)</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">Build on BOB</td>
                                                        <td className="py-2">Bitcoin Layers&apos; staking dashboard (discontinued)</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">CORE Ventures</td>
                                                        <td className="py-2">Investment (funds no longer allocated to Bitcoin Layers)</td>
                                                    </tr>
                                                    <tr className="border-b border-border/50">
                                                        <td className="py-2 pr-4 font-medium">Rootstock Labs</td>
                                                        <td className="py-2">Investment (funds no longer allocated to Bitcoin Layers)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 pr-4 font-medium">UTXO Management</td>
                                                        <td className="py-2">Investment</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <InfoBox
                                question="Further Disclaimers"
                                answer={`Bitcoin Layers was previously funded through venture capital investments. The company who received those investments no longer contributes to Bitcoin Layers in an official capacity and uses this funding to build different products. We have included investments that may create a conflict of interest above. We have also included the UTXO Management investment as all funds from UTXO Management were used to fund Bitcoin Layers first year of development.`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default DonationsPage;
