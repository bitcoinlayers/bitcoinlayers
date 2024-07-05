import React, { useState } from "react";
import Image from "next/image";
import { Layer } from "@/components/layer/layerProps";

interface RiskProps {
    layer: Layer;
}

const getRiskColorFont = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return "text-text_risk_low";
        case "Medium":
            return "text-text_risk_medium";
        case "High":
            return "text-text_risk_high";
        case "Critical":
            return "text-text_risk_critical";
        default:
            return "text-text_secondary";
    }
};

const getRiskColorClass = (riskFactor: string) => {
    switch (riskFactor) {
        case "Low":
            return {
                bg: "bg-bg_low",
                fill: "#52C41A",
            };
        case "Medium":
            return {
                bg: "bg-bg_medium",
                fill: "#F4CD00",
            };
        case "High":
            return {
                bg: "bg-bg_high",
                fill: "#FF4D4F",
            };
        case "Critical":
            return {
                bg: "bg-bg_critical",
                fill: "#FF4D4F",
            };
        default:
            return {
                bg: "bg-lightsecondary",
                fill: "icon_tertiary",
            };
    }
};

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = layer.riskAnalysis;
    const [hovered, setHovered] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setHoverPosition({ top, left: left + width });
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const RiskBridge = ({ riskFactor }: { riskFactor: string }) => {
        const riskColor = getRiskColorClass(riskFactor);
        return (
            <div
                className={`w-6 h-6 p-[4px] ${riskColor.bg} rounded-full justify-center items-center flex`}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 relative"
                    style={{
                        fill: riskColor.fill,
                    }}
                >
                    <g id="Group">
                        <g id="Group_2">
                            <g id="XMLID_1_">
                                <path
                                    id="Vector"
                                    d="M14.6996 5.68623L8.63597 10.8725V8.03492C8.63597 7.89676 8.52851 7.77986 8.39035 7.77986L7.70468 7.76392C6.72734 7.72141 5.77047 7.82768 4.86477 8.08806C3.04313 8.646 1.66667 9.69281 0.5 11.441V10.6387C0.505117 10.6121 0.510234 10.5802 0.515351 10.543C0.515351 9.74595 0.658626 8.90638 0.919591 8.13057C1.85599 5.42055 4.39401 3.61387 7.24415 3.61387H7.27997H8.38012C8.51828 3.61387 8.62573 3.49696 8.62573 3.35881V0.5L14.6996 5.68623Z"
                                />
                                <path
                                    id="Vector_2"
                                    d="M21.5001 10.5747V11.3824C21.4899 11.409 21.4848 11.4409 21.4848 11.4727C21.4848 12.2698 21.3415 13.1094 21.0805 13.8852C20.1441 16.5952 17.6061 18.4019 14.756 18.4019C14.7457 18.4019 14.7304 18.4019 14.7201 18.4019H13.62C13.4818 18.4019 13.3693 18.5188 13.3693 18.6623V21.4998L7.30566 16.3189L13.3641 11.138V13.9755C13.3641 14.1137 13.4716 14.2306 13.6098 14.2359L14.2954 14.2518C15.2728 14.2943 16.2296 14.1881 17.1353 13.9277C18.957 13.3644 20.3283 12.3229 21.5001 10.5747Z"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    };
    const RiskDA = ({ riskFactor }: { riskFactor: string }) => {
        const riskColor = getRiskColorClass(riskFactor);
        return (
            <div
                className={`w-6 h-6 p-1 ${riskColor.bg} rounded-full justify-center items-center flex`}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 relative flex-col justify-start items-start flex"
                    style={{
                        fill: riskColor.fill,
                    }}
                >
                    <g
                        id="Type=Data Avaiability"
                        clipPath="url(#clip0_465_103978)"
                    >
                        <g id="Vector">
                            <path d="M17.1431 10.2305H6.85735C6.73949 10.2305 6.64306 10.3269 6.64306 10.4448V21.2127C6.64306 21.3305 6.73949 21.4269 6.85735 21.4269H17.1431C17.2609 21.4269 17.3573 21.3305 17.3573 21.2127V10.4448C17.3573 10.3269 17.2609 10.2305 17.1431 10.2305ZM8.35735 11.9448H15.6431V15.0787H8.35735V11.9448ZM15.6431 19.7127H8.35735V16.5787H15.6431V19.7127Z" />
                            <path d="M9.64306 18.3165C9.64306 18.5439 9.73337 18.7619 9.89411 18.9226C10.0549 19.0834 10.2729 19.1737 10.5002 19.1737C10.7275 19.1737 10.9456 19.0834 11.1063 18.9226C11.267 18.7619 11.3573 18.5439 11.3573 18.3165C11.3573 18.0892 11.267 17.8712 11.1063 17.7105C10.9456 17.5497 10.7275 17.4594 10.5002 17.4594C10.2729 17.4594 10.0549 17.5497 9.89411 17.7105C9.73337 17.8712 9.64306 18.0892 9.64306 18.3165ZM9.64306 13.5487C9.64306 13.776 9.73337 13.994 9.89411 14.1548C10.0549 14.3155 10.2729 14.4058 10.5002 14.4058C10.7275 14.4058 10.9456 14.3155 11.1063 14.1548C11.267 13.994 11.3573 13.776 11.3573 13.5487C11.3573 13.3214 11.267 13.1033 11.1063 12.9426C10.9456 12.7819 10.7275 12.6915 10.5002 12.6915C10.2729 12.6915 10.0549 12.7819 9.89411 12.9426C9.73337 13.1033 9.64306 13.3214 9.64306 13.5487Z" />
                            <path d="M20.0197 8.16697C18.7929 4.92857 15.667 2.625 12.0054 2.625C8.34383 2.625 5.21794 4.92589 3.99115 8.16429C1.6849 8.77232 -0.0133142 10.8804 7.86628e-05 13.3821C0.0161501 16.1786 2.18579 18.4527 4.91794 18.6964C5.04383 18.7071 5.15097 18.608 5.15097 18.4821V16.8643C5.15097 16.7571 5.07061 16.6661 4.96347 16.6527C4.24026 16.5616 3.55722 16.2455 3.03222 15.7286C2.38936 15.0991 2.03579 14.2527 2.03579 13.3554C2.03579 12.6054 2.27954 11.8982 2.73758 11.3089C3.1849 10.7357 3.81436 10.3205 4.50811 10.1384L5.52329 9.87054L5.89561 8.8875C6.12597 8.27679 6.4474 7.70357 6.85186 7.18661C7.25097 6.67232 7.72508 6.22232 8.25544 5.84732C9.35633 5.07321 10.6528 4.66339 12.0054 4.66339C13.3581 4.66339 14.6545 5.07321 15.7554 5.85C16.2885 6.225 16.7599 6.675 17.159 7.18929C17.5635 7.70625 17.8849 8.27946 18.1153 8.89018L18.4849 9.87054L19.4974 10.1384C20.9492 10.5241 21.9644 11.8446 21.9644 13.3527C21.9644 14.2527 21.6108 15.0964 20.9679 15.7259C20.4456 16.2402 19.7653 16.5589 19.042 16.65C18.9349 16.6634 18.8572 16.7545 18.8572 16.8616V18.4821C18.8572 18.608 18.967 18.7071 19.0929 18.6964C21.817 18.45 23.9813 16.1786 24.0001 13.3875C24.0161 10.8857 22.3206 8.77768 20.0197 8.16697Z" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_465_103978">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        );
    };
    const RiskOperators = ({ riskFactor }: { riskFactor: string }) => {
        const riskColor = getRiskColorClass(riskFactor);
        return (
            <div
                className={`w-6 h-6 px-1.5 py-[5px] ${riskColor.bg} rounded-full justify-center items-center flex`}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 relative flex-col justify-start items-start flex"
                    style={{
                        fill: riskColor.fill,
                    }}
                >
                    <path
                        id="Vector"
                        d="M14.4992 12.9688L16.8663 13.4452C16.8908 14.6224 17.852 15.5566 19.013 15.5318C20.1741 15.5069 21.0955 14.5323 21.0709 13.3551C21.0464 12.1778 20.0853 11.2436 18.9242 11.2685C18.1088 11.2859 17.3769 11.7799 17.0463 12.5359L14.6178 12.0472C14.6153 11.1461 14.2694 10.2809 13.6525 9.63226L16.7958 5.12992C18.1216 5.76912 19.7074 5.1975 20.3378 3.8532C20.9682 2.50889 20.4044 0.900977 19.0786 0.261776C17.7528 -0.377425 16.167 0.194193 15.5366 1.5385C15.0554 2.56471 15.2605 3.78666 16.0496 4.59354L12.9367 9.05236C11.5051 8.18056 9.66326 8.47355 8.56365 9.7479L4.47692 6.52981C5.01335 5.48285 4.6112 4.19314 3.57864 3.64923C2.54608 3.10532 1.27412 3.51308 0.737691 4.56004C0.201262 5.607 0.603412 6.89671 1.63597 7.44062C2.3615 7.82282 3.2396 7.74492 3.88858 7.24077L8.05414 10.5209C7.362 11.9547 7.71476 13.6817 8.9116 14.7188L6.38009 18.348C5.03987 17.5233 3.29402 17.9564 2.48069 19.3153C1.66735 20.6743 2.09448 22.4445 3.43476 23.2691C4.77497 24.0938 6.52082 23.6607 7.33416 22.3018C7.96622 21.2456 7.86315 19.8983 7.07795 18.9537L9.67778 15.2256C10.5673 15.6544 11.5949 15.6778 12.5025 15.2899L15.5872 19.9104C14.68 20.883 14.7221 22.4172 15.6813 23.3371C16.6406 24.257 18.1536 24.2143 19.0609 23.2417C19.9681 22.2691 19.926 20.7349 18.9668 19.815C18.2595 19.1366 17.2172 18.961 16.3315 19.3709L13.2912 14.8169C13.88 14.3492 14.3038 13.7009 14.4992 12.9688Z"
                    />
                </svg>
            </div>
        );
    };
    const RiskSettlement = ({ riskFactor }: { riskFactor: string }) => {
        const riskColor = getRiskColorClass(riskFactor);
        return (
            <div
                className={`w-6 h-6 p-[5.50px] ${riskColor.bg} rounded-full justify-center items-center flex`}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-[13px] h-[13px] relative"
                    style={{
                        fill: riskColor.fill,
                    }}
                >
                    <g id="Group">
                        <path
                            id="Vector"
                            d="M17.8659 21.3311H17.1908C13.3418 21.3311 5.22055 21.3311 1.36949 21.3311C0.613131 21.3311 0 21.9285 0 22.6656C0 23.4026 0.613131 24.0001 1.36949 24.0001H17.8659C18.6222 24.0001 19.2354 23.4026 19.2354 22.6656C19.2354 21.9285 18.6222 21.3311 17.8659 21.3311Z"
                        />
                        <path
                            id="Vector_2"
                            d="M17.1252 19.0627C17.1252 18.5088 16.6642 18.0596 16.0957 18.0596H3.1393C2.57081 18.0596 2.10986 18.5088 2.10986 19.0627V20.5825H17.1252L17.1252 19.0627Z"
                        />
                        <path
                            id="Vector_3"
                            d="M23.4735 15.9814L18.3801 11.0217C17.8884 10.5426 17.1855 10.3966 16.5632 10.5838L15.3478 9.3966C16.0659 8.59807 16.6402 7.75282 17.048 6.91625L12.1312 2.125C11.0557 2.62285 9.9648 3.37148 8.97376 4.33722C7.98272 5.30295 7.21448 6.36976 6.70361 7.41784L11.6165 12.2053C12.4749 11.8081 13.3446 11.2485 14.165 10.5488L15.3839 11.7367C15.3302 11.9088 15.3033 12.0848 15.3033 12.2645C15.3033 12.7136 15.4761 13.1628 15.8295 13.5034L20.923 18.4669C21.6259 19.1519 22.7668 19.1519 23.4735 18.4669C24.1749 17.7909 24.1756 16.6581 23.4735 15.9814Z"
                        />
                        <path
                            id="Vector_4"
                            d="M17.6232 6.41756C17.9905 6.7755 18.586 6.7755 18.9533 6.41756C19.3206 6.05963 19.3206 5.47928 18.9533 5.12134L13.9734 0.268453C13.606 -0.0894842 13.0105 -0.0894842 12.6432 0.268453C12.2758 0.626412 12.2758 1.20676 12.6432 1.56469L17.6232 6.41756Z"
                        />
                        <path
                            id="Vector_5"
                            d="M9.77551 14.064C10.1428 14.422 10.7384 14.422 11.1057 14.064C11.473 13.7061 11.473 13.1258 11.1057 12.7678L6.1257 7.91494C5.75838 7.557 5.16284 7.557 4.79553 7.91494C4.42821 8.2729 4.42819 8.85322 4.7955 9.21118L9.77551 14.064Z"
                        />
                    </g>
                </svg>
            </div>
        );
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-44 p-4 justify-start items-center gap-4 inline-flex">
                <RiskBridge riskFactor={riskLevels[0]?.tier} />
                <RiskDA riskFactor={riskLevels[1]?.tier} />
                <RiskOperators riskFactor={riskLevels[2]?.tier} />
                <RiskSettlement riskFactor={riskLevels[3]?.tier} />
            </div>
            {hovered && (
                <div
                    className="fixed mt-2 bg-white p-4 shadow-lg border border-stroke_tertiary rounded-lg z-50"
                    style={{
                        width: "500px",
                        top: `${hoverPosition.top}px`,
                        left: `${hoverPosition.left}px`,
                    }}
                >
                    <div className="mb-6 mt-2 font-bold border-b border-stroke_tertiary">
                        Risk Snapshot
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskBridge riskFactor={layer.riskFactors[0]} />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[0].category}:{" "}
                                <span
                                    className={getRiskColorFont(
                                        layer.riskFactors[0],
                                    )}
                                >
                                    {layer.riskFactors[0]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[0].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskDA riskFactor={layer.riskFactors[1]} />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[1].category}:{" "}
                                <span
                                    className={getRiskColorFont(
                                        layer.riskFactors[1],
                                    )}
                                >
                                    {layer.riskFactors[1]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[1].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskOperators riskFactor={layer.riskFactors[2]} />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[2].category}:{" "}
                                <span
                                    className={getRiskColorFont(
                                        layer.riskFactors[2],
                                    )}
                                >
                                    {layer.riskFactors[2]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[2].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-0 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskSettlement riskFactor={layer.riskFactors[3]} />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[3].category}:{" "}
                                <span
                                    className={getRiskColorFont(
                                        layer.riskFactors[3],
                                    )}
                                >
                                    {layer.riskFactors[3]}
                                </span>
                            </div>
                            <div className="mb-2">
                                {layer.riskAnalysis[3].title}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Risk;
