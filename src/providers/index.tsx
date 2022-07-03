import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
