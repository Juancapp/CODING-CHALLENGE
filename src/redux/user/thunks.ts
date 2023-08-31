import { Dispatch } from "redux";
import { registerError, registerPending, registerSuccess } from "./actions";
import axios from "axios";
import { url } from "./constants";

export const register = (data: {
  email: string;
  password: string;
  nick: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(registerPending());
      const response = await axios.post(`${url}/user`, data);
      dispatch(registerSuccess(response.data));
      alert(response.data.message);
    } catch (error) {
      alert(error);
      dispatch(registerError(error as string));
    }
  };
};
