import { FormLabel } from "@/components/ui/form";

export const renderLabel = (label: string, isRequired: boolean) => (
    <FormLabel>
        {label}
        {isRequired ? (
            <span className="text-red-500 ml-1">*</span>
        ) : (
            <span className="text-gray-500 text-sm ml-1">
                <sup>(optional)</sup>
            </span>
        )}
    </FormLabel>
);
