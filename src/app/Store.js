import { configureStore } from "@reduxjs/toolkit";
import  {LoginApi} from "../services/LoginApi";
import {profileApi} from "../services/ProfileApi";
import authReducer from '../features/authSlice'
import { userApi } from "../services/UserApi";

const store = configureStore({
    reducer:{
           
       auth: authReducer,
       [LoginApi.reducerPath]:LoginApi.reducer,
       [profileApi.reducerPath]:profileApi.reducer,
       [userApi.reducerPath]:userApi.reducer,
    },

    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(LoginApi.middleware, profileApi.middleware, userApi.middleware)

})

export default store;


