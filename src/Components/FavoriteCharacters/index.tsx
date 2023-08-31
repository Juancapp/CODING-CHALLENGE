import { useNavigate } from "react-router-dom";
import styles from "./favorite.module.css";

const FavoriteCharacters = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <p
        className={styles.characters}
        onClick={() => handleNavigate("../home")}
      >
        Characters
      </p>
      <span>Favorite Characters</span>
    </div>
  );
};

export default FavoriteCharacters;
