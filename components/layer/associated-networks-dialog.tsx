import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
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
        <Dialog>
            <DialogTrigger asChild>
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
                                    (e.target as HTMLImageElement).src = '/bitcoinlayers-logo.png';
                                }}
                            />
                        ))}
                        {associatedLayers.length > 3 && (
                            <span className="text-xs text-muted-foreground">+{associatedLayers.length - 3}</span>
                        )}
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-fit [&>button]:hidden" style={{ width: "auto", maxWidth: "90vw" }}>
                <div 
                    className="bg-popover border border-border rounded-lg shadow-lg p-6"
                    style={{
                        width: "var(--breakpoint-sm, 640px)",
                        maxHeight: "80vh",
                        overflowY: "auto"
                    }}
                >
                    <DialogTitle className="sr-only">
                        {application.title} - Associated Networks
                    </DialogTitle>
                    <div className="space-y-6">
                        {/* Application Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${application.slug}.png`}
                                alt={application.title}
                                width={32}
                                height={32}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/bitcoinlayers-logo.png';
                                }}
                            />
                            <div>
                                <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                    {application.title} - Associated Networks
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Associated Networks List */}
                        <div className="space-y-4">
                            {associatedLayers.map((layer) => (
                                <div key={layer.slug} className="space-y-3">
                                    {/* Network Header */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={`/logos/${layer.slug}.png`}
                                            alt={`${layer.data!.title} logo`}
                                            width={24}
                                            height={24}
                                            className="rounded-full object-cover bg-muted"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/bitcoinlayers-logo.png';
                                            }}
                                        />
                                        <h4 className="text-lg font-medium text-foreground">
                                            {layer.data!.title}
                                        </h4>
                                    </div>
                                    
                                    {/* Network Description */}
                                    <div className="ml-9">
                                        <p className="body_paragraph !text-foreground text-sm">
                                            {parseTextWithLinks(layer.data!.description)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AssociatedNetworksDialog; 