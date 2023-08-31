import { useNavigate } from "react-router-dom";
import styles from "./characters.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Shared/Card";

const Characters = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/characters/name/${page}`
        );
        setCharacters(response?.data?.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, [page]);

  const handleChangePage = (number: 1 | -1) => {
    if (number === -1 && page > 1) setPage(page + number);
    if (number === 1 && page < 43) setPage(page + number);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.charactersContainer}>
      <p
        className={styles.favChar}
        onClick={() => handleNavigate("../favchar")}
      >
        Favorite Characters
      </p>
      <div className={styles.characters}>
        {characters?.map((character) => {
          return <Card data={character} />;
        })}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={() => handleChangePage(-1)}>Página anterior</button>
        <button onClick={() => handleChangePage(1)}>Página siguiente</button>
      </div>
    </div>
  );
};

export default Characters;
