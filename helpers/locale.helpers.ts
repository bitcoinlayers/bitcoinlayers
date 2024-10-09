import { LOCALES } from "@/enums/locale.enums";
import { getUserLocale } from "@/services/locale";

export async function getAllInfrastructure() {
    const locale = await getUserLocale();
    return locale === LOCALES.en
        ? await import("@/util/infrastructure_index_en")
        : await import("@/util/infrastructure_index_uk");
}

export async function getAllOpcodesWithSlug() {
    const locale = await getUserLocale();
    return locale === LOCALES.en
        ? await import("@/util/opcode_index_en")
        : await import("@/util/opcode_index_uk");
}
