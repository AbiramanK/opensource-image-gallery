import React from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";

import NavList from "./NavList";
import { ThemeToggleSwitch } from "src/components";

interface SideNavProps {
  onDrawerToggle: Function;
  navItems: Array<string>;
  drawerWidth: number;
  shouldMobileOpen: boolean;
  appDisplayName: string;
  isDarkMode: boolean;
  onToggleDarkMode: (isDarkModeChecked: boolean) => void;
}

function SideNav(props: SideNavProps) {
  return (
    <React.Fragment>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={props?.shouldMobileOpen}
          onClose={() => props?.onDrawerToggle()}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: props?.drawerWidth,
            },
          }}
        >
          <Box
            onClick={() => props?.onDrawerToggle()}
            sx={{ textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ my: 2, fontFamily: "Galada", fontSize: 30 }}
            >
              {props?.appDisplayName}
            </Typography>
            <Divider />
            <NavList navList={props?.navItems} direction="column" />
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              position: "absolute",
              bottom: 20,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <ThemeToggleSwitch
              title={"Dark Mode"}
              isDarkMode={props?.isDarkMode}
              onToggleDarkMode={props?.onToggleDarkMode}
            />
          </Box>
        </Drawer>
      </Box>
    </React.Fragment>
  );
}

export default SideNav;
