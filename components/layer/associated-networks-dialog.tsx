import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { InfrastructureProject } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Image from "next/image";

// Import layer data to get descriptions
import { allLayers } from "@/util/layer_index";
import { LayerProject } from "@/content/props";

interface AssociatedNetworksDialogProps {
    application: InfrastructureProject;
}

const AssociatedNetworksDialog: React.FC<AssociatedNetworksDialogProps> = ({ application }) => {
    // Parse associated layers (could be comma-separated)
    const associatedLayerSlugs = application.associatedLayers 
        ? application.associatedLayers.split(',').map(slug => slug.trim().toLowerCase())
        : [];

    // Find the layer data for each associated layer
    const associatedLayers = associatedLayerSlugs.map(slug => {
        const layer = allLayers.find((l: LayerProject) => l.slug.toLowerCase() === slug);
        return layer ? { slug, data: layer } : { slug, data: null };
    }).filter(item => item.data !== null);

    if (!application.associatedLayers || associatedLayers.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <span className="text-muted-foreground text-sm">No associated networks</span>
            </div>
        );
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-auto p-1 hover:bg-muted/50"
                >
                    <div className="flex items-center gap-2">
                        {associatedLayers.slice(0, 3).map((layer) => (
                            <Image
                                key={layer.slug}
                                src={`/logos/${layer.slug}.png`}
                                alt={`${layer.slug} logo`}
                                width={20}
                                height={20}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                }}
                            />
                        ))}
                        {associatedLayers.length > 3 && (
                            <span className="text-xs text-muted-foreground">+{associatedLayers.length - 3}</span>
                        )}
                    </div>
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={`/logos/${application.slug}.png`}
                            alt={application.title}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                {application.title} - Associated Networks
                            </h4>
                        </div>
                    </div>
                    
                    {/* Associated Networks List */}
                    <div className="space-y-3">
                        {associatedLayers.map((layer) => (
                            <div key={layer.slug} className="space-y-2">
                                {/* Network Header */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={`/logos/${layer.slug}.png`}
                                        alt={`${layer.data!.title} logo`}
                                        width={16}
                                        height={16}
                                        className="rounded-full object-cover bg-muted"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/logos/default.png';
                                        }}
                                    />
                                    <div className="text-sm font-medium text-foreground">
                                        {layer.data!.title}
                                    </div>
                                </div>
                                
                                {/* Network Description */}
                                <div className="text-sm text-foreground ml-6">
                                    {parseTextWithLinks(layer.data!.description)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default AssociatedNetworksDialog; 