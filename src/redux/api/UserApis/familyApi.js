import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const familyApi = createApi({
  reducerPath: 'familyApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Family'],
  endpoints: (builder) => ({
    addFamilyAndFriends: builder.mutation({
      query: (body) => ({
        url: 'user/addFamilyAndFriends',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Family'],
    }),
    getFamilyAndFriends: builder.query({
      query: () => 'user/getFamilyAndFriends',
      providesTags: ['Family'],
    }),
    updateFamilyAndFriendsById: builder.mutation({
      query: ({ id, body }) => ({
        url: `user/updateFamilyAndFriendsById/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Family', id }],
    }),
    getFamilyAndFriendsById: builder.query({
      query: (id) => `user/getFamilyAndFriendsById/${id}`,
      providesTags: (result, error, id) => [{ type: 'Family', id }],
    }),
    deleteFamilyAndFriendsById: builder.mutation({
      query: (id) => ({
        url: `user/deleteFamilyAndFriendsById/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Family'],
    }),
  }),
});

export const {
  useAddFamilyAndFriendsMutation,
  useGetFamilyAndFriendsQuery,
  useUpdateFamilyAndFriendsByIdMutation,
  useGetFamilyAndFriendsByIdQuery,
  useDeleteFamilyAndFriendsByIdMutation,
} = familyApi;