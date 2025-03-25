import InfoCardOpcode from "./info-card-opcode";

export default function InfoCardGridOpcode() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCardOpcode
                title="Economic nodes"
                subtitle="Review how proposals"
                description="affect your business"
                href="/methodology"
            />
            <InfoCardOpcode
                title="Miners"
                subtitle="Review how proposals"
                description="with other layer enjoyers"
                href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                isExternal
            />
            <InfoCardOpcode
                title="Developers"
                subtitle="Review how proposals"
                description="impact the application layer"
                href="https://www.lxresearch.co"
                isExternal
            />
            <InfoCardOpcode
                title="Research & media"
                subtitle="Review how proposals"
                description="from our R&D team"
                href="https://www.lxresearch.co"
                isExternal
            />
        </div>
    );
}