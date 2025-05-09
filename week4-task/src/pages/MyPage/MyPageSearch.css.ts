import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const resultListWrapper = style({
  marginTop: "2rem",
  width: "40rem",
  maxHeight: "20rem",
  overflowY: "auto",
  background: "#f9f9f9",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
  padding: "0.5rem 0",
});

export const resultItem = style({
  padding: "1.2rem",
  marginBottom: "1rem",
  borderRadius: "0.5rem",
  fontSize: "1.1rem",
  textAlign: "left",
});
const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinner = style({
  margin: "2rem 0",
  width: "3rem",
  height: "3rem",
  border: `0.4rem solid ${vars.color.gray}`,
  borderTop: `0.4rem solid ${vars.color.blue01}`,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
