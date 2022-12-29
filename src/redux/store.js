import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";

export const store = configureStore({
  reducer: authReducer,
});
