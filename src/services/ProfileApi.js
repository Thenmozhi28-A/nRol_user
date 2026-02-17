import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../services/createBaseQuery";

export const profileApi = createApi({
  reducerPath: "ProfileApi",
  
  baseQuery: createBaseQuery("profile"), 

  endpoints: (builder) => ({

    getProfile: builder.query({

      // query: ({userId,conversationId}) => ({

      // url: `v1/profile/retrieve/${userId}/${conversationId}`,
      
        // url: `v1/profile/retrieve/${userId}`,

        // url: "v1/profile/retrieve/",
        // method: "GET",
        // params: {userId, conversationId },
        // params:{conversationId},
  // }),

//--------------------------------

        // query:({userInfo,queryParams,filters,meta})=> ({
        //   url: "v1/profile/retrieve/",
        //   method: "GET",
        //   params: {
        //     ...userInfo,
        //     ...queryParams,
        //     ...filters,
        //     ...meta },
        // })

// query:({profileRequest})=> ({
//   url: "v1/profile/retrieve/",
//   method: "GET",
//   params: profileRequest,
// })

query:(userId)=> ({
  url: `v1/profile/retrieve/${userId}`,
  method: "GET",
})

    
    }),

    boardSelect: builder.query({
      query: () => ({
        url: "v1/board/retrieve",
        method: "GET",
      }),
    }),

    ugSelect: builder.query({
      query: () => ({
        url: "v1/course/level/ug",
        method: "GET",
      }),
    }),

    pgSelect: builder.query({
      query: () => ({
        url: "v1/course/level/pg",
        method: "GET",
      }),
    }),

    createProfile: builder.mutation({
      query: (formData) => ({
        url: "v1/profile/create",
        method: "POST",
        body: formData,
      }),
    }),

    updateProfile: builder.mutation({
      query: ({userId ,formData}) => ({
      url: `v1/profile/update-profile?userId=${userId}`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useCreateProfileMutation,
  useUpdateProfileMutation,
  useUgSelectQuery,
  usePgSelectQuery,
  useBoardSelectQuery,
} = profileApi;