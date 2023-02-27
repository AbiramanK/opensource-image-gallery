import React from "react";
import { Switch } from "@mui/material";

interface SwitchButtonProps {
  checked: boolean;
  onToggle: (isChecked: boolean) => void;
}

function SwitchButton(props: SwitchButtonProps) {
  return (
    <React.Fragment>
      <Switch
        checked={props?.checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props?.onToggle(event?.target?.checked)
        }
        inputProps={{ "aria-label": "controlled" }}
      />
    </React.Fragment>
  );
}

export default SwitchButton;
