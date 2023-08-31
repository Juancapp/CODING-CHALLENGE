import { action } from "typesafe-actions";

import { Actions } from "./constants";
import { AuthUser } from "./types";

export const loginPending = () => action(Actions.LOGIN_PENDING);
export const loginSuccess = (user: AuthUser) =>
  action(Actions.LOGIN_SUCCESS, user);
export const loginError = (error: string) => action(Actions.LOGIN_ERROR, error);
export const clearUser = () => action(Actions.CLEAR_USER);
