import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { IUserDataSignUp, IAddress } from "../../types/types";

import {
  CssBox,
  CssButtonSignUp,
  CssEmailIcon,
  CssPaper,
  CssPersonIcon,
  CssTextField,
  CssTypographyText,
  CssTypographyTitle,
  CssVisibilityIcon,
  CssVisibilityOffIcon,
} from "./styles";

const SignUp = () => {
  const history = useHistory();
  const { SignUp, getCepAddress } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório*"),
    cpf: yup.string().required("Cpf obrigatório*"),
    phone: yup.string().required("Celular obrigatório*"),
    address: yup.object({
      identification: yup.string().required("Identificação obrigatória*"),
      cep: yup.string().max(8, "Máximo 8 dígitos").required("Cep obrigatório*"),
      street: yup.string().required("Rua/Avenida obrigatória*"),
      number: yup.number().required("Numero obrigatório*"),
      district: yup.string().required("Bairro obrigatório*"),
      city: yup.string().required("Cidade obrigatória*"),
      state: yup.string().required("Estado obrigatório*"),
    }),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Informe um Email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(4, "Mínimo 4 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataSignUp>({ resolver: yupResolver(formSchema) });

  // const handlerEvent = (event: any) => {
  //   if (event.key === "Enter") {
  //     setState(event.key);
  //   }
  // };

  const onSubmit = (data: IUserDataSignUp) => {
    console.log(state);
    console.log(data.address.cep.replace(/\D/g, ""));
    getCepAddress(data.address.cep.replace(/\D/g, ""));
    //SignUp(data, history);
  };

  return (
    <CssPaper elevation={3}>
      <CssBox>
        <CssTypographyTitle variant="h5">CADASTRO</CssTypographyTitle>
        <CssTypographyText variant="subtitle2">
          <Link to="/">Retornar para o Login</Link>
        </CssTypographyText>
      </CssBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Nome"
            margin="normal"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Cpf - somente dígitos"
            margin="normal"
            variant="outlined"
            {...register("cpf")}
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Celular - somente dígitos"
            margin="normal"
            variant="outlined"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Identificação"
            margin="normal"
            variant="outlined"
            {...register("address.identification")}
            error={!!errors.address?.identification}
            helperText={errors.address?.identification?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Cep - somente dígitos"
            margin="normal"
            variant="outlined"
            {...register("address.cep")}
            error={!!errors.address?.cep}
            helperText={errors.address?.cep?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            onKeyPress={(event) => {
              console.log(event.detail);
              if (event.key === "Enter") {
                setState(true);
              }
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Rua/Avenida"
            margin="normal"
            variant="outlined"
            {...register("address.street")}
            error={!!errors.address?.street}
            helperText={errors.address?.street?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            //value={state && add.street}
          />
        </div>
        <div>
          <CssTextField
            type="number"
            size="small"
            label="Numero"
            margin="normal"
            variant="outlined"
            {...register("address.number")}
            error={!!errors.address?.number}
            helperText={errors.address?.number?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Bairro"
            margin="normal"
            variant="outlined"
            {...register("address.district")}
            error={!!errors.address?.district}
            helperText={errors.address?.district?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            //value={state && add.district}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Cidade"
            margin="normal"
            variant="outlined"
            {...register("address.city")}
            error={!!errors.address?.city}
            helperText={errors.address?.city?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            //value={state && add.city}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Estado"
            margin="normal"
            variant="outlined"
            {...register("address.state")}
            error={!!errors.address?.state}
            helperText={errors.address?.state?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            //value={state && add.state}
          />
        </div>
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
          <CssButtonSignUp type="submit" size="large" variant="contained">
            Cadastrar
          </CssButtonSignUp>
        </div>
      </form>
    </CssPaper>
  );
};

export default SignUp;
