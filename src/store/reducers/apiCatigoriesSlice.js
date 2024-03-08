import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCatigoriesSlice = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/categories/all',
    }),
  }),
});

export const { useGetAllCategoriesQuery } = apiCatigoriesSlice;
