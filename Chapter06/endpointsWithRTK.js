import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersServerApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    users: builder.query({
      query: (page = 1) => `users?page=${page}&limit=10`,
    }),

    createUser: builder.mutation({
      query: (name) => ({
        url: "users",
        method: "POST",
        body: { name },
      }),
    }),
  }),
});

export const { useUsersQuery, useCreateUserMutation } = usersServerApi;
