import { action } from "typesafe-actions";
import { AnyAction } from "redux";

import { Actions } from "./constants";
import { ResponseData } from "./types";

export const registerPending = (): AnyAction =>
  action(Actions.REGISTER_PENDING);
export const registerSuccess = (data: ResponseData): AnyAction =>
  action(Actions.REGISTER_SUCCESS, data);
export const registerError = (data: ResponseData | string): AnyAction =>
  action(Actions.REGISTER_ERROR, data);
