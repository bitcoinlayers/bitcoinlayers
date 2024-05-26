import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContributePage: React.FC = () => {
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
      if you'd like to get involved.
    </span>
  );

  const supportContent = (
    <div className="w-[960px] h-[460px] flex flex-col justify-center items-center gap-6">
      <div className="self-stretch h-[72px] flex flex-col justify-center items-end gap-8">
        <div className="self-stretch h-[72px] flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-slate-500 text-base font-normal leading-normal">
            Bitcoin Layers is currently managed on a volunteer basis by{" "}
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
            from Messari. Both have experience working in the Bitcoin space, and
            have conducted research on Bitcoin scaling protocols. If you would
            like to support their work, consider donating at the Bitcoin address
            below.
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
            bc1p<span className="text-zinc-500"> 73rv</span> kvrs
            <span className="text-zinc-500"> z5nu </span>p2p8
            <span className="text-zinc-500"> zrfg </span>433h
            <span className="text-zinc-500"> k5y0 </span>ng5u
            <span className="text-zinc-500"> rd5u</span> 4zvd
            <span className="text-zinc-500"> hpvj </span>zml0
            <span className="text-zinc-500"> hzys </span>s7fa
            <span className="text-zinc-500"> ky</span>
          </div>
        </div>
        <div className="rounded-full border-2 border-slate-300 justify-center items-center gap-2 inline-flex">
          <div className="px-4 py-[5px] bg-white justify-center items-center gap-1.5 flex">
            <div className="bg-white/opacity-0 flex flex-col justify-center items-center inline-flex">
              <div className="w-3.5 h-3.5 relative">
                <img
                  className="w-[11px] h-3.5 left-[1.50px] top-0 absolute"
                  src="https://via.placeholder.com/11x14"//TODO
                  alt="Copy Icon"
                />
              </div>
            </div>
            <div className="text-center text-slate-600 text-sm font-medium leading-tight">
              Copy Address
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-start items-center gap-8 w-full">
          <div className="flex-grow flex items-center gap-[30px] h-[156px]">
            <div className="special_header flex-grow h-20">Contribute</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-12 w-full rounded-md">
            <div className="flex flex-col gap-8 w-full">
              <InfoBox
                question="Contribute to Bitcoin Layers"
                answer={contributeContent}
              />
              <InfoBox question="Support" answer={supportContent} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContributePage;
