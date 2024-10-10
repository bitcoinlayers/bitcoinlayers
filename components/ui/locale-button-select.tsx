"use client";

import { LOCALES } from "@/enums/locale.enums";
import { useEffect, useState, useTransition } from "react";
import { setUserLocale } from "@/i18n/service";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { Spinner } from "./spinner";

type Props = {
    items: { label: string; value: LOCALES }[];
    defaultValue: LOCALES;
};

export const LocaleButtonSelect = ({ defaultValue, items }: Props) => {
    const [isPending, startTransition] = useTransition();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                {isMounted ? <SelectValue /> : <Spinner />}
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
