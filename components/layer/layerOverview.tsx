import LayerDiamond from "./layerDiamond";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Categories from "./categories";
import { LayerProject } from "@/content/props";
import ProjectLinks from "../project-links";

const LayerOverview: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    return (
        <section
            id="overview"
            className="flex lg:flex-row flex-col justify-between items-center lg:items-start pt-6 gap-4 mb-12"
        >
            <div className="flex flex-col space-y-10 px-4 flex-grow w-full lg:w-1/4">
                <Categories layer={layer} />
                <Description layer={layer} />
                <div className="border-t border-border"></div>
                <ProjectLinks links={layer.links} />
            </div>
            <div className="mt-4 lg:mt-0 w-[350px] h-[350px] lg:h-[350px] lg:ml-0 ml-0">
                <LayerDiamond layer={layer} />
            </div>
        </section>
    );
};

export default LayerOverview;

const Description: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    return (
        <div className="self-stretch text-muted-foreground">
            {parseTextWithLinks(layer.description)}
        </div>
    );
};
