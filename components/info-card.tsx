import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BitcoinIcon, ExternalLinkIcon } from "lucide-react";

interface Props {
    title: string;
    subtitle: string;
    description: string;
    href: string;
    isExternal?: boolean;
}

export default function InfoCard({
    title,
    subtitle,
    description,
    href,
    isExternal,
}: Props) {
    return (
        <Link href={href} target={isExternal ? "_blank" : undefined}>
            <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1.5">
                            <div>
                                <p className="text-base font-medium">
                                    {subtitle}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">
                                    {title}
                                </h3>
                                {isExternal && (
                                    <ExternalLinkIcon className="h-4 ml-1.5" />
                                )}
                            </div>
                        </div>
                        <BitcoinIcon className="h-4" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
