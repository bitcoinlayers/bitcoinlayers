import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import CountUp from "react-countup";

interface StatCardProps {
    title: string;
    subtitle: string;
    value?: string;
    change?: number;
    symbol?: ReactNode;
    isComingSoon?: boolean;
}

const StatCard = ({
    title,
    subtitle,
    value,
    change,
    symbol,
    isComingSoon,
}: StatCardProps) => {
    const numericValue = value
        ? parseFloat(value.replace(/[^0-9.-]+/g, ""))
        : 0;
    return (
        <Card className="bg-backgro">
            <CardContent className="p-4">
                <div className="flex justify-between items-baseline">
                    <div className="space-y-0.5">
                        <h3 className="text-base font-medium">{title}</h3>
                        <p className="text-xs text-muted-foreground">
                            {subtitle}
                        </p>
                    </div>
                    {symbol && (
                        <span className="text-sm font-medium">{symbol}</span>
                    )}
                </div>
                <div className="mt-4">
                    <div className="text-2xl font-bold">
                        {isComingSoon ? (
                            "Coming soon"
                        ) : (
                            <CountUp
                                start={0}
                                end={numericValue}
                                duration={1.25}
                                separator=","
                                decimal="."
                                decimals={2}
                                prefix={undefined}
                            />
                        )}
                    </div>
                    {change !== undefined && (
                        <div className="flex items-center mt-1">
                            <span
                                className={`text-sm font-medium ${change >= 0 ? "text-emerald-600" : "text-red-600"}`}
                            >
                                {change >= 0 ? "+" : ""}
                                {change}%
                            </span>
                            <span className="text-xs text-muted-foreground ml-1">
                                from last month
                            </span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default StatCard;
