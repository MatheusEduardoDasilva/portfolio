import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#232323" },
    secondary: { main: "#4f8e3e" },
  },
  typography: { fontFamily: "Helvetica Neue" },
});
theme = responsiveFontSizes(theme);

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#232323" },
    secondary: { main: "#4f8e3e" },
    background: { default: "#121212", paper: "#1e1e1e" },
  },
  typography: { fontFamily: "Helvetica Neue" },
});
darkTheme = responsiveFontSizes(darkTheme);

export default theme;
export { darkTheme };
