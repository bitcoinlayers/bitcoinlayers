"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContributePage: React.FC = () => {
    const address = "36raB4921Au5Kck4uT521nbfL1ktTwLNSY";

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(address)
            .then(() => {
                alert("Address copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };

    function InfoBox({
        question,
        answer,
    }: {
        question: string;
        answer: JSX.Element;
    }) {
        return (
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-light text-zinc-800 leading-9">
                        {question}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8 w-full">
                    {answer}
                </div>
            </div>
        );
    }

    const contributeContent = (
        <span className="text-slate-500 text-base font-normal leading-normal">
            For now, please join our{" "}
            <Link
                href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 text-base font-normal leading-normal"
            >
                Telegram
            </Link>{" "}
            group or reach out on{" "}
            <Link
                href="https://twitter.com/bitcoinlayers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 text-base font-normal leading-normal"
            >
                Twitter
            </Link>{" "}
            if you&apos;d like to get involved.
        </span>
    );

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20">
                            Contribute
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <InfoBox
                                question="Contribute to Bitcoin Layers"
                                answer={contributeContent}
                            />
                            <InfoBox
                                question="Support"
                                answer={supportContent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ContributePage;
