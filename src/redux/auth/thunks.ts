import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Dispatch } from "redux";

import { auth } from "../../helpers/firebase";

import { loginError, loginPending, loginSuccess, clearUser } from "./actions";

export const login = (data: { email: string; password: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginPending());
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const { token } = await userCredentials.user.getIdTokenResult();
      dispatch(loginSuccess({ token: token }));
    } catch (error: unknown) {
      return dispatch(loginError(error as string));
    }
  };
};

export const l = () => {
  return async (dispatch: Dispatch) => {
    try {
      await signOut(auth);
      sessionStorage.clear();
    } catch (error) {
      return dispatch(clearUser());
    }
  };
};
