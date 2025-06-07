import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface ContractAddress {
    token_slug: string;
    explorer: string;
    token_address: string;
    token_name: string;
    network_slug: string;
    network_name: string;
}

interface Props {
    slug: string;
    isLayer: boolean;
    enabled?: boolean;
}

export default function getContractAddresses({
    slug,
    isLayer,
    enabled = false,
}: Props) {
    const response = useQuery<ContractAddress[]>({
        queryKey: [`contract-addresses-${slug}-${isLayer ? 'layer' : 'token'}`],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_tokenimpl?${
                    isLayer 
                        ? `network_slug=ilike.${slug}` 
                        : `token_slug=ilike.${slug}`
                }`,
            ),
        enabled,
        staleTime: Infinity,
    });

    return response;
} 