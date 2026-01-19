import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURL = ("https://api.pyush.site") + "/events";
const baseURL = ("https://inc-2026-backend.onrender.com") + "/events";
// const baseURL = "http://localhost:3001/events";

export const adminAPI = createApi({
    reducerPath: "admins",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getRegistrationsCount: builder.query({
          query: () => ({
              url: `/registrations-count`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getPendingVerifications: builder.query({
          query: (event_name) => ({
              url: `/verify/payment/${event_name}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getVerifiedRegistrations: builder.query({
          query: (event_name) => ({
              url: `/registrations/${event_name}`,
              method: 'GET',
              credentials: 'include',
              validateStatus: (res) => {
                return (res.status === 200 || res.status === 302);
              },
          })
        }),
        getIncompleteRegistrations: builder.query({
          query: (event_name) => ({
              url: `/incomplete-registrations/${event_name}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getCollegeID: builder.query({
          query: (email) => ({
              url: `/verify-file?email=${email}`,
              method: 'GET',
              credentials: 'include',
              validateStatus: (res) => {
                return (res.status === 200 || res.status === 302);
              },
          })
        }),
        processPaymentVerification: builder.mutation({
          query: ({data, event_name}) => ({
              url: `/verify/payment/${event_name}`,
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: data,
          })
        }),
        getSynopsis: builder.query({
          query: ({event_name, team_ids}) => ({
            url: `/${event_name}/synopsis?team_ids=${team_ids}`,
            method: 'GET',
            credentials: 'include',
            responseHandler: async (response) => {
              const blob = await response.blob();
              return window.URL.createObjectURL(blob);
            },
            cacheTime: 0,
          }),
        }),        
    })
})


export const { useGetRegistrationsCountQuery, useGetPendingVerificationsQuery, useLazyGetVerifiedRegistrationsQuery, useGetVerifiedRegistrationsQuery, useLazyGetCollegeIDQuery, useProcessPaymentVerificationMutation, useGetIncompleteRegistrationsQuery, useLazyGetSynopsisQuery, } = adminAPI
