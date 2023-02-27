import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

import NavList from "./NavList";
import { SearchComponent, ThemeToggleSwitch } from "src/components";

interface HeaderProps {
  onDrawerToggle: Function;
  appDisplayName: string;
  navItems: Array<string>;
  isDarkMode: boolean;
  onToggleDarkMode: (isDarkModeChecked: boolean) => void;
}

function Header(props: HeaderProps) {
  const [shouldOpenSearch, setShouldOpenSearch] = useState<boolean>(false);

  function onSearchToggle() {
    setShouldOpenSearch(!shouldOpenSearch);
  }

  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "center" },
            px: 1,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: { xs: 0.5, sm: 0.1 },
              display: { xs: shouldOpenSearch ? "none" : "block", sm: "block" },
              fontFamily: "Galada",
              fontSize: 30,
              textAlign: "left",
            }}
          >
            {props?.appDisplayName}
          </Typography>
          <Box
            sx={{
              flexGrow: 0.6,
              display: { xs: shouldOpenSearch ? "block" : "none", sm: "block" },
            }}
          >
            <SearchComponent placeholder="Search Images here" />
          </Box>
          <Box
            sx={{
              flexGrow: 0.2,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
            }}
          >
            <NavList navList={props?.navItems} direction={"row"} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              ml: 10,
            }}
          >
            <ThemeToggleSwitch
              title={"Dark Mode"}
              isDarkMode={props?.isDarkMode}
              onToggleDarkMode={props?.onToggleDarkMode}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              columnGap: 1,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="search"
              edge="start"
              onClick={() => onSearchToggle()}
              sx={{
                pb: 0,
                display: {
                  xs: shouldOpenSearch ? "none" : "block",
                  sm: "none",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => props?.onDrawerToggle()}
              sx={{
                pb: 0,
                display: {
                  xs: shouldOpenSearch ? "none" : "block",
                  sm: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="search"
              edge="start"
              onClick={() => onSearchToggle()}
              sx={{
                pb: 0,
                px: 0,
                display: {
                  xs: shouldOpenSearch ? "block" : "none",
                  sm: "none",
                },
                textAlign: "center",
              }}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
