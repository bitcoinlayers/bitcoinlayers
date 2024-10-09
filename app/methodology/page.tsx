import styles from "../../components/styles/methodology.module.css";
import { useTranslations } from "next-intl";

const Methodology: React.FC = () => {
    const t = useTranslations("methodology");
    const InfoBox: React.FC<{ title: string; body: string }> = ({
        title,
        body,
    }) => {
        return (
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-light text-zinc-800 leading-9">
                        {title}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8 w-full">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <div
                            className={`text-base font-normal text-slate-500 leading-normal ${styles["custom-ul"]}`}
                            dangerouslySetInnerHTML={{ __html: body }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const bridgeCustodyBody = `
    <ul>
        <li>${t("green-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("users-can-unilaterally-exit-with-an")}</li>
                <li>${t("anyone-can-ensure-the-integrity-of-a-bridge-with-a-fault-proof")}</li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("the-two-way-peg-is-overcollateralized")}</li>
                <li>${t("the-layer-relies-on-a-federated")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
            <ul>
                <li>${t("the-two-way-peg-is-managed-by")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>${t("the-two-way-peg-does-not-meet-the-requirements-for-red")}</li>
            </ul>
        </li>
        <br />
        <li>${t("additional-considerations")}</li>
        <ul>
                <li>${t("layers-that-settle-to-a-parent-blockchain")}</li>
                <li>${t("due-to-complexities-related-to-federated")}</li>
                <li>${t("additional-situations-can-be")}</li>
            </ul>
        </li>
    </ul>
`;

    const dataAvailabilityBody = `
<ul>
        <li>${t("green-must-match")}</li>
        <ul>
                <li>${t("all-data-needed-to-reconstruct")}</li>
                <li>${t("data-is-self-hosted-by-default")}/li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match")}</li>
        <ul>
                <li>${t("data-is-made-available-by-an-alternative-consensus")}</li>
                <li>${t("data-is-stored-via-an-offchain-committee")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("data-is-stored-via-an-offchain-committee-with-at-least-5-actors-attesting")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>${t("none-of-the-requirements-for-red-are-met")}</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const networkOperatorsBody = `
<ul>
        <li>${t("green-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("users-can-self-sequence-their-own-transactions")}</li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("the-validator-node-software-is-open")}</li>
                <li>${t("the-layer-is-merge-mined-with-bitcoin")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("the-layer-is-operated-by-a-validator")}</li>
                <li>${t("anyone-can-ensure-the-integrity")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>{t('doesnt-meet-the-criteria-for-any-other-rating-in-this-section')}</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const settlementAssuranceBody = `
    <ul>
        <li>${t("green-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("settlement-happens-onchain-and")}</li>
                <li>${t("settlement-happens-onchain-optimistically")}</li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match")}</li>
        <ul>
                <li>${t("settlement-guarantees-come-from")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("requirements-for-yellow-are-not-met")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>${t("layer-does-not-have-an-active")}</li>
            </ul>
            </li>
        <br />
        <li>${t("additional-considerations")}</li>
        <ul>
                <li>${t("if-all-transactions-are-finalized-offchain-and-the")}</li>
                </ul>
        </li>
        </ul>
`;

    const additionalQuestionsBody = `
    <ul>
    <ul>
        <li>${t("in-addition-to-performing-this-assessment")}</li>
        <ul>
                <li>${t("if-the-protocol-inherits-security-from-bitcoin")}</li>
                <li>${t("if-the-protocol-needs-an-alternative-token-to-function")}</li>
                <li>${t("if-the-protocol-introduces-mev-to-bitcoin")}</li>
                <li>${t("if-the-protocol-contributes-to-bitcoins-security-budget")}</li>
            </ul>
            </li>
        </ul>
        <li>${t("we-also-cover-areas-related-to-various-technologies-used-and-potential-use-cases")}</li>
    </ul>
`;

    const additionalContextBody = `
    <p>${t("some-context-related-to-risks-with-certain")}</p>
`;

    const criticalRiskAcknowledgementBody = `
    <p>${t("if-we-cannot-verify-a-specific-category")}</p>
`;

    const summaryBody = `
    <p>${t("this-framework-can-be-easier")}</p>
    <br />
    <p>${t("this-risk-assessment-is-an-initial")}</p>
    <br />
    <p>${t("bitcoin-does-not-have-a-unified-scaling")}</p>
    <br />
    <p>${t("if-you-have-comments-on-this-framework-please-consider-joining")}</p>
`;

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow sm:h-20 text-6xl lg:text-10xl text_table_important">
                            {t("approach-to-analyzing-layers")}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                                <div className="flex flex-col gap-3 cursor-pointer">
                                    <div className="text-xl font-light text-zinc-800 leading-9">
                                        {t(
                                            "this-is-the-framework-we-use-to-analyze-sidechains",
                                        )}
                                    </div>
                                    <div className="text-base font-normal text-slate-500 leading-normal">
                                        {t(
                                            "the-bitcoin-layers-risk-assessment",
                                        )}
                                        <br />
                                        <br />{" "}
                                        {t(
                                            "this-assessment-is-not-reflective-of-l2",
                                        )}{" "}
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <InfoBox
                                title={t("bridge-custody")}
                                body={bridgeCustodyBody}
                            />
                            <InfoBox
                                title={t("data-availability")}
                                body={dataAvailabilityBody}
                            />
                            <InfoBox
                                title={t("network-operators")}
                                body={networkOperatorsBody}
                            />
                            <InfoBox
                                title={t("settlement-assurance")}
                                body={settlementAssuranceBody}
                            />
                            <InfoBox
                                title={t("additional-questions")}
                                body={additionalQuestionsBody}
                            />
                            <InfoBox
                                title={t("additional-context")}
                                body={additionalContextBody}
                            />
                            <InfoBox
                                title={t("critical-risk-acknowledgement")}
                                body={criticalRiskAcknowledgementBody}
                            />
                            <InfoBox title={t("summary")} body={summaryBody} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Methodology;
