import Hero from "@/components/hero";
import OpcodeTable from "@/components/tables/opcodeTable";
import { getAllOpcodesWithSlug } from "@/i18n/helpers";

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
