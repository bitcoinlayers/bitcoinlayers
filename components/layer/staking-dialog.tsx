import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import StakingDialogBody from "./staking-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function StakingDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/bitcoin-staking-icon.svg" 
                    alt="Bitcoin Staking Supported" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <StakingDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 