const InfraRiskHeader: React.FC<{ category: string; riskFactor: string }> = ({
    category,
    riskFactor,
}) => (
    <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
        <div className="body_risksection !text-foreground">{category}</div>
        <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
            <div className="w-8 h-8 justify-center items-center flex"></div>
        </div>
    </div>
);

export default InfraRiskHeader;
