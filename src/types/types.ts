export interface IAddress {
  identification: string;
  cep: string;
  street: string;
  number: number;
  district: string;
  complement?: string;
  city: string;
  state: string;
  reference_point?: string;
}

export interface IUserDataSignUp {
  name: string;
  cpf: string;
  phone: string;
  address: IAddress;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserDataSignIn {
  email: string;
  password: string;
}

export interface IValidatedCEP {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}
