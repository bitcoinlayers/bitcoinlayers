"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LogoImageProps {
    src: string;
    title: string;
}

const LogoImage = ({ src, title }: LogoImageProps) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imgExists, setImgExists] = useState(true);

    const handleError = () => {
        setImageSrc("/bitcoinlayers-logo.png");
        setImgExists(false);
    };

    useEffect(() => {
        // Check if the image exists
        fetch(src)
            .then((res) => {
                if (!res.ok) throw new Error("Image not found");
                setImgExists(true);
            })
            .catch(() => handleError());
    }, [src]);

    return (
        <>
            {imgExists ? (
                <Image
                    src={imageSrc}
                    alt={`${title} logo`}
                    width={20}
                    height={20}
                />
            ) : (
                <Image
                    src="/bitcoinlayers-logo.png"
                    alt="Fallback logo"
                    width={20}
                    height={20}
                />
            )}
        </>
    );
};

export default LogoImage;
