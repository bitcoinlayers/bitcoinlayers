import { notFound } from "next/navigation";
import LayerMenu from "@/components/layer/layerMenu";
import LayerBody from "@/components/layer/layerBody";
import RiskAnalysis from "@/components/layer/risk-analysis/layerBodyRiskAnalysis";
import LayerOverview from "@/components/layer/layerOverview";
import LayerImage from "@/components/layer/layer-image";
import ProjectTVLChart from "@/components/charts/project-tvl-chart";
import { LOCALES } from "@/enums/locale.enums";
import { getUserLocale } from "@/services/locale";

export async function getAllLayersWithSlugs() {
    const locale = await getUserLocale();
    return locale === LOCALES.en
        ? await import("@/util/layer_index_en")
        : await import("@/util/layer_index_uk");
}

async function getLayerFromSlug(slug: string) {
    const { allLayers } = await getAllLayersWithSlugs();
    const layer = allLayers.find((layer) => layer.slug === slug);
    if (!layer) {
        return null;
    }
    return layer;
}

export default async function LayerPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const layer = await getLayerFromSlug(slug);

    if (!layer) {
        return notFound();
    }

    return (
        <article className="flex flex-col lg:min-h-screen max-w-5xl mx-auto lg:pt-24 pt-12">
            <div className="flex justify-start items-center lg:gap-8 gap-2 lg:my-12 my-6 px-4 lg:px-0">
                <div className="flex justify-center items-center">
                    <LayerImage
                        title={layer.title}
                        src={`/logos/${layer.slug}.png`}
                    />
                </div>
                <div className="flex-grow flex items-center">
                    <h1 className="layer_header flex-grow">{layer.title}</h1>
                </div>
            </div>
            <div className="lg:container mx-4 lg:px-4 flex lg:flex-row flex-col">
                <div className="lg:w-1/5 z-40 sticky top-[48px] lg:h-screen w-full overflow-y-auto lg:pt-6 lg:px-0 no-scrollbar py-0 bg-white">
                    <LayerMenu layer={layer} />
                </div>
                <div className="lg:w-4/5 flex flex-col">
                    <LayerOverview layer={layer} />
                    <ProjectTVLChart />
                    {layer.underReview === "no" && (
                        <RiskAnalysis
                            riskAnalysis={layer.riskAnalysis}
                            riskFactors={layer.riskFactors}
                            layer={layer}
                        />
                    )}
                    <LayerBody layer={layer} />
                </div>
            </div>
        </article>
    );
}
