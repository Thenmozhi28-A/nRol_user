import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../services/createBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: createBaseQuery("user"),
  endpoints: (builder) => ({

    userDetails: builder.query({
      query: (userId) => ({
        url: `v1/user/${userId}`,
        method: "GET",
      }),

    }),

    createProfile: builder.mutation({
      query: ({ userId, formData }) => ({
        url: `v1/user/${userId}`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const { useUserDetailsQuery, useCreateProfileMutation } = userApi;