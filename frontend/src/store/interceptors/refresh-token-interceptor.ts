import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { RootState, removeTokens, setNewAccessToken } from "store";

const BASE_URL = "http://localhost:5000/";

const getQuery = (token: string | null) => {
    return fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    });
};

export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    const { accessToken, refreshToken, isAuthenticated } = (api.getState() as RootState).auth;
    let result = await getQuery(accessToken)(args, api, extraOptions);

    // TODO: error handling
    if (isAuthenticated && result.error && result.error.status === 401) {
        const refreshResult = await getQuery(refreshToken)("/auth/refresh", api, extraOptions);
        if (refreshResult.data) {
            const newAccessToken: string = refreshResult.data as string;
            api.dispatch(setNewAccessToken(newAccessToken));
            result = await getQuery(newAccessToken)(args, api, extraOptions);
        } else {
            api.dispatch(removeTokens());
        }
    }
    return result;
};
