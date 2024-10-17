import { Infrastructure } from "@/components/infrastructure/infrastructureProps";
import { getUserLocale } from "@/i18n/service";

// HACK: despite of all of the types below has ".../en..."
// they're still suitable for any locales
type LayersType = typeof import("@/i18n/messages/en/layers");
type InfrastructureType = typeof import("@/i18n/messages/en/infrastructures");
type OpcodeTypes = typeof import("@/i18n/messages/en/opcodes");

export async function getAllInfrastructure(): Promise<InfrastructureType> {
    const locale = await getUserLocale();
    return import(`@/i18n/messages/${locale}/infrastructures`);
}

export async function getAllOpcodesWithSlug(): Promise<OpcodeTypes> {
    const locale = await getUserLocale();
    return import(`@/i18n/messages/${locale}/opcodes`);
}

export async function getAllLayersWithSlugs(): Promise<LayersType> {
    const locale = await getUserLocale();
    return import(`@/i18n/messages/${locale}/layers`);
}

export async function getAllEcash(): Promise<Infrastructure[]> {
    const locale = await getUserLocale();
    const cashu: Infrastructure = await import(
        `@/i18n/messages/${locale}/infrastructures/cashu.json`
    );
    const fedimint: Infrastructure = await import(
        `@/i18n/messages/${locale}/infrastructures/fedimint.json`
    );
    return [cashu, fedimint];
}

export const getallEcashSlugs = async (): Promise<string[]> => {
    const allEcash: Infrastructure[] = await getAllEcash();
    return allEcash.map((infrastructure) => {
        if (!infrastructure.slug) {
            throw new Error("No slugs!");
        }
        return infrastructure.slug;
    });
};
