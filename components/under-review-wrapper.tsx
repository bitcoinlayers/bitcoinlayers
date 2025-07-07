import React from "react";

interface UnderReviewWrapperProps {
    isUnderReview: boolean;
    children: React.ReactNode;
}

export default function UnderReviewWrapper({ 
    isUnderReview, 
    children 
}: UnderReviewWrapperProps) {
    if (!isUnderReview) {
        return <>{children}</>;
    }

    return (
        <div className="relative">
            {/* Blurred content */}
            <div className="filter blur-sm pointer-events-none select-none">
                {children}
            </div>
            
            {/* Overlay with message */}
            <div className="absolute inset-0 flex items-start justify-center bg-background/30 backdrop-blur-sm pt-8">
                <div className="bg-background border border-border rounded-lg px-6 py-4 shadow-lg max-w-md mx-4 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                        This project is under review
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        We are currently evaluating this project's technical implementation and categorization.
                    </p>
                </div>
            </div>
        </div>
    );
} 