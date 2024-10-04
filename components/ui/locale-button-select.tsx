"use client";

import { LOCALES } from "@/enums/locale.enums";
import { useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Props = {
    items: { label: string; value: LOCALES }[];
    defaultValue: LOCALES;
};

export const LocaleButtonSelect = ({ defaultValue, items }: Props) => {
    const [isPending, startTransition] = useTransition();
    const t = useTranslations("locale-button");

    const handleLanguageSelect = (value: LOCALES) => {
        startTransition(() => {
            setUserLocale(value);
        });
    };

    return (
        <Select
            defaultValue={defaultValue}
            onValueChange={handleLanguageSelect}
        >
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            className={clsx(
                                isPending && "pointer-events-none opacity-60",
                            )}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
