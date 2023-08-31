import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/thunks";
import { joiResolver } from "@hookform/resolvers/joi";
import { schemaLogin } from "./validations";
import Input from "../../Shared/Input";
import { AppDispatch } from "../../../redux/types";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: joiResolver(schemaLogin),
  });

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const onSubmit = (data: FormData) => {
    dispatch(login(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input<FormData>
          name="email"
          title="Email"
          register={register}
          error={errors.email?.message}
        />
        <Input<FormData>
          name="password"
          title="Password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <button type="submit">Submit</button>
      </form>
      <span>
        ¿No tiene usuario?
        <span
          className={styles.goToRegister}
          onClick={() => handleNavigate("../signup")}
        >
          Regístrese aquí
        </span>
      </span>
    </>
  );
};

export default Login;
