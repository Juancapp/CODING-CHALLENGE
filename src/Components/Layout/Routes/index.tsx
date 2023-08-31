import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Signup from "../../Auth/SignUp";
import Home from "../../Home";
import PrivateRoute from "./PrivateRoute";
import FavoriteCharacters from "../../FavoriteCharacters";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/favchar" element={<FavoriteCharacters />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponent;
