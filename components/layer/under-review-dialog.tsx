import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import UnderReviewDialogBody from "./under-review-dialog-body";
import { Info } from "lucide-react";

interface Props {
    layer: LayerProject;
}

export default function UnderReviewDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Info size={18} color="#FE4F18" className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <UnderReviewDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 