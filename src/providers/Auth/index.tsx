import { createContext, useContext, useState, ReactNode } from "react";
import { IUserDataSignIn, IUserDataSignUp } from "../../types/types";
import { toast } from "react-toastify";
import { History } from "history";
import { customersApi, cepApi } from "../../services";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  authToken: string;
  SignUp: (userData: IUserDataSignUp, history: History) => void;
  SignIn: (userData: IUserDataSignIn, history: History) => void;
  Logout: (history: History) => void;
  getCepAddress: (cep: string) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@BemolDigital:token") || ""
  );

  const SignUp = (userData: IUserDataSignUp, history: History) => {
    customersApi
      .post("api/users/register/", userData)
      .then((_) => {
        toast.success("Sucesso ao criar a conta!");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const SignIn = (userData: IUserDataSignIn, history: History) => {
    customersApi
      .post("api/users/login/", userData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@BemolDigital:token", response.data.token);
        setAuthToken(response.data.token);
        toast.success("Sucesso ao fazer Login!");
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  const Logout = (history: History) => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  const getCepAddress = (cep: string) => {
    cepApi
      .get(`${cep}/json/`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{ authToken, Logout, SignIn, SignUp, getCepAddress }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
