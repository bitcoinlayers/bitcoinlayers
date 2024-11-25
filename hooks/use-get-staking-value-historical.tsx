import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    amount: number;
    date: string;
    identifier: string;
    infra_name: string;
    infra_slug: string;
    is_staking: boolean;
    token_name: string;
}

interface Props {
    queryString?: string;
}

export default function useGetStakingValueHistorical({
    queryString,
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_staking_value_historical_all${queryString}`
                : "get_staking_value_historical_all",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_staking_value_historical_all${queryString ?? ""}`,
            );
        },
    });

    return response;
}
