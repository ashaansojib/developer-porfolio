import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { data } from "autoprefixer";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev-portfolio-server.vercel.app/api",
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
      invalidatesTags: ["projects"],
    }),
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),
    removeProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useRemoveProjectMutation,
} = projectApi;
