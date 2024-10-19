import Hero from "@/components/hero";
import OpcodeTable from "@/components/tables/opcodeTable";
import { getAllOpcodesWithSlug } from "@/i18n/helpers";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const { allOpcodes } = await getAllOpcodesWithSlug();
    const t = await getTranslations("opcode");

    return (
        <div className="mx-auto">
            <Hero
                title={t("layers")}
                description={t("not-every-bitcoin-layer-is-made-equal")}
            />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <OpcodeTable data={allOpcodes} />
            </div>
        </div>
    );
}
