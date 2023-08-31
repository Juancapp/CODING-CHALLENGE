import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";
import { register as registerForm } from "../../../redux/user/thunks";
import { schemaSignup } from "./validations";
import Input from "../../Shared/Input";
import { AppDispatch } from "../../../redux/types";
import { useNavigate } from "react-router-dom";

interface FormData {
  nick: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Signup = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: joiResolver(schemaSignup),
  });

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const onSubmit = (data: FormData) => {
    const dataWithoutPassword = {
      nick: data.nick,
      email: data.email,
      password: data.password,
    };
    dispatch(registerForm(dataWithoutPassword));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input<FormData>
        name="nick"
        title="nick"
        register={register}
        error={errors.nick?.message}
      />
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
      <Input<FormData>
        name="repeatPassword"
        title="Password"
        type="password"
        register={register}
        error={errors.repeatPassword?.message}
      />
      <button type="button" onClick={() => handleNavigate("../home")}>
        Go to Home
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
