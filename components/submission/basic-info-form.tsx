import { Control } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Type, EntityType, LiveStatus } from "@/content/props";
import { renderLabel } from "@/components/submission/form-helpers";

interface BasicInfoFormProps {
    control: Control<any>;
}

export default function BasicInfoForm({ control }: BasicInfoFormProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type field */}
            <FormField
                control={control}
                name="type"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Type", true)}
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(Type).map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Slug field */}
            <FormField
                control={control}
                name="slug"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Slug", true)}
                        <FormControl>
                            <Input
                                placeholder="project-slug"
                                {...field}
                                required
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Title field */}
            <FormField
                control={control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Title", true)}
                        <FormControl>
                            <Input
                                placeholder="Project Title"
                                {...field}
                                required
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Entity Type field */}
            <FormField
                control={control}
                name="entityType"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Entity Type", true)}
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an entity type" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(EntityType).map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Live Status field */}
            <FormField
                control={control}
                name="live"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Live Status", true)}
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            required
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select live status" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(LiveStatus).map((status) => (
                                    <SelectItem key={status} value={status}>
                                        {status}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* Native Token field */}
            <FormField
                control={control}
                name="nativeToken"
                render={({ field }) => (
                    <FormItem>
                        {renderLabel("Native Token", false)}
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
