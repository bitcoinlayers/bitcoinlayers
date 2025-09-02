import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";
import OtherReasonBridgeDialogBody from "./other-reason-bridge-dialog-body";
import { AlertTriangle } from "lucide-react";

interface Props {
    layer: LayerProject;
}

export default function OtherReasonBridgeDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <AlertTriangle size={18} color="#ef4444" className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <OtherReasonBridgeDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
} 