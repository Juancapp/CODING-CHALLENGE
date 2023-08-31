import { action } from "typesafe-actions";
import { AnyAction } from "redux";

import { Actions } from "./constants";
import { AuthUser } from "./types";

export const loginPending = (): AnyAction => action(Actions.LOGIN_PENDING);
export const loginSuccess = (user: AuthUser): AnyAction =>
  action(Actions.LOGIN_SUCCESS, user);
export const loginError = (error: string): AnyAction =>
  action(Actions.LOGIN_ERROR, error);
export const clearUser = (): AnyAction => action(Actions.CLEAR_USER);
