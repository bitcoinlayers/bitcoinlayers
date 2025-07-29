import InfoCard from "@/components/info-card";

export default function InfoCardGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
                title="Methodology"
                subtitle="Review the standards"
                description="we set for bitcoin layers"
                href="/methodology"
            />
            <InfoCard
                title="Compare layers"
                subtitle="Analyze the tradeoffs"
                description="for all systems"
                href="/peg"

            />
            <InfoCard
                title="Research & media"
                subtitle="Read the latest"
                description="from our R&D team"
                href="https://www.lxresearch.co"
                isExternal
            />
        </div>
    );
}
