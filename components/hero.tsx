import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        style={{ position: "relative", width: "100%", paddingTop: "26.25%" }}
      >
        <Image
          src="/Bitcoin.svg"
          alt="Bitcoin"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="font-playfair italic font-black text-main text-hero -mb-4">
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
