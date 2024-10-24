import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";

const RiskHeader: React.FC<{ category: string; riskFactor: string }> = ({
    category,
    riskFactor,
}) => (
    <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
        <div className="body_risksection">{category}</div>
        <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
            {/* <div
                className="text-sm font-medium leading-tight"
                style={{
                    color: getRiskColorText(riskFactor),
                }}
            >
                {riskFactor} risk
            </div> */}
            <div className="w-8 h-8 justify-center items-center flex">
                {/* <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                        backgroundColor: getRiskColorBackground(riskFactor),
                    }}
                >
                    <div
                        className="text-center text-base font-bold font-Hack"
                        style={{
                            color: getRiskColorText(riskFactor),
                        }}
                    >
                        {getRiskEmoji(riskFactor)}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
);

export default RiskHeader;
