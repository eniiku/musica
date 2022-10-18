import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi: any = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'cc80299661msh2a170641db75f4ap1a1db3jsnec4fe6525bed'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    }),
  }),
});

export const { useGetTopChartsQuery } = musicApi;
