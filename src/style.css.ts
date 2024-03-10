import { style } from "@vanilla-extract/css";

export const menu = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const indicator = style({
  position: "absolute",
  top: 0,
  left: 0,
  transitionProperty: "width, background,transform",
  transitionDuration: "0.25s",
  transitionTimingFunction: "ease",
  opacity: 0,
  backgroundColor: "#ebebeb",
  borderRadius: 30,
});

export const list = style({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyle: "none",
  position: "relative",
});

export const item = style({
  cursor: "pointer",
});
