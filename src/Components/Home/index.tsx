import { useAppSelector } from "../../redux/store";
import Login from "../Auth/Login";
import Characters from "../Characters";

const Home = () => {
  const { token } = useAppSelector((state) => state.auth?.authUser);

  return <div>{token ? <Characters /> : <Login />}</div>;
};

export default Home;
