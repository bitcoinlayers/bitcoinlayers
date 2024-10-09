import Hero from "@/components/hero";
import OpcodeTable from "@/components/tables/opcodeTable";
import { getUserLocale } from "@/services/locale";
import { LOCALES } from "@/enums/locale.enums";

export async function getAllOpcodesWithSlug() {
    const locale = await getUserLocale();
    return locale === LOCALES.en
        ? await import("@/util/opcode_index_en")
        : await import("@/util/opcode_index_uk");
}

export default async function Home() {
    const { allOpcodes } = await getAllOpcodesWithSlug();
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <OpcodeTable data={allOpcodes} />
            </div>
        </div>
    );
}
