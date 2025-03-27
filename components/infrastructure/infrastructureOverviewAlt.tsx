import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { InfrastructureProject, Project } from "@/content/props";
import ProjectLinks from "@/components/project-links";
import Categories from "@/components/infrastructure/categories";

const Description: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    return (
        <div className="text-muted-foreground self-stretch">
            {parseTextWithLinks(infrastructure.description)}
        </div>
    );
};

const InfrastructureOverviewAlt: React.FC<{
    infrastructure: InfrastructureProject;
}> = ({ infrastructure }) => {
    const hasAssessment =
        infrastructure.assessment && infrastructure.assessment.length > 0;    return (
        <main className="content flex-grow sm:mt-0 pt-0 lg:px-0">
            <section
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                id="overview"
            >
                <div className="self-stretch justify-start items-start gap-4 mb-4">
                    <div className="body_section !text-foreground">
                        Overview
                    </div>
                </div>

                {/* Content row: left description + right diamond */}
                {/* Categories (left column stuff) */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
                <div className="flex flex-col space-y-6 w-full lg:w-3/5">
                <Categories infrastructure={infrastructure} />
                </div>
                </div>

{/* Full-width description below */}
<div className="w-full mt-6 mb-6">
    <Description infrastructure={infrastructure} />
</div>

                {/* Footer: Project links */}
                <div className="pt-6 mt-0 border-t border-border">
                    <ProjectLinks links={infrastructure.links} />
                </div>
            </section>
        </main>
    );
};

export default InfrastructureOverviewAlt;
