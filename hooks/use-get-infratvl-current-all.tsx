import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    total_amount: number;
    most_recent_date: string;
    token_name: string;
    infra_slug: string;
}

interface Props {
    queryString?: string;
}

export default function useGetInfravlCurrentAll({ queryString }: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_infratvl_current_all${queryString}`
                : "get_infratvl_current_all",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_infratvl_current_all${queryString ?? ""}`,
            );
        },
    });

    return response;
}
