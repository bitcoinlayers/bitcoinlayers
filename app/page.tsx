"use client";

import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";
import OpcodeChart from "@/components/charts/opcode-chart";
import CtaCardOpcode from "@/components/cta-card-opcodes";

export default function Home() {
    const [view] = useQueryState("view", {
        defaultValue: "networks",
    });
    const [subView] = useQueryState("subview", {
        defaultValue: "applications",
    });
    
    // Prevent hydration mismatch by only rendering dynamic content after client hydration
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const isOpcodeView = view === "more" && subView === "opcodes";

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll={false} />
            
            {/* Regular chart for non-more views */}
            {isClient && view !== "more" && <ChartSwitch />}
            
            <TableSwitch />
            
            {/* Opcode chart - positioned below table, above CTA */}
            {isClient && isOpcodeView && (
                <div className="mb-8 max-w-5xl mx-auto">
                    <OpcodeChart />
                </div>
            )}
            
            {/* CTA section */}
            {isClient && (
                <>
                    {isOpcodeView ? <CtaCardOpcode /> : <CtaCard />}
                </>
            )}
            
            <InfoCardGrid />
        </div>
    );
}
