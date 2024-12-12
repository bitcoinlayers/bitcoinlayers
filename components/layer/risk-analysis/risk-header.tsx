import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";

interface RiskHeaderProps {
    category: string;
    riskFactor: string;
    pegs?: { name: string }[];
    selectedPeg?: string;
    onPegChange?: (peg: string) => void;
}

const RiskHeader: React.FC<RiskHeaderProps> = ({
    category,
    riskFactor,
    pegs,
    selectedPeg,
    onPegChange,
}) => (
    <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
        <div className="body_risksection !text-foreground">
            {category}
            {pegs && pegs.length > 0 && onPegChange && (
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
                    color: getRiskColorText(riskFactor),
                }}
            >
                {riskFactor}
            </div>
            <div className="w-8 h-8 justify-center items-center flex">
                <div
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
                </div>
            </div>
        </div>
    </div>
);

export default RiskHeader;
