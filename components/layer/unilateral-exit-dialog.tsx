import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import UnilateralExitDialogBody from "./unilateral-exit-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function UnilateralExitDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/unilateral-exit.svg" 
                    alt="Supports Unilateral Exit" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <UnilateralExitDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 