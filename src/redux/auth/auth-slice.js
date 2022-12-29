import { createSlice } from "@reduxjs/toolkit";

import {
  authSignUp,
  authSignIn,
  authSignOut,
  authCheckAuth,
  authUpdateProfilePhoto,
} from "./auth-operation.js";

const initialState = {
  user: {
    userID: null,
    email: "",
    login: "",
    photoURL: "",
  },

  isLogin: false,
  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  store.isLogin = true;
  store.loading = false;
  store.error = null;

  store.user.userID = payload?.uid;
  store.user.email = payload?.email;
  store.user.login = payload?.displayName;
  store.user.photoURL = payload?.photoURL;
};
const pending = (store, _) => ({ ...initialState, loading: true });
const rejected = (store, { payload }) => ({
  ...initialState,
  loading: false,
  error: payload,
});
const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, pending)
      .addCase(authSignUp.fulfilled, fulfilled)

      .addCase(authSignIn.pending, pending)
      .addCase(authSignIn.fulfilled, fulfilled)

      .addCase(authSignOut.pending, pending)
      .addCase(authSignOut.fulfilled, fulfilled)

      .addCase(authCheckAuth.pending, pending)
      .addCase(authCheckAuth.fulfilled, (store, { payload }) => {
        if (payload) {
          return {
            loading: false,
            error: false,
            isLogin: true,
            user: { ...payload },
          };
        }
        return { ...initialState };
      })

      .addCase(authUpdateProfilePhoto.pending, pending)
      .addCase(authUpdateProfilePhoto.fulfilled, fulfilled)

      .addMatcher(isRejectedAction, rejected);
  },
});
export default authSlice.reducer;
