import { useNavigate } from "react-router-dom";
import styles from "./characters.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Shared/Card";
import { useAppSelector } from "../../redux/store";

enum Filters {
  name = "name",
  planet = "planet",
  gender = "gender",
}

const Characters = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(Filters.name);

  const token = useAppSelector((state) => state.auth?.authUser?.token);

  useEffect(() => {
    const headers = {
      token: token,
    };

    async function fetchData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/characters/${filter}/${page}`,
          { headers }
        );
        setCharacters(response?.data?.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, [page, filter, token]);

  const handleChangePage = (number: 1 | -1) => {
    if (number === -1 && page > 1) setPage(page + number);
    if (number === 1 && page < 43) setPage(page + number);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleFilter = (filter: Filters) => {
    setFilter(filter);
  };

  return (
    <>
      <p
        className={styles.favChar}
        onClick={() => handleNavigate("../favchar")}
      >
        Favorite Characters
      </p>
      <div className={styles.topButtonsContainer}>
        Sort alphabetically by:
        <button onClick={() => handleFilter(Filters.name)}>Name</button>
        <button onClick={() => handleFilter(Filters.gender)}>Gender</button>
        <button onClick={() => handleFilter(Filters.planet)}>Planet</button>
      </div>
      <div className={styles.characters}>
        {characters?.map((character) => {
          return <Card data={character} />;
        })}
      </div>
      <div className={styles.buttonsContainer}>
        <button onClick={() => handleChangePage(-1)}>Previous page</button>
        <button onClick={() => handleChangePage(1)}>Next page</button>
      </div>
    </>
  );
};

export default Characters;
