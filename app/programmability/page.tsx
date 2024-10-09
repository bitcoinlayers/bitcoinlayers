import React from "react";
import { useTranslations } from "next-intl";

const ProgrammabilityPage: React.FC = () => {
    const t = useTranslations("programmability");
    return (
        <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
            <h1>{t("title")}</h1>
            <p className="text-xl">{t("base-layer-programmability")}</p>
            <hr />
            <p>
                {t("coming-soon-smart-contracts-bitvm-and-more")} <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br />
            </p>
        </article>
    );
};

export default ProgrammabilityPage;
