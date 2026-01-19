import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURL = ("https://api.pyush.site") + "/allocations";
const baseURL = ("https://inc-2026-backend.onrender.com") + "/allocations";
// const baseURL = "http://localhost:3001/allocations";


export const allocationAPI = createApi({
    reducerPath: "allocations",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        allocateJudge: builder.mutation({
          query: ({data, event_name}) => ({
            url: `/${event_name}/allocate`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: data,
          })
        }),
        deallocateJudge: builder.mutation({
          query: ({data, event_name}) => ({
            url: `/${event_name}/deallocate`,
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: data,
          })
        }),
        getEvaluationStats: builder.query({
          query: (event_name) => ({
              url: `/getevalstats/${event_name}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
    })
})


export const { useAllocateJudgeMutation, useDeallocateJudgeMutation, useGetEvaluationStatsQuery, } = allocationAPI
