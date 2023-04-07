import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  breakpoints: {
    xs: "300px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
    "3xl": "1600px",
    "4xl": "1800px",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    dark: {
      bgcolor: "#0e1012",
      bgcolorl: "#161a1d",
      pink: "#d2478f",
      blue: "#1dabda",
      blue2: "#922d50",
      dark_bg: "rgb(0, 0, 0)",
    },
    light: {
      bgcolor: "#d4ece5",
      bgcolorl: "rgb(255, 255, 255)",
      pink: "#ed0a71",
      blue: "#033b59",
      blue2: "#8d818c",
      dark_bg: "#ffffffc9",
      white: "rgb(0, 0, 0)",
      textcolor: "rgb(68, 68, 68)",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </>
);
