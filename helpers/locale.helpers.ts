import { getUserLocale } from "@/services/locale";

type LayersType = typeof import("@/i18n/en/layer_index");
type ChartDataType =
    typeof import("@/messages/en/layers/bob_total_supply.json");
type InfrastructureType = typeof import("@/i18n/en/infrastructure_index");
type OpcodeTypes = typeof import("@/i18n/en/opcode_index");

export async function getAllInfrastructure(): Promise<InfrastructureType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/infrastructure_index`);
}

export async function getAllOpcodesWithSlug(): Promise<OpcodeTypes> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/opcode_index`);
}

export async function getAllLayersWithSlugs(): Promise<LayersType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/layer_index`);
}

export async function getChartData(): Promise<ChartDataType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/layers/bob_total_supply.json`);
}
