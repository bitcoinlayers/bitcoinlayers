import { notFound } from "next/navigation";
import {
    allInfrastructures,
    allInfrastructureSlugs,
    popupOnlyInfrastructures,
} from "@/util/infrastructure_index";
import { EntityType } from "@/content/props";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import InfrastructureOverviewAlt from "@/components/infrastructure/infrastructureOverviewAlt";
import InfrastructureImage from "@/components/infrastructure/infrastructure-image";
import InfraTVLChart from "@/components/charts/infra-tvl-chart";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import RiskSummary from "@/components/shared/risk-summary";
import UnderDevelopmentBanner from "@/components/under-development-banner";
import TaprootAnalysisSection from "@/components/layer/risk-analysis/taproot-analysis-section";
import UnderReviewWrapper from "@/components/under-review-wrapper";
import ProjectContractAddresses from "@/components/project-contract-addresses";
import ManualContractAddresses from "@/components/manual-contract-addresses";
import TokenContractsSection from "@/components/token-contracts-section";
import KnowledgeBitsFooter from "@/components/layer/knowledge-bits-footer";

async function getInfrastructureFromSlug(slug: string) {
    const infrastructure = [...allInfrastructures, ...popupOnlyInfrastructures].find(
        (infrastructure) => infrastructure.slug === slug,
    );
    if (!infrastructure) {
        return null;
    }
    return infrastructure;
}

export default async function InfrastructurePage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const { slug } = params;
    const infrastructure = await getInfrastructureFromSlug(slug);

    if (!infrastructure) {
        return notFound();
    }

    // Extract knowledge bits from sections for the footer
    const knowledgeBitsSection = infrastructure.sections.find(section => section.id === "knowledgebits" || section.id === "knowledgeBits");
    const knowledgeBits = knowledgeBitsSection?.content || [];

    // Create a modified infrastructure without knowledge bits for InfrastructureBody
    const infrastructureWithoutKnowledgeBits = {
        ...infrastructure,
        sections: infrastructure.sections.filter(section => section.id !== "knowledgebits" && section.id !== "knowledgeBits")
    };

    return (
        <>
            <UnderDevelopmentBanner
                title={`The ${infrastructure.title} page of Bitcoin Layers is under development.`}
            />
            <article className="flex flex-col lg:min-h-screen max-w-5xl mx-auto lg:pt-0 pt-12">
                <div className="flex items-center lg:gap-8 gap-4 lg:my-12 my-6 px-4 lg:px-0">
                    <InfrastructureImage
                        title={infrastructure.title}
                        src={`/logos/${infrastructure.slug}.png`}
                    />
                    <h1 className="layer_header !text-foreground">
                        {infrastructure.title}
                    </h1>
                </div>
                <UnderReviewWrapper isUnderReview={infrastructure.underReview}>
                    <div className="flex lg:flex-row flex-col">
                        <div className="lg:w-1/5 z-40 lg:sticky lg:top-[60px] max-h-[calc(100vh-60px)] w-full overflow-y-auto overflow-x-hidden whitespace-nowrap lg:whitespace-normal top-[68px] fixed h-auto lg:h-fit no-scrollbar py-0 lg:py-0 lg:mr-6">
                            <div className="bg-muted/50 rounded-xl border border-border shadow-none p-0">
                                <InfrastructureMenu infrastructure={infrastructure} />
                            </div>
                        </div>
                        <div className="lg:w-4/5 flex flex-col px-4 lg:pl-6">
                            <InfrastructureOverviewAlt
                                infrastructure={infrastructure}
                            />
                            
                            {/* Only show supply chart for non-ChaumianEcashProtocol infrastructures */}
                            {infrastructure.entityType !== EntityType.ChaumianEcashProtocol && (
                                <InfraTVLChart />
                            )}
                            {infrastructure.partialReview && infrastructure.partialReviewAfter === "tokencontracts" && infrastructure.entityType !== EntityType.ChaumianEcashProtocol && (
                                <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                    <div className="text-lg font-semibold text-foreground mb-3">
                                        Partial Review Available
                                    </div>
                                    <p className="text-muted-foreground">
                                        This infrastructure project is currently undergoing a partial review. Basic information, chart data, and token contracts are available above, but the full assessment and technical review are still in progress.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Complete technical analysis will be added once our review is complete.
                                    </p>
                                </div>
                            )}
                            
                            {/* Special partial review message for ChaumianEcashProtocol infrastructures */}
                            {infrastructure.partialReview && infrastructure.partialReviewAfter === "tokencontracts" && infrastructure.entityType === EntityType.ChaumianEcashProtocol && (
                                <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                    <div className="text-lg font-semibold text-foreground mb-3">
                                        Partial Review Available
                                    </div>
                                    <p className="text-muted-foreground">
                                        This Chaumian Ecash protocol is currently undergoing a partial review. Basic information is available above, but the full assessment and technical review are still in progress.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Complete technical analysis will be added once our review is complete.
                                    </p>
                                </div>
                            )}
                            
                            {/* Token Contracts */}
                            <TokenContractsSection 
                                slug={infrastructure.slug} 
                                isLayer={false}
                            />
                            
                            {/* Risk Summary */}
                            {(!infrastructure.partialReview || (infrastructure.partialReviewAfter && ["risksummary", "assessment", "manualcontracts"].includes(infrastructure.partialReviewAfter))) && (
                                <RiskSummary content={infrastructure.riskSummary || []} />
                            )}
                            {infrastructure.partialReview && infrastructure.partialReviewAfter === "risksummary" && (
                                <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                    <div className="text-lg font-semibold text-foreground mb-3">
                                        Partial Review Available
                                    </div>
                                    <p className="text-muted-foreground">
                                        This infrastructure project is currently undergoing a partial review. The sections above are available, but the detailed assessment and additional analysis are still in progress.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Complete technical assessment will be added once our review is complete.
                                    </p>
                                </div>
                            )}
                            
                            {/* Assessment */}
                            {(!infrastructure.partialReview || (infrastructure.partialReviewAfter && ["assessment", "manualcontracts"].includes(infrastructure.partialReviewAfter))) && infrastructure.assessment && (
                                <RiskAnalysis
                                    riskAnalysis={infrastructure.assessment}
                                    riskFactors={infrastructure.riskFactors}
                                    infrastructure={infrastructure}
                                />
                            )}
                            {infrastructure.partialReview && infrastructure.partialReviewAfter === "assessment" && (
                                <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                    <div className="text-lg font-semibold text-foreground mb-3">
                                        Partial Review Available
                                    </div>
                                    <p className="text-muted-foreground">
                                        This infrastructure project is currently undergoing a partial review. The assessment above is available, but additional sections are still in progress.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Additional analysis and documentation will be added once our review is complete.
                                    </p>
                                </div>
                            )}
                            
                            {/* Bitcoin Script Analysis - for Lombard LBTC */}
                            {infrastructure.slug === "lombard-lbtc" && (
                                <section
                                    className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                                    id="taprootscriptanalysis"
                                >
                                    <div className="self-stretch justify-start items-start gap-4">
                                        <div className="body_section !text-foreground">
                                            Bitcoin Script Analysis
                                        </div>
                                    </div>
                                    <div className="body_paragraph !text-foreground mt-3">
                                        <div className="body_subsection !text-muted-foreground">
                                            Bitcoin custody transaction analysis
                                        </div>
                                    </div>
                                    <TaprootAnalysisSection 
                                        infrastructureSlug={infrastructure.slug} 
                                        autoExpand={true} 
                                        hideHeader={true} 
                                    />
                                </section>
                            )}
                            
                            {/* Token Contracts - moved to appear after Assessment section */}
                            {infrastructure.entityType !== EntityType.ChaumianEcashProtocol && (
                                <ProjectContractAddresses slug={slug} isLayer={false} />
                            )}
                            
                            {/* Manual Contract Addresses */}
                            {(!infrastructure.partialReview || (infrastructure.partialReviewAfter && infrastructure.partialReviewAfter === "manualcontracts")) && (
                                <ManualContractAddresses 
                                    contracts={infrastructure.manualContracts || []} 
                                    sectionTitle="Additional Contracts"
                                    sectionId="manualcontracts"
                                />
                            )}
                            {infrastructure.partialReview && infrastructure.partialReviewAfter === "manualcontracts" && (
                                <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
                                    <div className="text-lg font-semibold text-foreground mb-3">
                                        Partial Review Available
                                    </div>
                                    <p className="text-muted-foreground">
                                        This infrastructure project is currently undergoing a partial review. The sections above are available, but additional documentation and analysis are still in progress.
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Additional sections will be added once our review is complete.
                                    </p>
                                </div>
                            )}
                            
                            {/* Infrastructure Body - only show if not partial review */}
                            {!infrastructure.partialReview && (
                                <InfrastructureBody infrastructure={infrastructureWithoutKnowledgeBits} />
                            )}
                            
                            {/* Knowledge Bits Footer - always show if knowledge bits exist */}
                            <KnowledgeBitsFooter knowledgeBits={knowledgeBits} />
                        </div>
                    </div>
                </UnderReviewWrapper>
            </article>
        </>
    );
}

export async function generateStaticParams() {
    return allInfrastructureSlugs.map((slug) => ({
        slug,
    }));
}
