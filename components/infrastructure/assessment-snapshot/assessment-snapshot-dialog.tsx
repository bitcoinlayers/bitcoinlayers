import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { InfrastructureProject } from "@/content/props";
import AssessmentSnapshotDialogBody from "./assessment-snapshot-dialog-body";

interface Props {
    infrastructure: InfrastructureProject;
}

export default function AssessmentSnapshotDialog({ infrastructure }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-white">View Snapshot</Button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <AssessmentSnapshotDialogBody infrastructure={infrastructure} />
            </DialogContent>
        </Dialog>
    );
}
