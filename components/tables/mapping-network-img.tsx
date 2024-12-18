import React from "react";
import ImageWithFallback from "./image-with-fallback";

interface NetworkListProps {
    networks: { network_slug: string }[];
}

const NetworkList: React.FC<NetworkListProps> = ({ networks }) => {
    if (!networks || networks.length === 0) {
        return null;
    }

    const topNetworks = networks.slice(0, 3);

    return (
        <ul className="flex flex-wrap gap-2">
            {topNetworks.map((network) => (
                <li
                    key={network.network_slug}
                    className="flex items-center gap-2"
                >
                    <ImageWithFallback
                        slug={network.network_slug}
                        folder="logos"
                        altText="" //{network.network_slug}
                    />
                </li>
            ))}
        </ul>
    );
};

export default NetworkList;
