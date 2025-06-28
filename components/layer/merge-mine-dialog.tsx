import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import MergeMineDialogBody from "./merge-mine-dialog-body";
import Image from "next/image";

interface Props {
    layer: LayerProject;
}

export default function MergeMineDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src="/merge-mine-icon.svg" 
                    alt="Merge-Mined with Bitcoin" 
                    width={18} 
                    height={18} 
                    className="cursor-pointer" 
                />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <MergeMineDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 