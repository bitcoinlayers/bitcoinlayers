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

    const supportContent = (
        <div className="w-[960px] h-[460px] flex flex-col justify-center items-center gap-6">
            <div className="self-stretch h-[72px] flex flex-col justify-center items-end gap-8">
                <div className="self-stretch h-[72px] flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch text-slate-500 text-base font-normal leading-normal">
                        Bitcoin Layers is currently managed on a volunteer basis
                        by{" "}
                        <Link
                            href="https://twitter.com/januszg_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 text-base font-normal leading-normal"
                        >
                            Januszg
                        </Link>{" "}
                        (a pseudonymous contributor) and{" "}
                        <Link
                            href="https://twitter.com/redvelvetzip"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 text-base font-normal leading-normal"
                        >
                            Red Sheehan
                        </Link>{" "}
                        from Messari. Both have experience working in the
                        Bitcoin space, and have conducted research on Bitcoin
                        scaling protocols. If you would like to support their
                        work, consider donating at the Bitcoin address below.
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="w-[250px] h-[250px] pl-[10.20px] pr-[10.21px] py-[10.20px] bg-white justify-center items-center inline-flex">
                        <div className="w-[229.59px] h-[229.59px] relative flex flex-col justify-start items-start">
                            <div className="w-14 h-14 justify-center items-center inline-flex">
                                <div className="w-full">
                                    <Image
                                        src="/donation_qr.png"
                                        alt="Donation"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-zinc-950 text-sm font-medium leading-normal">
                        36ra<span className="text-zinc-500">B492</span>1Au5
                        <span className="text-zinc-500">Kck4</span>uT52
                        <span className="text-zinc-500">1nbf</span>L1kt
                        <span className="text-zinc-500">TwLN</span>SY
                    </div>
                    {/**TODO add Ordinals address in addition to standard BTC address */}
                    {/* <div className="text-center text-zinc-950 text-sm font-medium leading-normal">
            bc1p<span className="text-zinc-500">59km</span>vn88
            <span className="text-zinc-500">qfgl</span>qp38
            <span className="text-zinc-500">tchd</span>k2yd
            <span className="text-zinc-500">2huz</span>vedp
            <span className="text-zinc-500">kq5q</span>7f50
            <span className="text-zinc-500">my3z</span>2eem
            <span className="text-zinc-500">rfcq</span>e3m3
            <span className="text-zinc-500">9m</span>
          </div> */}
                </div>
                <div className="rounded-full border-2 border-slate-300 justify-center items-center gap-2 inline-flex">
                    <button
                        onClick={copyToClipboard}
                        className="px-4 py-[5px] bg-white border border-slate-300 rounded-full justify-center items-center gap-1.5 flex"
                    >
                        <div className="text-center text-slate-600 text-sm font-medium leading-tight">
                            Copy Address
                        </div>
                    </button>
                </div>
            </div>
        </div>
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
