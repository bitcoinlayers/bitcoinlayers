import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Snapshot {
    network_slug: string;
    network_name: string;
    total_balance: number;
    rank: number | null;
    tokens: string[];
}

interface Props {
    queryString?: string;
}

export default function getCurrentSuppliesByNetwork({
    queryString,
}: Props = {}) {
    const response = useQuery<Snapshot[]>({
        queryKey: [
            queryString
                ? `current_supplies_by_network${queryString}`
                : "current_supplies_by_network",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_network${queryString ?? ""}`,
            );
        },
    });

    return response;
}
