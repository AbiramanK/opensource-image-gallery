import React, { useContext, useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import SideNav from "./SideNav";
import Header from "./Header";
import MainContent from "./MainContent";
import { APP_DISPLAY_NAME } from "src/constants";
import { ThemeModeContext } from "src/contexts";

interface BaseLayoutProps {
  children: React.ReactNode;
  onSearchBoxChange: (query: string) => void;
}

const drawerWidth = 240;
const navItems = ["Explore", "Collection", "Community"];

function BaseLayout(props: BaseLayoutProps) {
  const themeContext = useContext(ThemeModeContext);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const isDarkMode = themeContext?.theme === "light" ? false : true;

  function handleDrawerToggle() {
    setMobileOpen((prevState) => !prevState);
  }

  function handleDarkModeToggle(isDarkModeChecked: boolean) {
    themeContext?.toggleThemeMode();
  }

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          appDisplayName={APP_DISPLAY_NAME}
          navItems={navItems}
          onDrawerToggle={handleDrawerToggle}
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleDarkModeToggle}
          onSearchBoxChange={props?.onSearchBoxChange}
        />
        <SideNav
          drawerWidth={drawerWidth}
          navItems={navItems}
          onDrawerToggle={handleDrawerToggle}
          shouldMobileOpen={mobileOpen}
          appDisplayName={APP_DISPLAY_NAME}
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleDarkModeToggle}
        />
        <MainContent>{props?.children}</MainContent>
      </Box>
    </React.Fragment>
  );
}

export default BaseLayout;
