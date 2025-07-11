"use client";

import { Clock, FileText } from "lucide-react";

export default function ComingSoonTokenContracts() {
    return (
        <section
            id="tokencontracts"
            className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-center gap-4"
        >
            <div className="self-stretch justify-start items-start gap-4 mb-4">
                <div className="body_section !text-foreground">
                    Token Contracts
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center py-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <FileText className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                        Token Contracts Coming Soon
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                        We&apos;re working to integrate token contract data for this network. 
                        Contract addresses and details will be available once the integration is complete.
                    </p>
                </div>
            </div>
        </section>
    );
} 