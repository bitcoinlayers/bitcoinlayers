import type { FC, ReactNode } from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageWithFallback from "./image-with-fallback";

export interface NetworkInfo {
  slug: string;
  title: string;
  description: string;
}

export interface SupportNetworksModalProps {
  networks: NetworkInfo[];
  children: ReactNode;
}

const SupportNetworksModal: FC<SupportNetworksModalProps> = ({ networks, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-fit [&>button]:hidden" style={{ width: "auto", maxWidth: "90vw" }}>
        <div className="bg-popover border border-border rounded-lg shadow-lg" style={{ display: "flex", width: "var(--breakpoint-sm, 640px)", padding: "var(--spacing-6, 24px)", flexDirection: "column", alignItems: "flex-end", gap: "var(--spacing-4, 16px)", flexShrink: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch" }}>
            <div className="text-popover-foreground" style={{ fontFamily: "Public Sans", fontSize: "20px", fontStyle: "normal", fontWeight: 500, lineHeight: "28px" }}>Supported Alt Rollup Networks</div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-popover-foreground" style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>&times;</span>
            </button>
          </div>
          <div className="bg-border" style={{ width: "592px", height: "1px" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px", alignSelf: "stretch", maxHeight: "400px", overflowY: "auto", paddingRight: "8px", paddingTop: "0px" }}>
            {networks.map((network) => (
              <div key={network.slug} style={{ display: "flex", alignItems: "center", gap: "16px", alignSelf: "stretch" }}>
                <ImageWithFallback slug={network.slug} folder="logos" altText={`${network.title} logo`} width={32} height={32} />
                <div>
                  <div className="font-semibold text-base text-popover-foreground">{network.title}</div>
                  <div className="text-sm text-muted-foreground">{network.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportNetworksModal; 