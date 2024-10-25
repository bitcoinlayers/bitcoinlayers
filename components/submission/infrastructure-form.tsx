import { Control, useFieldArray } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import {
    Purpose,
    AssessmentCategory,
    RiskFactor,
    RiskCategory,
} from "@/content/props";

interface InfrastructureFormProps {
    control: Control<any>;
}

export default function InfrastructureForm({
    control,
}: InfrastructureFormProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "assessment",
    });

    return (
        <>
            <FormField
                control={control}
                name="purpose"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Purpose</FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a purpose" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(Purpose).map((purpose) => (
                                    <SelectItem key={purpose} value={purpose}>
                                        {purpose}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />

            <div>
                <FormLabel>Assessment</FormLabel>
                {fields.map((field, index) => (
                    <Card key={field.id} className="mt-4">
                        <CardHeader>
                            <CardTitle>Assessment {index + 1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={control}
                                name={`assessment.${index}.category`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(
                                                    AssessmentCategory,
                                                ).map((category) => (
                                                    <SelectItem
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`assessment.${index}.score`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Score</FormLabel>
                                        <Input
                                            type="number"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`assessment.${index}.tier`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tier</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a tier" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(RiskFactor).map(
                                                    (tier) => (
                                                        <SelectItem
                                                            key={tier}
                                                            value={tier}
                                                        >
                                                            {tier}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`assessment.${index}.title`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <Input
                                            type="text"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`assessment.${index}.content`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <Textarea
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>
                ))}
                <div>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() =>
                            append({
                                category: RiskCategory.BridgeSecurity,
                                score: 0,
                                tier: RiskFactor.Unverified,
                                title: "Title",
                                content: "Content",
                            })
                        }
                        className="green text-white mt-2"
                    >
                        <Plus className="text-green-600" />
                    </Button>
                </div>
            </div>
        </>
    );
}
