import { LOCALES } from "@/enums/locale.enums";
import { useLocale, useTranslations } from "next-intl";
import { LocaleButtonSelect } from "./locale-button-select";

export const LocaleButton = () => {
    const locale = useLocale();
    const t = useTranslations("locale-button");

    const selectItems = [
        {
            label: t("en-label"),
            value: LOCALES.en,
        },
        {
            label: t("uk-label"),
            value: LOCALES.uk,
        },
    ];

    return (
        <LocaleButtonSelect
            items={selectItems}
            defaultValue={locale as LOCALES}
        />
    );
};
