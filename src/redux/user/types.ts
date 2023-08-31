import * as actions from "./actions";

import { ActionType } from "typesafe-actions";

export interface UserData {
  _id?: string;
  email: string;
  password: string;
  nick: string;
  favoriteCharacters?: number[];
  firebaseUid?: string;
}

export interface ResponseData {
  message: string;
  error: boolean;
  data: UserData;
}

export interface State {
  userData: UserData;
  isLoading: boolean;
  error: boolean;
  message?: string;
}

export type ActionsType = ActionType<typeof actions>;
