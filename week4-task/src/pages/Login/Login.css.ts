import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const title = style({
  marginBottom: "2rem",
  fontSize: vars.fontSize.xl,
  fontWeight: 600,
});

export const input = style({
  width: "40rem",
  padding: "1.2rem 1.5rem",
  marginBottom: "1.5rem",
  border: "1px solid",
  borderColor: vars.color.gray,
  borderRadius: "1rem",
  fontSize: vars.fontSize.md,
});

export const button = style({
  width: "40rem",
  padding: "1.2rem",
  marginBottom: "1.5rem",
  border: "none",
  borderRadius: "1rem",
  fontSize: vars.fontSize.lg,
  fontWeight: 600,
  backgroundColor: vars.color.gray,
  color: vars.color.white,
});

export const buttonActive = style({
  backgroundColor: vars.color.blue01,
  cursor: "pointer",
});

export const linkText = style({
  color: vars.color.blue02,
});
