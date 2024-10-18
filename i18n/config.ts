export type Locale = (typeof locales)[number];

import { LOCALES } from "@/enums/locale.enums";

export const locales = Object.values(LOCALES);
export const defaultLocale: Locale = LOCALES.en;
