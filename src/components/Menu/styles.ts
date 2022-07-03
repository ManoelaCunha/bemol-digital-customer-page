import { styled } from "@material-ui/styles";
import { ShoppingCart, ExitToApp } from "@material-ui/icons";
import { AppBar, Box, Toolbar } from "@material-ui/core";

export const CssAppBar = styled(AppBar)({
  backgroundColor: "#E0E0E0",
});

export const CssToolbar = styled(Toolbar)({
  margin: "0 auto",
  width: "300px",
  height: "80px",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "0px",
  "@media (min-width:1024px)": {
    width: "950px",
  },
  "@media (min-width:1280px)": {
    width: "1280px",
  },
});

export const CssBoxImg = styled(Box)({
  marginLeft: "10px",
  marginTop: "5px",
});

export const CssBoxIcon = styled(Box)({
  display: "flex",
});

export const CssShoppingCart = styled(ShoppingCart)({
  color: "#828282",
  fontSize: "28px",
});

export const CssExitToApp = styled(ExitToApp)({
  color: "#828282",
  fontSize: "28px",
});
