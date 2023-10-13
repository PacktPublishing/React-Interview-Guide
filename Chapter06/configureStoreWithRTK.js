import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersServerApi } from "./services/usersAPI";

export const store = configureStore({
  reducer: {
    [usersServerApi.reducerPath]: usersServerApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersServerApi.middleware),
});

setupListeners(store.dispatch);
