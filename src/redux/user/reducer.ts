import { Reducer } from "redux";

import { Actions } from "./constants";
import { ActionsType, State } from "./types";

const initialState: State = {
  userData: {
    _id: undefined,
    email: "",
    password: "string",
    nick: "",
    favoriteCharacters: undefined,
    firebaseUid: "",
  },
  isLoading: true,
  error: false,
};

const userReducer: Reducer<State, ActionsType> = (
  state = { ...initialState },
  action
): State => {
  switch (action.type) {
    case Actions.REGISTER_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case Actions.REGISTER_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
