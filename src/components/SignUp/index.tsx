import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { IUserDataSignUp } from "../../types/types";

import {
  CssBox,
  CssButtonSignUp,
  CssEmailIcon,
  CssPaper,
  CssHomeIcon,
  CssPersonIcon,
  CssTextField,
  CssTypographyText,
  CssTypographyTitle,
  CssVisibilityIcon,
  CssVisibilityOffIcon,
} from "./styles";

const SignUp = () => {
  const history = useHistory();
  const { SignUp, getCepAddress, address } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

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
    setValue,
    formState: { errors },
  } = useForm<IUserDataSignUp>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: IUserDataSignUp) => {
    SignUp(data, history);
  };

  const validatedCEP = (event: any) => {
    const cep = event.target.value.replace(/\D/g, "");

    getCepAddress(cep);
  };

  useEffect(() => {
    if ("erro" in address) {
      setValue("address.cep", "");
      toast.warn("Atenção! Formato de CEP inválido!");
    }

    setValue("address.street", address.logradouro);
    setValue("address.district", address.bairro);
    setValue("address.city", address.localidade);
    setValue("address.state", address.uf);
  }, [address]);

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
            InputLabelProps={{
              shrink: true,
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
            InputLabelProps={{
              shrink: true,
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <CssTextField
            type="text"
            size="small"
            label="Identificação - casa/apartamento"
            margin="normal"
            variant="outlined"
            {...register("address.identification")}
            error={!!errors.address?.identification}
            helperText={errors.address?.identification?.message}
            InputProps={{
              endAdornment: <CssPersonIcon />,
            }}
            InputLabelProps={{
              shrink: true,
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
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={validatedCEP}
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
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <CssTextField
            id="outlined-number"
            type="number"
            size="small"
            label="Numero"
            margin="normal"
            variant="outlined"
            {...register("address.number")}
            error={!!errors.address?.number}
            helperText={errors.address?.number?.message}
            InputProps={{
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
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
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
            }}
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
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
            }}
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
              endAdornment: <CssHomeIcon />,
            }}
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
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
            InputLabelProps={{
              shrink: true,
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
