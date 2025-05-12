import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/theme.css";

export const passwordInputWrapper = style({
  display: "flex",
  alignItems: "center",
  width: "40rem",
  marginBottom: "1rem",
  border: "1px solid",
  borderColor: vars.color.gray,
  borderRadius: "1rem",
  overflow: "hidden",
});

export const passwordInput = style({
  flex: 1,
  padding: "1.2rem 1.5rem",
  border: "none",
  fontSize: vars.fontSize.md,
  outline: "none",
});

export const passwordToggleBtn = style({
  background: "none",
  border: "none",
  padding: "0 1.2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});


