import Image from "next/image";
import { Layer } from "../layer/layerProps";
import Link from "next/link";
import { useState } from "react";

export const SearchResult = ({ searchResult }: { searchResult: Layer[] }) => {
    return (
        <>
            {searchResult.length > 0 ? (
                <div className="absolute z-30 w-full rounded-xl border-2 border-[#fe4e18] bg-white px-1 shadow-md text-black mt-2">
                    <div className=" max-h-[15rem] overflow-auto">
                        {searchResult?.map((layer) => (
                            <Link
                                href={`/layers/${layer.slug}`}
                                key={layer.slug}
                            >
                                <div
                                    key={layer.title}
                                    className="flex items-center gap-3 text-[1rem] py-3 hover:bg-[#f2f6fd] px-4 rounded my-1"
                                >
                                    {layer.slug ? (
                                        <InfrastructureImage
                                            src={`/logos/${layer.slug}.png`}
                                            title={layer.title}
                                        />
                                    ) : null}
                                    {layer.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

function InfrastructureImage({ src, title }: { src: string; title: string }) {
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
}
