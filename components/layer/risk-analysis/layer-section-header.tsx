import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";

interface Peg {
    name: string;
    tier: string;
}

interface RiskHeaderProps {
    category: string;
    riskFactor: string;
    pegs?: Peg[];
    selectedPeg?: string;
    onPegChange?: (peg: string) => void;
    isBtcCustody?: boolean; // Flag to indicate if this is for BTC Custody
}

const RiskHeader: React.FC<RiskHeaderProps> = ({
    category,
    riskFactor,
    pegs,
    selectedPeg,
    onPegChange,
    isBtcCustody = false, // Defaults to false
}) => {
    // Use peg-specific riskFactor only for BTC Custody
    const displayedRiskFactor =
        isBtcCustody && selectedPeg
            ? pegs?.find((peg) => peg.name === selectedPeg)?.tier || "Unknown"
            : riskFactor;

    return (
        <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
            <div className="body_risksection !text-foreground">
                {category}
                {isBtcCustody && pegs && pegs.length > 0 && onPegChange && (
                    <select
                        className="ml-4 p-2 text-sm border border-border rounded-md bg-background text-foreground"
                        value={selectedPeg}
                        onChange={(e) => onPegChange(e.target.value)}
                    >
                        <option value="view-all">View All</option>
                        {pegs.map((peg) => (
                            <option key={peg.name} value={peg.name}>
                                {peg.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
                <div
                    className="text-sm font-medium leading-tight"
                    style={{
                        color: getRiskColorText(displayedRiskFactor),
                    }}
                >
                    {displayedRiskFactor}
                </div>
                <div className="w-8 h-8 justify-center items-center flex">
                    <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor:
                                getRiskColorBackground(displayedRiskFactor),
                        }}
                    >
                        <div
                            className="text-center text-base font-bold font-Hack"
                            style={{
                                color: getRiskColorText(displayedRiskFactor),
                            }}
                        >
                            {getRiskEmoji(displayedRiskFactor)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskHeader;
