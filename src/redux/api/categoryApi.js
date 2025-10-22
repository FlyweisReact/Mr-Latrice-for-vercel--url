import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl  // Replace with actual base URL, e.g., from env
    }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => '/admin/Category/allCategory',
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useGetAllCategoriesQuery } = categoryApi;    