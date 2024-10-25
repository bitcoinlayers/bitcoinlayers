import { Control, useFieldArray } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface SectionsFormProps {
    control: Control<any>;
}

export default function SectionsForm({ control }: SectionsFormProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "sections",
    });

    return (
        <div>
            <FormLabel>Sections</FormLabel>
            {fields.map((field, index) => (
                <Card key={field.id} className="mt-4">
                    <CardHeader>
                        <CardTitle>Section {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={control}
                            name={`sections.${index}.id`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name={`sections.${index}.title`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name={`sections.${index}.content`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            value={field.value}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button
                            type="button"
                            onClick={() => remove(index)}
                            variant="destructive"
                            className="text-white mt-2"
                        >
                            Remove Section
                        </Button>
                    </CardContent>
                </Card>
            ))}
            <div>
                <Button
                    type="button"
                    variant="secondary"
                    onClick={() =>
                        append({
                            id: "",
                            title: "",
                            content: [{ content: "" }],
                        })
                    }
                    className="green text-white mt-2"
                >
                    <Plus className="text-green-600" />
                </Button>
            </div>
        </div>
    );
}
