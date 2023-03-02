import React, { useState } from "react";
import { alpha, InputBase, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.light, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

interface SearchComponentProps {
  placeholder: string;
  autoFocus: boolean;
  onChange?: (query: string) => void;
  searchBoxDisabled?: boolean;
}

function SearchComponent(props: SearchComponentProps) {
  const [search, setSearch] = useState<string>("");

  function onChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSearch(event?.target?.value!);
    if (props?.onChange!) {
      props?.onChange!(event?.target?.value!);
    }
  }

  return (
    <React.Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          key="search"
          placeholder={props?.placeholder}
          inputProps={{ "aria-label": "search" }}
          autoFocus={props?.autoFocus}
          onChange={onChange}
          disabled={props?.searchBoxDisabled! ?? false}
          value={search}
        />
      </Search>
    </React.Fragment>
  );
}

export default SearchComponent;
