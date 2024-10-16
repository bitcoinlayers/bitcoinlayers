import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    amount: number;
    date: string;
    identifier: string;
    layer_name: string;
    layer_slug: string;
    token_name: string;
}

interface Props {
    queryString?: string;
}

export default function useGetBalances({ queryString }: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_all_balances_pertoken${queryString}`
                : "get_all_balances_pertoken",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_all_balances_pertoken${queryString ?? ""}`,
            );
        },
    });

    return response;
}
