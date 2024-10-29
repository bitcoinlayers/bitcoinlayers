import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { InfrastructureProject } from "@/content/props";
import AssessmentSnapshot from "./assessment-snapshot";

interface Props {
    infrastructure: InfrastructureProject;
}

export default function AssessmentSnapshotDialog({ infrastructure }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='text-white'>Hello</Button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <AssessmentSnapshot infrastructure={infrastructure} />
            </DialogContent>
        </Dialog>
    );
}
