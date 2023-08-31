import { useEffect } from "react";
import "./App.css";
import { tokenListener } from "./helpers/firebase";
import Signup from "./Components/Auth/SignUp";

function App() {
  useEffect(() => {
    tokenListener();
  }, []);

  return (
    <>
      <Signup />
    </>
  );
}

export default App;
