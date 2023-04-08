import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    background: {
      main: "#E5E5E5",
      secondary: "#F2F5F8",
      fill: "#C3CBD5",
    },
    button: {
      primary: "#3D485F",
      secondary: "#677489",
    },
    text: {
      danger: "#C64D32",
      highlight: "#3D485F",
      primary: "#495567",
      secondary: "#677489",
    },
    border: {
      main: "#C7CDD3",
    },
  },
  sizes: {
    border: ".2rem",
    screen: {
      minWidth: "32rem",
      maxWidth: "128rem",
    },
    radius: {
      section: "0.8rem",
      button: "1.6rem",
      avatar: "7.25rem",
    },
    text: {
      sm: "1.4rem",
      md: "1.6rem",
    },
    lineHeight: { main: "2.52rem" },
  },
  spacing: {
    xl: "3.6rem",
    l: "3.2rem",
    m: "2.8rem",
  },
};
