import { Card } from "@/components/ui/card";
import { SendIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    ctaText: string;
    url: string;
}

export default function CtaCard({ title, description, ctaText, url }: Props) {
    return (
        <Card className="flex flex-col sm:flex-row items-center justify-between bg-background">
            <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0 p-4">
                <div className="flex space-x-3">
                    <SendIcon className="h-5 w-5 mt-1 text-gray-600" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h2>
                    </div>
                </div>
                <p className="text-foreground text-sm md:text-base mt-1">
                    {description}
                </p>
            </div>
            <div className="bg-blue-50 h-24 w-full sm:w-1/3 flex flex-col justify-center items-center text-center">
                <Link
                    href={url}
                    className="text-primary text-2xl font-medium inline-flex items-center underline"
                >
                    {ctaText}
                </Link>
            </div>
        </Card>
    );
}
