"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
    slug: string;
    folder: string;
    altText?: string;
    fallback?: string;
    width?: number;
    height?: number;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
    slug,
    folder,
    altText = `${slug} logo`,
    fallback = "/logos/bitcoinlayers-logo.png",
    width = 20,
    height = 20,
}) => {
    const [imageSrc, setImageSrc] = useState(
        `/${folder}/${slug.toLowerCase()}.png`,
    );

    return (
        <Image
            src={imageSrc}
            alt={altText}
            width={width}
            height={height}
            onError={() => setImageSrc(fallback)}
        />
    );
};

export default ImageWithFallback;
