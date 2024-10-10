import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/i18n/service";

export default getRequestConfig(async () => {
    const locale = await getUserLocale();

    return {
        locale,
        messages: (await import(`@/i18n/messages/${locale}/${locale}.json`))
            .default,
    };
});
