// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const LoginApi = createApi({

//     reducerPath:"LoginAPI",

//     baseQuery:fetchBaseQuery({
//         // baseUrl:"http://103.160.171.236:4299/"

//                 baseUrl: import.meta.env.VITE_LOGIN_URL,

//     }),

//     endpoints:(builder)=>({
//         login:builder.mutation({
//             query:(NewUser)=>{
//                 return{
//                     url:"/v1/auth/login",
//                     method:"POST",
//                     body:NewUser
//                 }
//             }
//         })
// })
// });

// export const {useLoginMutation} = LoginApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../services/createBaseQuery";

export const LoginApi = createApi({
  reducerPath: "LoginAPI",

  baseQuery: createBaseQuery("login", false), 
  
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (NewUser) => ({
        url: "/v1/auth/login",
        method: "POST",
        body: NewUser,
      }),
    }),
  }),
});

export const { useLoginMutation } = LoginApi;