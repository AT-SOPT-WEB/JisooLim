import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

// 애니메이션
const menuContainerSlide = keyframes({
  "0%": { opacity: 0, transform: "translateY(-20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const itemAppear = keyframes({
  "0%": { opacity: 0, transform: "translateX(-20px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: vars.zIndex.header,
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

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const menuButton = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,

  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
    },
  },
});

export const menuIcon = style({
  width: 27,
  height: 25,
});

export const dropdownMenu = style({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  top: 70,
  left: 0,
  width: "100vw",
  backgroundColor: vars.color.blue01,
  zIndex: vars.zIndex.dropdown,
  padding: "1rem",
  gap: "1.5rem",
  alignItems: "flex-start",
  paddingLeft: 20,
  animation: `${menuContainerSlide} 0.3s ease-out forwards`,
  overflow: "hidden",
  transition: "max-height 0.3s ease-out, opacity 0.2s ease-out",

  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
    },
  },
});

export const dropdownMenuItem = style({
  opacity: 0,
  animation: `${itemAppear} 0.3s ease-out forwards`,
});

export const link = style({
  display: "flex",
  alignItems: "center",
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
