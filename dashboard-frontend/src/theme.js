import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

// Get desired token
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // palette values for dark mode
          background: { default: "#212529" },
          primary: {
            light: "#6C757D",
            main: "#495057",
            dark: "#343A40",
            contrastText: "#FFFFFF",
          },
          text: {
            primary: "#CED4DA",
          },
        }
      : {
          // palette values for dark mode

          background: { default: "#F8F9FA" },
          primary: {
            light: "#E9ECEF",
            main: "#DEE2E6",
            dark: "#CED4DA",
            contrastText: "#FFFFFF",
          },
          text: {
            primary: "#343A40",
          },
        }),
  },
});

// color mode context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// custom hook that return theme and colorMode value, colorMode value will hold toggle func logic
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
