import SignIn from "../../components/SignIn";
import { ContainerLogin } from "./styles";
import { Box } from "@material-ui/core";
//import img from "../../assets/Mask Group.png";

const Login = () => {
  return (
    <ContainerLogin>
      <Box style={{ margin: "30px" }}>
        {/*<img src={img} alt="logo" width="200" />*/}
      </Box>
      <SignIn />
    </ContainerLogin>
  );
};

export default Login;
