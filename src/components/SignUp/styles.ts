import { styled } from "@material-ui/styles";
import { Button, TextField, Paper, Typography, Box } from "@material-ui/core";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  EmailOutlined,
  Person,
} from "@material-ui/icons";

export const CssBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#219653",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#219653",
    },
  },
  width: "260px",
  margin: "10px 0px",
  "@media (min-width:780px)": {
    width: "360px",
  },
});

export const CssPaper = styled(Paper)({
  padding: "20px",
  width: "260px",
  "@media (min-width:780px)": {
    width: "360px",
  },
});

export const CssTypographyTitle = styled(Typography)({
  margin: "10px 0px",
  color: "#333333",
  fontSize: "18px",
  fontWeight: "bold",
});

export const CssButtonSignUp = styled(Button)({
  color: "#828282",
  width: "260px",
  margin: "10px 0px",
  backgroundColor: "#E0E0E0",
  "@media (min-width:780px)": {
    width: "360px",
  },
});

export const CssPersonIcon = styled(Person)({
  color: "#828282",
  fontSize: "18px",
});

export const CssEmailIcon = styled(EmailOutlined)({
  color: "#828282",
  fontSize: "18px",
});

export const CssVisibilityIcon = styled(VisibilityOutlined)({
  color: "#828282",
  fontSize: "20px",
  cursor: "pointer",
});

export const CssVisibilityOffIcon = styled(VisibilityOffOutlined)({
  color: "#828282",
  fontSize: "20px",
  cursor: "pointer",
});

export const CssTypographyText = styled(Typography)({
  margin: "10px 0px",
  color: "#828282",
});
