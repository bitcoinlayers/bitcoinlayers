import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Snapshot {
    token_slug: string;
    networks: string[];
    total_balance: number;
    rank: number | null;
}

interface Props {
    queryString?: string;
}

export default function getCurrentSuppliesByTokenproject({
    queryString,
}: Props = {}) {
    const response = useQuery<Snapshot[]>({
        queryKey: [
            queryString
                ? `current_supplies_by_tokenproject${queryString}`
                : "current_supplies_by_tokenproject",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_tokenproject${queryString ?? ""}`,
            );
        },
    });

    return response;
}
