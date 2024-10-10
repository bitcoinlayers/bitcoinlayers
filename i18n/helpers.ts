import { getUserLocale } from "@/i18n/service";

// HACK: despite of all of the types below has ".../en..."
// they're still suitable for any locales
type LayersType = typeof import("@/i18n/messages/en/layers");
type ChartDataType =
    typeof import("@/i18n/messages/en/layers/bob_total_supply.json");
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

export async function getChartData(): Promise<ChartDataType> {
    const locale = await getUserLocale();
    return import(`@/i18n/messages/${locale}/layers/bob_total_supply.json`);
}
