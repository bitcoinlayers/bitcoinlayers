import { Control } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormDescription,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { renderLabel } from "@/components/submission/form-helpers";

interface FeaturesFormProps {
    control: Control<any>;
}

export default function FeaturesForm({ control }: FeaturesFormProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Staking field */}
            <FormField
                control={control}
                name="staking"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="text-white"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            {renderLabel("Staking", false)}
                            <FormDescription>
                                Does this project support staking?
                            </FormDescription>
                        </div>
                    </FormItem>
                )}
            />
            {/* Bridge field */}
            <FormField
                control={control}
                name="bridge"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="text-white"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            {renderLabel("Bridge", false)}
                            <FormDescription>
                                Does this project have a bridge?
                            </FormDescription>
                        </div>
                    </FormItem>
                )}
            />
            {/* Under Review field */}
            <FormField
                control={control}
                name="underReview"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="text-white"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            {renderLabel("Under Review", false)}
                            <FormDescription>
                                Is this project currently under review?
                            </FormDescription>
                        </div>
                    </FormItem>
                )}
            />
            {/* Bitcoin Only field */}
            <FormField
                control={control}
                name="bitcoinOnly"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="text-white"
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            {renderLabel("Bitcoin Only", false)}
                            <FormDescription>
                                Is this project Bitcoin only?
                            </FormDescription>
                        </div>
                    </FormItem>
                )}
            />
        </div>
    );
}
