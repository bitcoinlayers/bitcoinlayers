import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BitcoinIcon, ExternalLinkIcon, HandCoinsIcon, Pickaxe, Code,  } from "lucide-react";
import type { LucideIcon } from "lucide-react"; // ⬅️ This is the missing piece

interface Props {
    title: string;
    subtitle: string;
    description: string;
    href: string;
    isExternal?: boolean;
    icon?: LucideIcon; // ⬅️ New prop
}

export default function InfoCardOpcode({
    title,
    subtitle,
    description,
    href,
    isExternal,
    icon: Icon = BitcoinIcon, // ⬅️ New line
}: Props) {
    return (
        <Link href={href} target={isExternal ? "_blank" : undefined}>
            <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">
                                    {title}
                                </h3>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    {subtitle}
                                </p>
                                <p className="text-base font-medium">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <Icon className="h-4" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}