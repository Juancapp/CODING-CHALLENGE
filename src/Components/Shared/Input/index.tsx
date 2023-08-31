import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./index.module.css";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  title: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
  defaultValue?: string;
}

const Input = <T extends FieldValues>({
  type = "text",
  name,
  title,
  register,
  defaultValue,
  error,
}: InputProps<T>): JSX.Element => {
  return (
    <label className={styles.label}>
      {title}
      <input
        type={type}
        {...register(name)}
        defaultValue={defaultValue}
        className={error ? styles.inputRed : ""}
      />
      {error && <p className={styles.label}>{error}</p>}
    </label>
  );
};

export default Input;
