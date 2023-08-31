import { Reducer } from "redux";

import { Actions } from "./constants";
import { ActionsType, State } from "./types";

const initialState: State = {
  authUser: {
    token: "",
  },
  isLoading: true,
  error: false,
  errorMessage: "",
};

const authReducer: Reducer<State, ActionsType> = (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case Actions.LOGIN_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: undefined,
      };
    }
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        isLoading: false,
        errorMessage: undefined,
      };
    case Actions.LOGIN_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
        errorMessage: action.payload,
      };
    case Actions.CLEAR_USER:
      return {
        ...state,
        authUser: {
          token: "",
        },
      };
    default:
      return state;
  }
};

export default authReducer;
