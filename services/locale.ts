"use server";

import { cookies } from "next/headers";
import { type Locale, defaultLocale } from "@/i18n/config";

// Cookie key
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
    return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    cookies().set(COOKIE_NAME, locale);
}
