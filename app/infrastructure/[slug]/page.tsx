import { notFound } from "next/navigation";
import {
    allInfrastructures,
    allInfrastructureSlugs,
} from "@/util/infrastructure_index";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import InfrastructureOverviewAlt from "@/components/infrastructure/infrastructureOverviewAlt";
import InfrastructureImage from "@/components/infrastructure/infrastructure-image";
import InfraTVLChart from "@/components/charts/infra-tvl-chart";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import RiskSummary from "@/components/shared/risk-summary";
import UnderDevelopmentBanner from "@/components/under-development-banner";
import ProjectContractAddresses from "@/components/project-contract-addresses";
import ManualContractAddresses from "@/components/manual-contract-addresses";

async function getInfrastructureFromSlug(slug: string) {
    const infrastructure = allInfrastructures.find(
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
            <UnderDevelopmentBanner
                title={`The ${infrastructure.title} page of Bitcoin Layers is under development.`}
            />
            <article className="flex flex-col lg:min-h-screen max-w-5xl mx-auto lg:pt-0 pt-12">
                <div className="flex justify-start items-center lg:gap-8 gap-2 lg:my-12 my-6 px-4 lg:px-0">
                    <div className="flex justify-center items-center">
                        <InfrastructureImage
                            title={infrastructure.title}
                            src={`/logos/${infrastructure.slug}.png`}
                        />{" "}
                    </div>
                    <div className="flex-grow flex items-center">
                        <h1 className="layer_header flex-grow !text-foreground">
                            {infrastructure.title}
                        </h1>
                    </div>
                </div>
                <div className="lg:container mx-4 lg:px-4 flex lg:flex-row flex-col">
                    <div className="lg:w-1/5 z-40 lg:sticky lg:top-[60px] max-h-[calc(100vh-60px)] w-full overflow-y-auto overflow-x-hidden whitespace-nowrap lg:whitespace-normal top-[68px] fixed h-auto lg:h-fit lg:pt-6 lg:px-2 no-scrollbar py-0 bg-background">
                        <InfrastructureMenu infrastructure={infrastructure} />
                    </div>
                    <div className="lg:w-4/5 flex flex-col px-4 lg:px-0">
                        <InfrastructureOverviewAlt
                            infrastructure={infrastructure}
                        />
                        <InfraTVLChart />
                        <RiskSummary content={infrastructure.riskSummary || []} />
                        {infrastructure.assessment && (
                            <RiskAnalysis
                                riskAnalysis={infrastructure.assessment}
                                riskFactors={infrastructure.riskFactors}
                                infrastructure={infrastructure}
                            />
                        )}
                        <ProjectContractAddresses slug={slug} isLayer={false} />
                        <ManualContractAddresses 
                            contracts={infrastructure.manualContracts || []} 
                            sectionTitle="Additional Contracts"
                            sectionId="manualcontracts"
                        />
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
