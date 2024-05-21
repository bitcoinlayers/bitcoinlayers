import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <div
        style={{ position: "relative", width: "100%", paddingTop: "26.25%" }}
      >
        <Image
          src="/Bitcoin.svg"
          alt="Bitcoin"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4">
          <h1 className="font-script italic font-bold text-[#FE4F18] text-9xl">
            Layers
          </h1>
          <p className="flex items-center text-center text-text_secondary">
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
