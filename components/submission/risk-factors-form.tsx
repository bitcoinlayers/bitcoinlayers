import { Control } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RiskFactor } from "@/content/props";
import { renderLabel } from "@/components/submission/form-helpers";

interface RiskFactorsFormProps {
    control: Control<any>;
}

export default function RiskFactorsForm({ control }: RiskFactorsFormProps) {
    return (
        <FormField
            control={control}
            name="riskFactors"
            render={({ field }) => (
                <FormItem>
                    {renderLabel("Risk Factors", false)}
                    <FormControl>
                        <div className="space-y-2 w-full sm:w-1/2">
                            {[0, 1, 2, 3].map((index) => (
                                <Select
                                    key={index}
                                    onValueChange={(value) => {
                                        const updatedValue = Array.isArray(
                                            field.value,
                                        )
                                            ? [...field.value]
                                            : [];
                                        updatedValue[index] =
                                            value as RiskFactor;
                                        field.onChange(
                                            updatedValue.filter(Boolean),
                                        );
                                    }}
                                    value={
                                        Array.isArray(field.value)
                                            ? field.value[index] || ""
                                            : ""
                                    }
                                >
                                    <FormLabel>Risk {index + 1}</FormLabel>
                                    <FormControl className="!mb-2">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a risk factor" />
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
                            ))}
                        </div>
                    </FormControl>
                </FormItem>
            )}
        />
    );
}
