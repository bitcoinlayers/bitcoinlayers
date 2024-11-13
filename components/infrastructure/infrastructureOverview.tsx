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
    const hasAssessment =
        infrastructure.assessment && infrastructure.assessment.length > 0;

    return (
        <section
            id="overview"
            className="flex lg:flex-row flex-col justify-between items-center lg:items-start pt-6 gap-4 mb-12"
        >
            <div className="flex lg:flex-row flex-col justify-between items-center lg:items-start pt-6 gap-4">
                <div className="flex flex-col space-y-10 mb-12 w-full">
                    <Categories infrastructure={infrastructure} />
                    {/* {hasAssessment && (
                    <div className="flex lg:hidden w-auto">
                        <AssessmentSnapshotDialog
                            infrastructure={infrastructure}
                        />
                    </div>
                )} */}
                    <Description infrastructure={infrastructure} />
                    <div className="border-t border-stroke_secondary"></div>
                    <ProjectLinks links={infrastructure.links} />
                </div>
                {/* {hasAssessment && (
                <div className="hidden lg:flex justify-center w-[350px] h-[350px] lg:h-[350px]">
                    <AssessmentSnapshotDialog infrastructure={infrastructure} />
                </div>
            )} */}
            </div>
        </section>
    );
};

export default InfrastructureOverview;
