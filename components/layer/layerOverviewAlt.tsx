import { Fragment } from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { Project } from "@/content/props";
import LayerDiamond from "./layerDiamond";
import Categories from "./categories";
import { LayerProject } from "@/content/props";
import ProjectLinks from "../project-links";

const Description: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    return (
        <div className="self-stretch text-muted-foreground text-[16px] leading-relaxed">
            {parseTextWithLinks(layer.description)}
        </div>
    );
};

const LayerOverviewAlt: React.FC<{ layer: Project }> = ({ layer }) => {
    return (
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

        <>
            {/* Content row: left description + right diamond */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
                {/* LEFT: Categories + Description */}
                <div className="flex flex-col space-y-6 w-full lg:w-3/5">
                    <Categories layer={layer as LayerProject} />
                    <Description layer={layer as LayerProject} />
                </div>

                {/* RIGHT: Diamond */}
                <div className="hidden lg:flex items-start justify-end lg:w-2/5 pt-[2px]">
                    <div className="scale-[0.85] origin-top-right">
                        <LayerDiamond layer={layer as LayerProject} />
                    </div>
                </div>
            </div>

            {/* Footer: Project links */}
            <div className="pt-6 mt-0 border-t border-border">
                <ProjectLinks links={layer.links} />
            </div>
        </>
    </section>
</main>
    );
};

export default LayerOverviewAlt;
