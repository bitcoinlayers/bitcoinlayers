import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { InfrastructureProject } from "@/content/props";
import ProjectLinks from "@/components/project-links";
import Categories from "@/components/infrastructure/categories";
import AssessmentSnapshotDialog from "./assessment-snapshot/assessment-snapshot-dialog";

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
            <div className="mt-4 lg:mt-0 w-[350px] h-[350px] lg:h-[350px] lg:ml-0 ml-0">
                <AssessmentSnapshotDialog infrastructure={infrastructure} />
            </div>
        </div>
    );
};

export default InfrastructureOverview;
