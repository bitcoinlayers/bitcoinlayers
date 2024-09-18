import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const handleError = (error: unknown | any) => {
    if (error.errors) {
        error.errors.forEach((err: unknown | any) => {
            toast.error(err.longMessage || err.message);
        });
    } else {
        toast.error(error.longMessage || error.message);
    }
};

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: unknown | any) => handleError(error),
    }),
    mutationCache: new MutationCache({
        onError: (error: unknown | any) => handleError(error),
    }),
});
