import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  paddingTop: 85,
});

export const title = style({
  marginBottom: "2rem",
  fontSize: vars.fontSize.xl,
  fontWeight: 600,
});

export const label = style({
  display: "block",
  width: "40rem",
  marginBottom: "1rem",
  textAlign: "left",
  fontWeight: 600,
  fontSize: vars.fontSize.md,
});

export const input = style({
  width: "40rem",
  padding: "1.2rem 1.5rem",
  marginBottom: "1rem",
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

export const errorMessage = style({
  color: vars.color.red,
  fontSize: vars.fontSize.sm,
  margin: "0 0 1rem 1rem",
  width: "40rem",
  textAlign: "left",
  lineHeight: 1.4,
});

export const bottomSection = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  marginTop: "2rem",
});

export const linkText = style({
  fontWeight: 600,
  color: vars.color.blue02,
});
