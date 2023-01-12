import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";

export const store = configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["auth/signin/fulfilled", "auth/signin/rejected"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.multiFactor"],
        // Ignore these paths in the state
        ignoredPaths: ["error", "payload"],
      },
    }),
});
