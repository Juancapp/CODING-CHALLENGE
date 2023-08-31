import * as actions from "./actions";

import { ActionType } from "typesafe-actions";

export interface AuthUser {
  token?: string;
}

export interface State {
  authUser: AuthUser;
  isLoading: boolean;
  error: boolean;
  errorMessage?: string;
}

export type ActionsType = ActionType<typeof actions>;
