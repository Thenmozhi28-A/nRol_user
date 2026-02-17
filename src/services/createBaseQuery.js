import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrlMap = {
  login:   import.meta.env.VITE_LOGIN_URL,
  profile: import.meta.env.VITE_PROFILE_URL,
  user:    import.meta.env.VITE_USER_URL,
};

export const createBaseQuery = (urlKey, requiresAuth = true) =>
  
  fetchBaseQuery({
    baseUrl: baseUrlMap[urlKey],

    prepareHeaders: (headers, { getState }) => {
      if (!requiresAuth) return headers; 

      const token = getState().auth.token;

      if (token && token !== "undefined" && token !== "null") {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });