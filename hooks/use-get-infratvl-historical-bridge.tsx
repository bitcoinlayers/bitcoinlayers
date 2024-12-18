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
    enabled?: boolean;
}

export default function useGetInfratvlHistoricalBridge({
    queryString,
    ...rest
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_infratvl_historical_bridge${queryString}`
                : "get_infratvl_historical_bridge",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_infratvl_historical_bridge${queryString ?? ""}`,
            );
        },
        ...rest,
    });

    return response;
}
