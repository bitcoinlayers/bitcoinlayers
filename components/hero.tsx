import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <div className="relative w-full lg:pt-[3rem] pt-[5rem]">
            <div style={{ position: "relative", width: "100%", paddingTop: "26.25%" }}>
                <Image
                    src="/Bitcoin.svg"
                    alt="Bitcoin"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-6 flex flex-col justify-center items-center">
                    <h1 className="font-playfair italic font-black text-brand text-hero lg:text-14xl text-7xl lg:mb-4">
                        Layers
                    </h1>
                    <p className="flex items-center text-center text-base font-normal text-text_secondary -mt-2">
                        Not every bitcoin layer is equal.
                        <br />
                        Learn the difference.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
