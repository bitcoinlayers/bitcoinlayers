"use client";

import Link from "next/link";
import React from "react";

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
            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-light leading-9">
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
        <span className="text-base font-normal leading-normal">
            For now, please join our{" "}
            <Link
                href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-500 underline text-base font-normal leading-normal"
            >
                Telegram
            </Link>{" "}
            group or reach out on{" "}
            <Link
                href="https://twitter.com/bitcoinlayers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-500 underline text-base font-normal leading-normal"
            >
                Twitter
            </Link>{" "}
            if you&apos;d like to get involved. We welcome anyone to contribute
            to the website by submitting pull requests, creating and commenting
            on active issues in our GitHub. Anyone is welcome to submit a
            project to be reviewed on the website. And, anyone is welcome to
            fork the website for their own personal or commercial use.
        </span>
    );

    const supportContent = (
        <span className="text-base font-normal leading-normal">
            A great way to support the Bitcoin Layers project is by following us
            on social media. We are active on{" "}
            <Link
                href="https://twitter.com/bitcoinlayers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-500 underline text-base font-normal leading-normal"
            >
                Twitter
            </Link>{" "}
            and{" "}
            {/* ,{" "}
            <Link
                href="https://snort.social/nprofile1qqswq22rw7f34s4us866f8twrght0p5vlmvhpxcfz780t4kpmtgyq7gpr9mhxue69uhkummnw3ezuer0de4hjtnnda3kjctv9uq32amnwvaz7tmjv4kxz7fwv3sk6atn9e5k7tcprpmhxue69uhhyetvv9uju6rpwa6xjetn9eu8j730rfdn4f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 text-base font-normal leading-normal"
            >
                Nostr
            </Link>{" "}
            , and{" "} */}
            <Link
                href="https://warpcast.com/~/channel/bitcoinlayers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-500 underline text-base font-normal leading-normal"
            >
                Warpcast
            </Link>
            .
        </span>
    );

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
