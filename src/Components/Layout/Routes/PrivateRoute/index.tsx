import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../../redux/store";

const PrivateRoute = () => {
  const token = useAppSelector((state) => state.auth.authUser.token);

  return token ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoute;
