import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { InfrastructureProject } from "@/content/props";
import ProjectLinks from "../project-links";

const Categories: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    return (
        <div className="flex gap-12 w-full">
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">
                    {infrastructure.entityType}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Purpose
                </div>
                <div className="text-text_header">{infrastructure.purpose}</div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Associated Layers
                </div>
                <div className="text-text_header">
                    {infrastructure.associatedLayers}
                </div>
            </div>
        </div>
    );
};

const Description: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(infrastructure.description)}
        </div>
    );
};

const InfrastructureOverview: React.FC<{
    infrastructure: InfrastructureProject;
}> = ({ infrastructure }) => {
    return (
        <div className="flex justify-between pt-6 gap-4">
            <div className="flex flex-col space-y-10 mb-12 w-full">
                <Categories infrastructure={infrastructure} />
                <Description infrastructure={infrastructure} />
                <div className="border-t border-stroke_secondary"></div>
                <ProjectLinks links={infrastructure.links} />
            </div>
        </div>
    );
};

export default InfrastructureOverview;
