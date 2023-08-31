import { useEffect } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import { tokenListener } from "./helpers/firebase";

function App() {
  useEffect(() => {
    tokenListener();
  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
