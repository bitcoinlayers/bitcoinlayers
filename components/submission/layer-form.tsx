import { Control, useFieldArray } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage,
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
import { RiskCategory, RiskFactor } from "@/content/props";
import { renderLabel } from "@/components/submission/form-helpers";

interface LayerFormProps {
    control: Control<any>;
}

export default function LayerForm({ control }: LayerFormProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "riskAnalysis",
    });

    return (
        <>
            <FormField
                control={control}
                name="btcLocked"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("BTC Locked", true)}
                        <FormControl>
                            <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                }
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name="feeToken"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Fee Token", false)}
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div>
                <FormLabel>Risk Analysis</FormLabel>
                {fields.map((field, index) => (
                    <Card key={field.id} className="mt-4">
                        <CardHeader>
                            <CardTitle>Risk Analysis {index + 1}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FormField
                                control={control}
                                name={`riskAnalysis.${index}.category`}
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
                                                    RiskCategory,
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
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`riskAnalysis.${index}.score`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Score</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) =>
                                                    field.onChange(
                                                        Number(e.target.value),
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`riskAnalysis.${index}.tier`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tier</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || undefined}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a tier" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {Object.values(RiskFactor).map(
                                                    (factor) => (
                                                        <SelectItem
                                                            key={factor}
                                                            value={factor}
                                                        >
                                                            {factor}
                                                        </SelectItem>
                                                    ),
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`riskAnalysis.${index}.title`}
                                render={({ field }) => (
                                    <FormItem>
                                        {renderLabel("Title", false)}
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name={`riskAnalysis.${index}.content`}
                                render={({ field }) => (
                                    <FormItem>
                                        {renderLabel("Content", false)}
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                variant="destructive"
                                className="text-white mt-2"
                            >
                                Remove Risk Analysis
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
