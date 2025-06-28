import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import HybridDialogBody from "./hybrid-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function HybridDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/hybrid-layer-icon.svg" 
                    alt="Hybrid Layer" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <HybridDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 