import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURL = ("https://api.pyush.site") + "/events";
const baseURL = ("https://inc-2026-backend.onrender.com") + "/events";
// const baseURL = "http://localhost:3001/events";


export const formAPI = createApi({
    reducerPath: "forms",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        stepOne: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_1?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        getMembers: builder.query({
            query: (ticket) => ({
                url: `/getmemberdetails?ticket=${ticket}`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        getTicket: builder.query({
            query: (ticket) => ({
                url: `/ticket?ticket=${ticket}`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        getTechfiestaMembers: builder.query({
            query: ({team_id, event}) => ({
                url: `/techfiesta-members?team_id=${team_id}&event=${event}`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        addTechfiestaMembers: builder.mutation({
            query: ({ticket, data}) => ({
                url: `/techfiesta-members?ticket=${ticket}`,
                method: 'POST',
                credentials: 'include',
                body: data
            })
        }),
        addMember: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_2?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                credentials: 'include',
                body: data
            })
        }),
        removeMember: builder.mutation({
            query: ({ index, ticket }) => ({
                url: `/deletememberdetails?index=${index}&ticket=${ticket}`,
                method: 'DELETE',
                credentials: 'include',
            })
        }),
        stepThree: builder.mutation({
            query: ({ event_name, ticket, data }) => ({
                url: `/step_3?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        stepFour: builder.mutation({
            query: ({ ticket, data, event }) => ({
                url: `/step_4?ticket=${ticket}&event=${event}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
    })
})


export const { useStepOneMutation, useAddMemberMutation, useStepThreeMutation, useStepFourMutation, useRemoveMemberMutation, useLazyGetMembersQuery, useLazyGetTicketQuery, useLazyGetTechfiestaMembersQuery, useAddTechfiestaMembersMutation, } = formAPI