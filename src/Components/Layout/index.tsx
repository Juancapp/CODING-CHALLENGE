import { useDispatch } from "react-redux";
import RoutesComponent from "./Routes";
import { AppDispatch } from "../../redux/types";
import { logout } from "../../redux/auth/thunks";
import styles from "./layout.module.css";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { tokenListener } from "../../helpers/firebase";

const Layout = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const { token } = useAppSelector((state) => state.auth?.authUser);

  useEffect(() => {
    tokenListener();
  }, []);

  return (
    <>
      {token && (
        <button className={styles.button} onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
      <RoutesComponent />
    </>
  );
};

export default Layout;
