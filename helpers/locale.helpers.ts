import { getUserLocale } from "@/services/locale";

type LayersType = typeof import("@/messages/en/layers");
type ChartDataType =
    typeof import("@/messages/en/layers/bob_total_supply.json");
type InfrastructureType = typeof import("@/messages/en/infrastructures");
type OpcodeTypes = typeof import("@/messages/en/opcodes");

export async function getAllInfrastructure(): Promise<InfrastructureType> {
    const locale = await getUserLocale();
    return import(`@/messages/${locale}/infrastructures`);
}

export async function getAllOpcodesWithSlug(): Promise<OpcodeTypes> {
    const locale = await getUserLocale();
    return import(`@/messages/${locale}/opcodes`);
}

export async function getAllLayersWithSlugs(): Promise<LayersType> {
    const locale = await getUserLocale();
    return import(`@/messages/${locale}/layers`);
}

export async function getChartData(): Promise<ChartDataType> {
    const locale = await getUserLocale();
    return import(`@/messages/${locale}/layers/bob_total_supply.json`);
}
