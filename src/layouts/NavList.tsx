import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

interface NavListProps {
  navList: Array<string>;
  direction: "row" | "column";
}

function NavList(props: NavListProps) {
  return (
    <React.Fragment>
      <List component={Stack} direction={props?.direction}>
        {props?.navList.map((item: string, index: number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                disableTypography={true}
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                  fontSize: 14,
                }}
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default NavList;
