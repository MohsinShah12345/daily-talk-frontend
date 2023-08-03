import { createTheme } from "@mui/material/styles";
const theme: any = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007bff",
    },
  },
  typography: {
    fontFamily: ["Arial ", "sans-serif "].join(","),
  },
});
export default theme;
