import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const salonApi = createApi({
    reducerPath: 'salonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl  // Replace with actual base URL, e.g., from env
    }), endpoints: (builder) => ({
        getAllSalons: builder.query({
            query: (userType) => {
                if (userType === 'INDEPENDENT') {
                    return 'admin/IndependentSaloon/allIndependentSaloon'; // Placeholder for independent API
                }
                return 'admin/Saloon/allSaloon';
            },
            transformResponse: (response) => response.data.docs,
        }),
        getSalonById: builder.query({
            query: ({ userType, id }) => {
                if (userType === 'INDEPENDENT') {
                    return `admin/IndependentSaloon/view/${id}`;
                }
                return `admin/Saloon/view/${id}`;
            },
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useGetAllSalonsQuery,useGetSalonByIdQuery } = salonApi;