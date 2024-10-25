import { Control, useFieldArray } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Site } from "@/content/props";

interface LinksFormProps {
    control: Control<any>;
}

interface LinkField {
    id?: string;
    text: string;
    url: string;
}

export default function LinksForm({ control }: LinksFormProps) {
    const { fields, append, update, remove } = useFieldArray<{links: LinkField[]}>({
        control,
        name: "links",
    });

    return (
        <div>
            <FormLabel>Links</FormLabel>
            <div className="space-y-2">
                {(fields).map((field, index) => (
                    <div
                        key={field.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 my-4"
                    >
                        <div className="w-2/5">
                            <Select
                                onValueChange={(value) => {
                                    update(index, { ...field, text: value });
                                }}
                                value={field.text}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a site" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {Object.values(Site).map((site) => (
                                        <SelectItem key={site} value={site}>
                                            {site}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Input
                            {...control.register(`links.${index}.url`)}
                            placeholder="URL"
                            className="w-full sm:w-3/5"
                        />
                        <Button
                            type="button"
                            onClick={() => remove(index)}
                            variant="destructive"
                            className="w-auto"
                        >
                            Remove
                        </Button>
                    </div>
                ))}
            </div>
            <Button
                type="button"
                variant="secondary"
                onClick={() => append({ text: Site.Website, url: "" })}
                className="mt-2"
            >
                <Plus className="text-green-600" />
            </Button>
        </div>
    );
}
