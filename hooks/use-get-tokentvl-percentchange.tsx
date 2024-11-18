import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    token_name: string | null;
    token_slug: string | null;
    amount_today: number;
    amount_one_month_ago: number;
    amount_one_year_ago: number;
    percent_change_mom: number | null;
    percent_change_yoy: number | null;
}

interface Props {
    queryString?: string;
}

export default function useGetTokentvlPercentchange({
    queryString,
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_tokentvl_percentchange${queryString}`
                : "get_tokentvl_percentchange",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_tokentvl_percentchange${queryString ?? ""}`,
            );
        },
    });

    return response;
}
