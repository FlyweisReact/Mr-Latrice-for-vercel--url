// src/api/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl || 'https://your-api-base-url.com/api/v1', // Replace with actual base URL, e.g., from env
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // User (Client) Signin
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/user/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Professional Signin (for both Business and Individual)
    loginProfessional: builder.mutation({
      query: (credentials) => ({
        url: '/professional/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Placeholder for Signup endpoints (since no API details provided, add as needed)
    signupUser: builder.mutation({
      query: (data) => ({
        url: '/user/signup', // Adjust URL as per actual API
        method: 'POST',
        body: data,
      }),
    }),
    signupProfessional: builder.mutation({
      query: (data) => ({
        url: '/professional/signup', // Adjust URL as per actual API
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLoginProfessionalMutation,
  useSignupUserMutation,
  useSignupProfessionalMutation,
} = authApi;