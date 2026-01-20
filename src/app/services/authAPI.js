import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURL = ("https://api.pyush.site") + "/admin";
// const baseURL = ("https://inc-2026-backend.onrender.com") + "/admin";
const baseURL = "https://inc-2026-backend.onrender.com/admin";
// const baseURL = "http://localhost:3001/admin";


export const authAPI = createApi({
    reducerPath: "auths",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        processLogin: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        processLogout: builder.query({
            query: () => ({
                url: `/logout`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        processVerify: builder.query({
            query: () => ({
                url: `/verify`,
                method: 'GET',
                credentials: 'include',
            })
        }),
    })
})


export const { useProcessLoginMutation, useLazyProcessLogoutQuery, useLazyProcessVerifyQuery } = authAPI
