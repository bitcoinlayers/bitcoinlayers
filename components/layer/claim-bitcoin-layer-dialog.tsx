import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import ClaimBitcoinLayerDialogBody from "./claim-bitcoin-layer-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function ClaimBitcoinLayerDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/btc-inverse.svg" 
                    alt="Claims to be Bitcoin Layer" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <ClaimBitcoinLayerDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 