import InfoCardOpcode from "./info-card-opcode";
import { BitcoinIcon, HandCoinsIcon, Pickaxe, Code } from "lucide-react";

export default function InfoCardGridOpcode() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCardOpcode
                title="Economic nodes"
                subtitle="Review how proposals"
                description="affect your business"
                href="/methodology"
                icon={HandCoinsIcon}
            />
            <InfoCardOpcode
                title="Miners"
                subtitle="Review how proposals"
                description="with other layer enjoyers"
                href="https://t.me/+8rv-1I2gkmQ4ZmJh"
                isExternal
                icon={Pickaxe}
            />
            <InfoCardOpcode
                title="Developers"
                subtitle="Review how proposals"
                description="impact the application layer"
                href="https://www.lxresearch.co"
                isExternal
                icon={Code}
            />
            <InfoCardOpcode
                title="Users"
                subtitle="Review how proposals"
                description="provide different use cases"
                href="https://www.lxresearch.co"
                isExternal
                icon={BitcoinIcon}
            />
        </div>
    );
}