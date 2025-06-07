import { notFound } from "next/navigation";
import { allLayers, allLayerSlugs } from "@/util/layer_index";
import LayerMenu from "@/components/layer/layerMenu";
import LayerBody from "@/components/layer/layerBody";
import RiskAnalysis from "@/components/layer/risk-analysis/layer-container";
import LayerOverviewAlt from "@/components/layer/layerOverviewAlt";
import LayerImage from "@/components/layer/layer-image";
import LayerTVLChart from "@/components/charts/layer-tvl-chart";
import ProjectContractAddresses from "@/components/project-contract-addresses";
import ManualContractAddresses from "@/components/manual-contract-addresses";
import RiskSummary from "@/components/shared/risk-summary";
import AlternativeBanner from "@/components/alternative-banner";
import { EntityCategory } from "@/content/props";

function getLayerFromSlug(slug: string) {
    const layer = allLayers.find((layer) => layer.slug === slug);
    if (!layer) {
        return null;
    }
    return layer;
}

export default async function LayerPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const { slug } = params;
    const layer = getLayerFromSlug(slug);

    if (!layer) {
        return notFound();
    }

    return (
        <article className="flex flex-col lg:min-h-screen max-w-5xl mx-auto lg:pt-0 pt-12">
            {(layer.entityCategory === EntityCategory.Alt ) ?
            <AlternativeBanner
            title={`The ${layer.title} page of Bitcoin Layers is under development.`}
            />
            :
            <>
            </>}
            <div className="flex justify-start items-center lg:gap-8 gap-2 lg:my-12 my-6 px-4 lg:px-0">
                <div className="flex justify-center items-center">
                    <LayerImage
                        title={layer.title}
                        src={`/logos/${layer.slug}.png`}
                    />{" "}
                </div>
                <div className="flex-grow flex items-center">
                    <h1 className="layer_header !text-foreground flex-grow">
                        {layer.title}
                    </h1>
                </div>
            </div>
            <div className="lg:container mx-4 lg:px-4 flex lg:flex-row flex-col">
                <div className="lg:w-1/5 z-40 lg:sticky lg:top-[60px] max-h-[calc(100vh-60px)] w-full overflow-y-auto overflow-x-hidden whitespace-nowrap lg:whitespace-normal top-[68px] fixed h-auto lg:h-fit lg:pt-6 lg:px-2 no-scrollbar py-0 bg-background">
                    <LayerMenu layer={layer} />
                </div>
                <div className="lg:w-4/5 flex flex-col">
                    <LayerOverviewAlt layer={layer} />
                    <LayerTVLChart />
                    <RiskSummary content={layer.riskSummary || []} />
                    {!layer.underReview && (
                        <RiskAnalysis
                            riskAnalysis={layer.riskAnalysis}
                            riskFactors={layer.riskFactors}
                            layer={layer}
                        />
                    )}
                    <ManualContractAddresses 
                        contracts={layer.manualContracts || []} 
                        sectionTitle="Additional Contracts"
                        sectionId="manualcontracts"
                    />
                    <LayerBody layer={layer} />
                    <ProjectContractAddresses slug={slug} isLayer={true} />
                </div>
            </div>
        </article>
    );
}

export function generateStaticParams() {
    return allLayerSlugs.map((slug) => ({
        slug,
    }));
}