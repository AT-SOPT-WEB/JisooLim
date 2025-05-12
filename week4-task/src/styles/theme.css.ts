import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "2.5rem",
  },
  color: {
    red: "#FF0000",
    gray: "#D3D3D3",
    black: "#222222",
    white: "#ffffff",
    blue01: "	#AEC6CF",
    blue02: "#7BAFC9",
  },
});
