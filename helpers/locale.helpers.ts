import { getUserLocale } from "@/services/locale";

type LayersType = typeof import("@/i18n/en/layer_index_en");
type ChartDataType =
    typeof import("@/messages/en/layers/bob_total_supply.json");
type InfrastructureType = typeof import("@/i18n/en/infrastructure_index_en");
type OpcodeTypes = typeof import("@/i18n/en/opcode_index_en");

export async function getAllInfrastructure(): Promise<InfrastructureType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/infrastructure_index_${locale}`);
}

export async function getAllOpcodesWithSlug() {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/opcode_index_${locale}`);
}

export async function getAllLayersWithSlugs(): Promise<LayersType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/layer_index_${locale}`);
}

export async function getChartData(): Promise<ChartDataType> {
    const locale = await getUserLocale();
    return import(`@/i18n/${locale}/layers/bob_total_supply.json`);
}
