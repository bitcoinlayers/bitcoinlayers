import { notFound } from "next/navigation";
import {
    allOpcodes,
    allOpcodesSlugs,
} from "@/util/opcode_index";
import OpcodeMenu from "@/components/infrastructure/OpcodeMenu";
import OpcodeBody from "@/components/opcodes/opcodeBody";
import InfrastructureImage from "@/components/infrastructure/infrastructure-image";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import OpcodeOverview from "@/components/opcodes/opcodeOverview";
import UnderDevelopmentBanner from "@/components/opcodes/underdevelopmentbanner";
import OpcodeSupportChart from "@/components/charts/aggregated-opcode-chart";

async function getInfrastructureFromSlug(slug: string) {
    const infrastructure = allOpcodes.find(
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
                        <OpcodeMenu infrastructure={infrastructure} />
                    </div>
                    <div className="lg:w-4/5 flex flex-col px-4 lg:px-0">
                        <OpcodeOverview
                            infrastructure={infrastructure}
                        />
                        <div className="mb-7">
                        <OpcodeSupportChart defaultOpcode={infrastructure.slug} />
                        </div>
                        {infrastructure.assessment && (
                            <RiskAnalysis
                                riskAnalysis={infrastructure.assessment}
                                riskFactors={infrastructure.riskFactors}
                                infrastructure={infrastructure}
                            />
                        )}
                        <OpcodeBody infrastructure={infrastructure} />
                    </div>
                </div>
            </article>
        </>
    );
}

export async function generateStaticParams() {
    return allOpcodesSlugs.map((slug) => ({
        slug,
    }));
}
