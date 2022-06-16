import { AuthPayload } from "store";
import { rootApi } from "store/services/root-api";

export interface LoginRequest {
    email: string;
    password: string;
}

const apiWithTag = rootApi.enhanceEndpoints({ addTagTypes: ["Auth"] });
export const authApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        logIn: builder.mutation<AuthPayload, LoginRequest>({
            query: (credentials) => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        logOut: builder.mutation<void, void>({
            query: () => ({
                url: "auth/logout",
                method: "DELETE",
            }),
        }),
    }),
});

export const { useLogInMutation, useLogOutMutation } = authApi;
