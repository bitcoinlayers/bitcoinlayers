import { ReactNode } from "react";

export interface NetworkInfo {
  slug: string;
  title: string;
  description: string;
}

export interface SupportNetworksModalProps {
  networks: NetworkInfo[];
  children: ReactNode;
}

declare const SupportNetworksModal: React.FC<SupportNetworksModalProps>;

export default SupportNetworksModal; 