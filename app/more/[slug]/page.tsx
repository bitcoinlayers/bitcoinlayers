import { notFound } from "next/navigation";
import {
    allInfrastructures,
    allInfrastructureSlugs,
} from "@/util/infrastructure_index";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import InfrastructureOverviewAlt from "@/components/infrastructure/infrastructureOverviewAlt";
import InfrastructureImage from "@/components/infrastructure/infrastructure-image";
import { allMore } from "@/util/more_index";
import MoreBanner from "@/components/more-banner";
import RiskSummary from "@/components/shared/risk-summary";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";

async function getInfrastructureFromSlug(slug: string) {
    const infrastructure = allMore.find(
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

    return (
        <>
            <MoreBanner
                title={`This ${infrastructure.title} review is under development.`}
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
                        
                        <RiskSummary content={infrastructure.riskSummary || []} />
                        {infrastructure.assessment && (
                            <RiskAnalysis
                                riskAnalysis={infrastructure.assessment}
                                riskFactors={infrastructure.riskFactors}
                                infrastructure={infrastructure}
                            />
                        )}

                        <InfrastructureBody infrastructure={infrastructure} />
                    </div>
                </div>
            </article>
        </>
    );
}

export async function generateStaticParams() {
    return allInfrastructureSlugs.map((slug) => ({
        slug,
    }));
}