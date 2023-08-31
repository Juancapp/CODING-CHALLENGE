import { useNavigate } from "react-router-dom";
import styles from "./characters.module.css";

const Characters = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <p
        className={styles.favChar}
        onClick={() => handleNavigate("../favchar")}
      >
        Favorite Characters
      </p>
      <span>Characters</span>
    </div>
  );
};

export default Characters;
