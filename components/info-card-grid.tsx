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
                title="Community chats"
                subtitle="Join the discussion"
                description="with other layer enjoyers"
                href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                isExternal
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
