// src/redux/api/professionalApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const professionalApi = createApi({
    reducerPath: 'professionalApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const professionalToken = getState().auth.professionalToken;
            if (professionalToken) {
                headers.set('Authorization', `Bearer ${professionalToken}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Professional'],
    endpoints: (builder) => ({
        professionalSignup: builder.mutation({
            query: (body) => ({
                url: 'professional/registration',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Professional'],
        }),
        
        professionalLogin: builder.mutation({
            query: (body) => ({
                url: 'professional/signin',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Professional'],
        }),
        professionalUpdateProfileImage: builder.mutation({
            query: (formData) => ({
                url: 'professional/updateProfileImage',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Professional'],
        }),
        professionalPlaceOfBusiness: builder.mutation({
            query: (body) => ({
                url: 'professional/placeOfBusiness',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Professional'],
        }),
        professionalAddAmenities: builder.mutation({
            query: (body) => ({
                url: 'professional/addAmenities',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Professional'],
        }),
        getAllServices: builder.query({
            query: () => 'Service/all/getAllServices',
            providesTags: ['Professional'],
        }),
        professionalAddCategoriesInProfile: builder.mutation({
            query: (body) => ({
                url: 'professional/addCategoriesInProfile',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Professional'],
        }),
    }),
});

export const {
    useProfessionalSignupMutation,
    useProfessionalLoginMutation,
    useProfessionalUpdateProfileImageMutation,
    useProfessionalPlaceOfBusinessMutation,
    useProfessionalAddAmenitiesMutation,
    useGetAllServicesQuery,
    useProfessionalAddCategoriesInProfileMutation
} = professionalApi;