import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { authApi, useAppSelector } from "store";
import { Role } from "types/authTypes";
import { parseToken } from "utils/authUtils";

type AuthState = AuthorizedState | UnauthorizedState;

interface AuthorizedState {
    userRole: Role;
    accessToken: string;
    refreshToken: string;
    isAuthenticated: true;
}

interface UnauthorizedState {
    userRole: null;
    accessToken: null;
    refreshToken: null;
    isAuthenticated: false;
}

const initialState: AuthState = {
    userRole: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
};

export interface AuthPayload {
    accessToken: string;
    refreshToken: string;
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState as AuthState,
    reducers: {
        setNewAccessToken: (state, { payload: { accessToken } }: PayloadAction<any>) => {
            state.accessToken = accessToken;
            const { role } = parseToken(accessToken);
            state.userRole = role;
            state.isAuthenticated = true;
        },
        removeTokens: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.logOut.matchFulfilled, () => {
            return initialState;
        });
        builder.addMatcher(
            authApi.endpoints.logIn.matchFulfilled,
            (state, { payload: { accessToken, refreshToken } }: PayloadAction<AuthPayload>) => {
                
                const { role } = parseToken(accessToken);
                console.log("matcher",role)
                state.userRole = role;
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
                state.isAuthenticated = true;
            }
        );
    },
});

export const useCurrentUserRole = () => {
    const role = useAppSelector((state) => state.auth.userRole);

    if (role === null) {
        throw new Error("User is not authenticated!");
    }

    return role;
};

export const { setNewAccessToken, removeTokens } = authSlice.actions;

export const authReducer = authSlice.reducer;
