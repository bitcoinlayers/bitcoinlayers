import InfoCardOpcode from "./info-card-opcode";
import { BitcoinIcon, HandCoinsIcon, Pickaxe, Code } from "lucide-react";

export default function InfoCardGridOpcode() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCardOpcode
                title="Economic nodes"
                subtitle="Review how proposals"
                description="affect your business"
                href="https://github.com/sCrypt-Inc/awesome-op-cat"
                icon={HandCoinsIcon}
            />
            <InfoCardOpcode
                title="Miners"
                subtitle="Review how proposals"
                description="with other layer enjoyers"
                href="https://github.com/sCrypt-Inc/awesome-op-cat"
                isExternal
                icon={Pickaxe}
            />
            <InfoCardOpcode
                title="Developers"
                subtitle="Review how proposals"
                description="impact the application layer"
                href="https://github.com/sCrypt-Inc/awesome-op-cat"
                isExternal
                icon={Code}
            />
            <InfoCardOpcode
                title="Users"
                subtitle="Review how proposals"
                description="provide different use cases"
                href="https://github.com/sCrypt-Inc/awesome-op-cat"
                isExternal
                icon={BitcoinIcon}
            />
        </div>
    );
}