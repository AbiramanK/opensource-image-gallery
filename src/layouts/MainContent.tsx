import React from "react";
import { Box, Toolbar } from "@mui/material";

interface MainContentProps {
  children: React.ReactNode;
}

function MainContent(props: MainContentProps) {
  return (
    <React.Fragment>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props?.children}
      </Box>
    </React.Fragment>
  );
}

export default MainContent;
