import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, Type } from "@/content/props";

export const SearchResult = ({ searchResult }: { searchResult: Project[] }) => {
    const getItemLink = (item: Project) => {
        return item.type === Type.Layer
            ? `/layers/${item.slug}`
            : `/infrastructure/${item.slug}`;
    };

    return (
        <>
            {searchResult.length > 0 ? (
                <div className="absolute z-30 w-full rounded-xl border-2 border-[#fe4e18] bg-white px-1 shadow-md text-black mt-2">
                    <div className=" max-h-[15rem] overflow-auto">
                        {searchResult?.map((item) => (
                            <Link href={getItemLink(item)} key={item.slug}>
                                <div
                                    key={item.title}
                                    className="flex items-center gap-3 text-[1rem] py-3 hover:bg-[#f2f6fd] px-4 rounded my-1"
                                >
                                    {item.slug ? (
                                        <SearchItemImage
                                            src={`/logos/${item.slug}.png`}
                                            title={item.title}
                                        />
                                    ) : null}
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

const SearchItemImage = ({ src, title }: { src: string; title: string }) => {
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = () => {
        setImageSrc("/bitcoinlayers-logo.png");
    };

    return (
        <Image
            src={imageSrc}
            alt={`${title} logo`}
            width={25}
            height={25}
            onError={handleError}
        />
    );
};
