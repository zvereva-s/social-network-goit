import { createOperation } from "../../shared/utils/utils";

import {
  signUp,
  signIn,
  signOut,
  checkAuth,
  updateProfilePhoto,
} from "../../shared/api/api-auth";

export const authSignUp = createOperation("auth/signup", signUp);
export const authSignIn = createOperation("auth/signin", signIn);

export const authSignOut = createOperation("auth/signout", signOut);

export const authCheckAuth = createOperation("auth/checkAuth", checkAuth);

export const authUpdateProfilePhoto = createOperation(
  "auth/updateProfilePhoto",
  updateProfilePhoto
);
