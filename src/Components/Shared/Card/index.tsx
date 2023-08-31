import styles from "./card.module.css";

interface CardProps {
  data: {
    id?: number;
    name: string;
    status?: string;
    species?: string;
    type?: string;
    gender: string;
    origin?: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url?: string;
    };
    image: string;
    episode?: string[];
    url?: string;
    created?: string;
  };
}

const Card = (props: CardProps) => {
  const { data } = props;
  const { name, gender, location, image } = data;

  const locationName = location.name;

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={name} />
      <span>Name: {name}</span>
      <span>Gender: {gender}</span>
      <span>Planet: {locationName}</span>
    </div>
  );
};

export default Card;
