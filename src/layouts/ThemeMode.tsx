import React, { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { ThemeModeContext } from "src/contexts";
import { getTheme, setTheme } from "src/utilities";

interface ThemeModeProps {
  children: React.ReactNode;
}

export default function ThemeMode(props: ThemeModeProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  async function updateTheme() {
    const theme = await getTheme();
    setMode(theme);
  }

  useEffect(() => {
    updateTheme();
  });

  const themeMode = useMemo(
    () => ({
      theme: mode,
      toggleThemeMode: () => {
        setMode((prevMode) => {
          const theme = prevMode === "light" ? "dark" : "light";
          setTheme(theme);
          return theme;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
