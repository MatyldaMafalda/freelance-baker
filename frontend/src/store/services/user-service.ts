import { rootApi } from "store/services/root-api";
import { Role } from "types/authTypes";

const USER_BASE_PATH = "users";
const apiWithTag = rootApi.enhanceEndpoints({ addTagTypes: ["User"] });

interface Baker {
    cakes: any[];
}

export interface UserBaker {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    baker?: Baker;
}

export interface UserBakerRequest extends Omit<UserBaker, "id"> {
    password: string;
}

export const userApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        addUserBaker: builder.mutation<UserBaker, UserBakerRequest>({
            query: (body) => ({
                url: USER_BASE_PATH,
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useAddUserBakerMutation } = userApi;
