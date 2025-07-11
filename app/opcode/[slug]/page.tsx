import { notFound } from "next/navigation";
import {
    allOpcodes,
    allOpcodesSlugs,
} from "@/util/opcode_index";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import OpcodeBody from "@/components/opcodes/opcodeBody";
import InfrastructureImage from "@/components/infrastructure/infrastructure-image";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import OpcodeOverview from "@/components/opcodes/opcodeOverview";
import UnderDevelopmentBanner from "@/components/opcodes/underdevelopmentbanner";

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
                        <OpcodeOverview
                            infrastructure={infrastructure}
                        />
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
