import React from "react";
import { Grid, Typography } from "@mui/material";

import SwitchButton from "./SwitchButton";

interface ThemeToggleSwitchProps {
  title: string;
  isDarkMode: boolean;
  onToggleDarkMode: (isDarkModeChecked: boolean) => void;
}

function ThemeToggleSwitch(props: ThemeToggleSwitchProps) {
  return (
    <React.Fragment>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={7}>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: 13 }}>
            Dark Mode
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <SwitchButton
            checked={props?.isDarkMode}
            onToggle={props?.onToggleDarkMode}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ThemeToggleSwitch;
