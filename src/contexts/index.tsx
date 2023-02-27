import React from "react";

const ThemeModeContext = React.createContext({
  theme: "light" || "dark",
  toggleThemeMode: () => {},
});

export { ThemeModeContext };
