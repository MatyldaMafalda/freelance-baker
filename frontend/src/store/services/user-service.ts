import { rootApi } from "store/services/root-api";
import { Role } from "types/authTypes";


const USER_BASE_PATH = "users";
const apiWithTag = rootApi.enhanceEndpoints({ addTagTypes: ["User"] });

interface Baker {
    cakes: any[];

}

export interface UserBakerRequest { 
    name: string;
    email: string;
    password: string;
    role: Role;
    baker?: Baker;
}

export const userApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        // getAuthenticatedUser: builder.query<void, any>({
        //     query: () => ({
        //         url: "user",
        //         method: "GET",
        //     }),
        // }),
        addUserBaker: builder.mutation<any, UserBakerRequest>({
            query: (body) => ({
                url: USER_BASE_PATH,
                method: "POST",
                body,
            }),
            //invalidatesTags: [{ type: BAKER_CACHE_TYPE, id: BAKER_CACHE_ID }],
        }),
    }),
});

export const { useAddUserBakerMutation } = userApi;
