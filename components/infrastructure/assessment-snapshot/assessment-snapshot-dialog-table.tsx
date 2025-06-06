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
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                >
                    View Snapshot
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <AssessmentSnapshotDialogBody infrastructure={infrastructure} />
            </DialogContent>
        </Dialog>
    );
}
