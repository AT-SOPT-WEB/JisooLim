import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 30,
  backgroundColor: vars.color.blue01,
});

export const headerLeft = style({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
});

export const link = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.color.black,
  fontSize: vars.fontSize.md,
  fontWeight: 500,
  textDecoration: "none",

  ":hover": {
    color: vars.color.white,
  },
});

export const logoutButton = style({
  color: vars.color.black,
  fontSize: vars.fontSize.md,
  fontWeight: 500,
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",

  ":hover": {
    color: vars.color.white,
  },
});

export const headerRight = style({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  fontSize: vars.fontSize.md,
  fontWeight: 500,
});

export const userIcon = style({
  width: 27,
  height: 25,
});
