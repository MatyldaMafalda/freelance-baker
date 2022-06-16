import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "store/interceptors/refresh-token-interceptor";

export const rootApiAuth = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
});
