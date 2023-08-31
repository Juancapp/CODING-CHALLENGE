import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

import { loginSuccess, clearUser } from "../redux/auth/actions";
import { store } from "../redux/store";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const tokenListener = () => {
  auth.onIdTokenChanged(async (user) => {
    try {
      if (user) {
        const { token } = await user.getIdTokenResult(true);
        store.dispatch(
          loginSuccess({
            token,
          })
        );
        sessionStorage.setItem("token", token);
      } else {
        store.dispatch(clearUser());
      }
    } catch (error: unknown) {
      return console.error(error);
    }
  });
};

export default firebaseApp;
