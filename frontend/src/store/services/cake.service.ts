import { rootApi } from "store/services/root-api";

export interface CakePayload {
    id: string;
    name: string;
    description: string;
    price: number;
    isBirthday: boolean;
    category: any;
    // category: CakeCategory;
    baker: any;
    // baker: Baker;
    bakerId: number;
}

// export interface KeyAccountRequest {
//     name: string;
//     keyAccountNumber: string;
// }

// export interface KeyAccountUpdateRequest {
//     keyAccount: KeyAccountRequest;
//     id: number;
// }

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
        // addKeyAccount: builder.mutation<KeyAccountPayload, KeyAccountRequest>({
        //     query: (body) => ({
        //         url: KEY_ACCOUNT_BASE_PATH,
        //         method: "POST",
        //         body,
        //     }),
        //     invalidatesTags: [{ type: KEY_ACCOUNT_CACHE_TYPE, id: KEY_ACCOUNT_CACHE_ID }],
        // }),
        // updateKeyAccount: builder.mutation<void, KeyAccountUpdateRequest>({
        //     query: ({ keyAccount, id }) => ({
        //         url: `${KEY_ACCOUNT_BASE_PATH}/${id}`,
        //         method: "PATCH",
        //         body: keyAccount,
        //     }),
        //     invalidatesTags: [{ type: KEY_ACCOUNT_CACHE_TYPE, id: KEY_ACCOUNT_CACHE_ID }],
        // }),
        // deleteKeyAccount: builder.mutation<void, number>({
        //     query: (id) => ({
        //         url: `${KEY_ACCOUNT_BASE_PATH}/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: [{ type: KEY_ACCOUNT_CACHE_TYPE, id: KEY_ACCOUNT_CACHE_ID }],
        // }),
    }),
});

export const {
    useGetCakesQuery,
    // useAddKeyAccountMutation,
    // useUpdateKeyAccountMutation,
    // useDeleteKeyAccountMutation,
} = cakeApi;
