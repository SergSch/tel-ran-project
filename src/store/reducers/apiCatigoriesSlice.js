import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './../../utils/constants';

export const apiCatigoriesSlice = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/categories/all',
    }),
  }),
});

export const { useGetAllCategoriesQuery } = apiCatigoriesSlice;
