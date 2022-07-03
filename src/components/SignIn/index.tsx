import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { IUserDataSignIn } from "../../types/types";

import {
  CssButtonSignIn,
  CssButtonSignUp,
  CssEmailIcon,
  CssPaper,
  CssTextField,
  CssTypographyText,
  CssTypographyTitle,
  CssVisibilityIcon,
  CssVisibilityOffIcon,
} from "./styles";

const SignIn = () => {
  const history = useHistory();
  const { SignIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Informe um Email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(4, "Mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataSignIn>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: IUserDataSignIn) => {
    SignIn(data, history);
  };

  return (
    <CssPaper elevation={3}>
      <CssTypographyTitle variant="h5">LOGIN</CssTypographyTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CssTextField
            type="email"
            size="small"
            label="Email"
            margin="normal"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              endAdornment: <CssEmailIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type={!showPassword ? "password" : "text"}
            size="small"
            label="Senha"
            margin="normal"
            variant="outlined"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: showPassword ? (
                <CssVisibilityOffIcon onClick={handleShowPassword} />
              ) : (
                <CssVisibilityIcon onClick={handleShowPassword} />
              ),
            }}
          />
        </div>
        <div>
          <CssButtonSignIn type="submit" size="large" variant="contained">
            Entrar
          </CssButtonSignIn>
        </div>
      </form>
      <div>
        <CssTypographyText variant="subtitle2">
          Não tem uma conta? Então Cadastre-se!
        </CssTypographyText>
      </div>
      <div>
        <CssButtonSignUp
          size="large"
          variant="contained"
          onClick={() => history.push("/register")}
        >
          Cadastrar
        </CssButtonSignUp>
      </div>
    </CssPaper>
  );
};

export default SignIn;
