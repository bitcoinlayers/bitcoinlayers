import React from "react";
import Image from "next/image";
import SearchBlock from "./filter/SearchBlock";

interface Props {
    title: string;
    description: string;
}

const Hero: React.FC<Props> = ({ title, description }: Props) => {
    return (
        <div className="relative w-full lg:pt-[3rem]">
            <div className="lg:pt-[30rem] pt-[26rem] relative w-full">
                <Image
                    src="/Bitcoin.svg"
                    alt="Bitcoin"
                    fill
                    style={{ objectFit: "contain" }}
                />
                <div className="absolute inset-6 flex flex-col justify-center items-center">
                    <h1 className="font-playfair italic font-black text-brand text-hero lg:text-14xl text-7xl lg:mb-4 text-center">
                        {title}
                    </h1>
                    <p className="flex items-center text-center text-base font-normal text-text_secondary -mt-2 mb-14">
                        {description}
                        <br />
                        Learn the difference.
                    </p>
                    <SearchBlock />
                </div>
            </div>
        </div>
    );
};

export default Hero;
