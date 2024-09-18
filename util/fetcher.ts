export async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit,
): Promise<JSON> {
    const res = await fetch(input, {
        cache: "no-cache",
        ...init,
    });

    if (!res.ok) {
        const json = await res.json();
        console.error(json);

        if (json.message) {
            const error = new Error(json.message) as Error & {
                status: number;
            };
            error.status = res.status;
            throw error;
        } else {
            throw new Error("An unexpected error occurred");
        }
    }

    const contentLength = res.headers.get("Content-Length");

    if (contentLength === "0" || res.status === 204) {
        return {} as JSON;
    }

    return res.json();
}
