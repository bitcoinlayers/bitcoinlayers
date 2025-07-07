"use client";

import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

const ComingSoon: React.FC = () => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <span className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                    Coming soon
                </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="space-y-2">
                    <p className="text-sm">
                        Our team is working on adding this data to the database.
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default ComingSoon; 