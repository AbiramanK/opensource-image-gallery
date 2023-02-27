import React from "react";
import { Paper, Typography, colors } from "@mui/material";
import { Box } from "@mui/system";

import mountain from "src/assets/images/mountain.jpg";
import SearchComponent from "./SearchComponent";

interface JumbotronProps {}

function Jumbotron(props: JumbotronProps) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          resizeMode: "contain",
          backgroundImage: `url(${mountain})`,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <Typography
            variant="h4"
            color={colors.common.white}
            sx={{
              fontFamily: "Montserrat",
            }}
          >
            Download High Quality Images by creators
          </Typography>
          <Typography
            variant="body2"
            color={colors.common.white}
            sx={{ fontFamily: "Montserrat", fontWeight: "100" }}
          >
            Over 2.4 million+ stock images by our talented community
          </Typography>
          <Box sx={{ width: "75%", color: "white" }}>
            <SearchComponent
              autoFocus={false}
              placeholder="Search high resolution Images"
            />
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
}

export default Jumbotron;
