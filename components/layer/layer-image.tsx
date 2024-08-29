"use client";

import { useState } from "react";
import Image from "next/image";

export default function LayerImage({
    src,
    title,
}: {
    src: string;
    title: string;
}) {
    //TODO lazy loading
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = () => {
        setImageSrc("/bitcoinlayers-logo.png");
    };

    return (
        <Image
            src={imageSrc}
            alt={`${title} logo`}
            width={100}
            height={100}
            onError={handleError}
            className="lg:w-[100px] lg:h-[100px] w-[32px] h-[32px]"
        />
    );
}
