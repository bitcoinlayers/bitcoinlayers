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
import Categorization from "@/components/shared/categorization";
import AlternativeBanner from "@/components/alternative-banner";
import UnderReviewWrapper from "@/components/under-review-wrapper";
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
            <div className="flex items-center lg:gap-8 gap-4 lg:my-12 my-6 px-4 lg:px-0">
                <LayerImage
                    title={layer.title}
                    src={`/logos/${layer.slug}.png`}
                />
                <h1 className="layer_header !text-foreground">
                    {layer.title}
                </h1>
            </div>
            <UnderReviewWrapper isUnderReview={layer.underReview}>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/5 z-40 lg:sticky lg:top-[60px] max-h-[calc(100vh-60px)] w-full overflow-y-auto overflow-x-hidden whitespace-nowrap lg:whitespace-normal top-[68px] fixed h-auto lg:h-fit no-scrollbar py-0 lg:py-0 lg:mr-6">
                        <div className="bg-muted/50 rounded-xl border border-border shadow-none p-0">
                            <LayerMenu layer={layer} />
                        </div>
                    </div>
                    <div className="lg:w-4/5 flex flex-col px-4 lg:pl-6">
                        <LayerOverviewAlt layer={layer} />
                        <LayerTVLChart />
                        
                        {/* Token Contracts */}
                        <ProjectContractAddresses slug={slug} isLayer={true} />
                        {layer.partialReview && layer.partialReviewAfter === "tokencontracts" && (
                            <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    Partial Review Available
                                </div>
                                <p className="text-muted-foreground">
                                    This project is currently undergoing a partial review. Basic information, chart data, and token contracts are available above, but the full risk analysis and technical review are still in progress.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Complete technical analysis including risk assessments, trust assumptions, and detailed categorization will be added once our review is complete.
                                </p>
                            </div>
                        )}
                        
                        {/* Risk Summary */}
                        {(!layer.partialReview || (layer.partialReviewAfter && ["risksummary", "categorization", "trust", "manualcontracts"].includes(layer.partialReviewAfter))) && (
                            <RiskSummary content={layer.riskSummary || []} />
                        )}
                        {layer.partialReview && layer.partialReviewAfter === "risksummary" && (
                            <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    Partial Review Available
                                </div>
                                <p className="text-muted-foreground">
                                    This project is currently undergoing a partial review. The sections above are available, but the full technical review including trust assumptions and detailed analysis are still in progress.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Complete technical analysis will be added once our review is complete.
                                </p>
                            </div>
                        )}
                        
                                {/* Categorization */}
        {(!layer.partialReview || (layer.partialReviewAfter && ["categorization", "trust", "manualcontracts"].includes(layer.partialReviewAfter))) && layer.categorization && layer.categorization.length > 0 && (
            <Categorization content={layer.categorization} layer={layer} />
        )}
                        {layer.partialReview && layer.partialReviewAfter === "categorization" && (
                            <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    Partial Review Available
                                </div>
                                <p className="text-muted-foreground">
                                    This project is currently undergoing a partial review. The sections above are available, but the detailed trust assumptions and additional analysis are still in progress.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Complete technical analysis will be added once our review is complete.
                                </p>
                            </div>
                        )}
                        
                        {/* Risk Analysis */}
                        {(!layer.partialReview || (layer.partialReviewAfter && ["trust", "manualcontracts"].includes(layer.partialReviewAfter))) && !layer.underReview && (
                            <RiskAnalysis
                                riskAnalysis={layer.riskAnalysis}
                                riskFactors={layer.riskFactors}
                                layer={layer}
                            />
                        )}
                        {layer.partialReview && layer.partialReviewAfter === "trust" && (
                            <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    Partial Review Available
                                </div>
                                <p className="text-muted-foreground">
                                    This project is currently undergoing a partial review. The trust assumptions and risk analysis above are available, but additional sections are still in progress.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Additional analysis and documentation will be added once our review is complete.
                                </p>
                            </div>
                        )}
                        
                        {/* Manual Contract Addresses */}
                        {(!layer.partialReview || (layer.partialReviewAfter && layer.partialReviewAfter === "manualcontracts")) && (
                            <ManualContractAddresses 
                                contracts={layer.manualContracts || []} 
                                sectionTitle="Additional Contracts"
                                sectionId="manualcontracts"
                            />
                        )}
                        {layer.partialReview && layer.partialReviewAfter === "manualcontracts" && (
                            <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                <div className="text-lg font-semibold text-foreground mb-3">
                                    Partial Review Available
                                </div>
                                <p className="text-muted-foreground">
                                    This project is currently undergoing a partial review. The sections above are available, but additional documentation and analysis are still in progress.
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Additional sections will be added once our review is complete.
                                </p>
                            </div>
                        )}
                        
                        {/* Layer Body - only show if not partial review */}
                        {!layer.partialReview && (
                            <LayerBody layer={layer} />
                        )}
                    </div>
                </div>
            </UnderReviewWrapper>
        </article>
    );
}

export function generateStaticParams() {
    return allLayerSlugs.map((slug) => ({
        slug,
    }));
}