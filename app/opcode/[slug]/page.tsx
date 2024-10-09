import { notFound } from "next/navigation";
import OpcodeMenu from "@/components/opcode/opcodeMenu";
import OpcodeBody from "@/components/opcode/opcodeBody";
import OpcodeOverview from "@/components/opcode/opcodeOverview";
import OpcodeImage from "@/components/opcode/opcode-image";
import { getAllOpcodesWithSlug } from "@/helpers/locale.helpers";

async function getOpcodeFromSlug(slug: string) {
    const { allOpcodes } = await getAllOpcodesWithSlug();
    const opcode = allOpcodes.find((opcode) => opcode.slug === slug);
    if (!opcode) {
        return null;
    }
    return opcode;
}

export default async function OpcodePage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const opcode = await getOpcodeFromSlug(slug);

    if (!opcode) {
        return notFound();
    }

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-24">
            <div className="flex justify-start items-center gap-8 my-12">
                <div className="flex justify-center items-center">
                    <OpcodeImage
                        title={opcode.title}
                        src={`/logos/${opcode.slug}.png`}
                    />
                    {/**TODO fix img sizes. they're blurry here */}
                </div>
                <div className="flex-grow flex items-center">
                    <h1 className="layer_header flex-grow">{opcode.title}</h1>
                </div>
            </div>
            <div className="container flex">
                <div className="w-1/5">
                    <OpcodeMenu opcode={opcode} />
                </div>
                <div className="w-4/5 flex flex-col">
                    <OpcodeOverview opcode={opcode} />
                    <OpcodeBody opcode={opcode} />
                </div>
            </div>
        </article>
    );
}
