import { rootApi } from "store/services/root-api";

export interface CakePayload {
    id: string;
    name: string;
    description: string;
    price: number;
    isBirthday: boolean;
    category: any;
    baker: any;
    bakerId: number;
}

const CAKE_BASE_PATH = "cakes";
const CAKE_CACHE_TYPE = "Cake";
const CAKE_CACHE_ID = "LIST";

const apiWithTag = rootApi.enhanceEndpoints({ addTagTypes: [CAKE_CACHE_TYPE] });
export const cakeApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getCakes: builder.query<CakePayload[], void>({
            query: () => CAKE_BASE_PATH,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: "Cake" as const, id })),
                          { type: CAKE_CACHE_TYPE, id: CAKE_CACHE_ID },
                      ]
                    : [{ type: CAKE_CACHE_TYPE, id: CAKE_CACHE_ID }],
        }),
    }),
});

export const { useGetCakesQuery } = cakeApi;
