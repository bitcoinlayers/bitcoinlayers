import React from "react";
import { useTranslations } from "next-intl";

const DocsPage: React.FC = () => {
    const t = useTranslations("docs");
    return (
        <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
            <h1>{t("title")}</h1>
            <p className="text-xl">{t("bitcoin-layers-docs")}</p>
            <hr />
            <p>
                {t("open-source-instructions-coming-soon")} <br /> <br /> <br />{" "}
                <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br />
            </p>
        </article>
    );
};

export default DocsPage;
