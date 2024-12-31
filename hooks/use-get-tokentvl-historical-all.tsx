import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    total_amount: number;
    date: string;
    identifier: string;
    network_slug: string;
    token_name: string;
}

interface Props {
    queryString?: string;
}

export default function useGetTokentvlHistorical({ queryString }: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `aaa_get_tokentvl_historical${queryString}`
                : "aaa_get_tokentvl_historical",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/aaa_get_tokentvl_historical${queryString ?? ""}`,
            );
        },
    });

    return response;
}
