"use client";

import React from "react";
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
                <li>${t("users-can-contest-a-dispute-in-the-final-state-with-a-counterparty-and-claim-their-assets-on-the-l1")}</li>
                <li>${t("bitcoin-can-verify-changes-to-the-layers-state")}</li>
                <li>${t("the-bridge-is-managed-by-an-alternative-consensus")}</li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("the-bridge-is-managed-by-an-alternative-consensus-mechanism-that-is-financially-incentivized")}</li>
                <li>${t("the-bridge-is-managed-by-an-alternative-consensus-mechanism")}</li>
                <ul><li><i>${t("we-are-currently-considering-a-score-where-systems")}</i></li></ul>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
            <ul>
                <li>${t("the-bridge-is-managed-by-at-least-5-publicly-known")}</li>
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
                <li>${t("layers-that-settle-to-a-parent-blockchain-must-consider")}</li>
                <li>${t("due-to-complexities-related-to-federated-set-ups-we-will-additionally")}</li>
                <li>${t("additional-situations-can-be-added-to-this-framework-for-edge-cases-for-example-users-of-statechains-can-unilaterally-exit-with-a-bitcoin-l1-transaction-but-an-operator-can-steal-funds-by-colluding-with-the-past-owner-and-users-cannot-submit-a-challenge-transaction")}</li>
            </ul>
        </li>
        </ul>
`;

    const dataAvailabilityBody = `
<ul>
        <li>${t("green-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("all-data-needed-to-reconstruct-the-layers-state-lives")}</li>
                <li>${t("data-is-self-hosted-by-default-and-users-are-required")}/li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("data-is-made-available-by-an-alternative-consensus-protocol-")}</li>
                <li>${t("data-is-stored-via-an-offchain-committee-or-consensus")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("data-is-stored-via-an-offchain-committee-with-at-least-5")}</li>
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
                <li>${t("the-validator-aka-network-operator-node-software")}</li>
                <li>${t("the-layer-is-merge-mined-with-bitcoin-and-secured")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("the-layer-is-operated-by-a-validator-set-of-at-least")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>${t("doesnt-meet-the-criteria-for-any-other-rating-in-this-section")}</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const settlementAssuranceBody = `
    <ul>
        <li>${t("green-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("layers-consensus-is-constructed-in-a-way-that-operators-including-users-in-p2p-network-must-build-on-a-state-root-or-state-commitment-posted-to-bitcoin")}</li>
                <li>${t("layer-transactions-happen-atomically-and-cannot-reorg")}</li>
            </ul>
            </li>
        <br />
        <li>${t("yellow-must-match-one-of-the-following-conditions")}</li>
        <ul>
                <li>${t("settlement-guarantees-come-from-a-permissionless-alternative-consensus-network-operated-by-at-least-5-externally-publicly-known-operators")}</li>
            </ul>
            </li>
        <br />
        <li>${t("red")}</li>
        <ul>
                <li>${t("layer-finality-guarantees-come-from-a-federated-system")}</li>
            </ul>
            </li>
        <br />
        <li>${t("stop")}</li>
        <ul>
                <li>${t("none-of-the-requirements-for-red-are-met")}</li>
            </ul>
            </li>
        <br />
        <li>${t("additional-considerations")}</li>
        <ul>
                <li>${t("if-all-transactions-are-finalized-offchain-and-the-sidesystems")}</li>
                </ul>
        </li>
        </ul>
`;

    const additionalQuestionsBody = `
        <p>${t("in-addition-to-performing-this-assessment-we")}</p>
        <ul>
                <li>${t("if-the-protocol-inherits-security-from-bitcoin")}</li>
                <li>${t("if-the-protocol-needs-an-alternative-token-to-function")}</li>
                <li>${t("if-the-protocol-introduces-mev-to-bitcoin")}</li>
                <li>${t("if-the-protocol-contributes-to-bitcoins-security-budget")}</li>
            </ul>
        <p>${t("we-also-cover-areas-related-to-various-technologies-used-and-potential-use-cases")}</p>
`;

    const additionalContextBody = `
    <p>${t("some-context-related-to-risks-with-certain-protocols-")}</p>
`;

    const criticalRiskAcknowledgementBody = `
    <p>${t("if-we-cannot-verify-a-specific-category")}</p>
`;

    const summaryBody = `
    <p>${t("this-framework-can-be-easier-to-customize-and-provide")}</p>
    <br />
    <p>${t("this-risk-assessment-is-an-initial-starting-point-to")}</p>
    <br />
    <p>${t("bitcoin-does-not-have-a-unified-scaling-roadmap-there")}</p>
    <br />
    <p>${t("if-you-have-comments-on-this-framework-please")}</p>
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
                                            "this-is-the-framework-we-use-to-analyze-sidechains-l2s-and-other-scaling-protocols",
                                        )}
                                    </div>
                                    <div className="text-base font-normal text-slate-500 leading-normal">
                                        {t(
                                            "the-bitcoin-layers-risk-assessment-is-broken-down-into-four-sections-they-cover-bridge-security-data-availability-network-operators-and-settlement-assurance-finality-guarantees-the-assessments-also-include-more-granular-reviews-of-specific-areas-for-example-if-the-chain-uses-a-federated-two-way-peg-an-additional-assessment-on-the-security-related-to-that-peg-can-be-performed",
                                        )}
                                        <br />
                                        <br />{" "}
                                        {t(
                                            "this-assessment-is-not-reflective-of-l2-or-sidesystem",
                                        )}{" "}
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <InfoBox
                                title={t("bridge-security")}
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
                                title={t("finality-guarantees")}
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
