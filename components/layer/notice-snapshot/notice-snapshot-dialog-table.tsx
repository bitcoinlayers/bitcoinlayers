import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { LayerProject } from "@/content/props";
import NoticeSnapshotDialogBody from "./notice-snapshot-dialog-body";

interface Props {
    layer: LayerProject;
}

export default function NoticeSnapshotDialog({ layer }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="brand" size="rounded" className="text-white">
                    View Snapshot
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <NoticeSnapshotDialogBody layer={layer} />
            </DialogContent>
        </Dialog>
    );
}
