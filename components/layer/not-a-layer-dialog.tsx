import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import NotALayerDialogBody from "./not-a-layer-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function NotALayerDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/not-a-layer-icon.svg" 
                    alt="Not a Bitcoin Layer" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <NotALayerDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 