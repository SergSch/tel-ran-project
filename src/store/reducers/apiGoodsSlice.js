import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiGoodsSlice = createApi({
  reducerPath: 'goods',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    getAllGoods: builder.query({
      query: () => '/products/all',
    }),
  }),
});

export const { useGetAllGoodsQuery } = apiGoodsSlice;
