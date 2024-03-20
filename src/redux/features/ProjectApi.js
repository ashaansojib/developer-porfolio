import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev-portfolio-server.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
