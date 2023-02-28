import { ThumbUpOutlined } from "@mui/icons-material";
import { Avatar, colors, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

interface ImageAuthorContentInterface {
  name: string;
  username: string;
  picture: string;
}

interface ImageContentInterface {
  likes: number;
}

interface ImageContentBarProps {
  image: ImageContentInterface;
  author: ImageAuthorContentInterface;
}

function ImageContentBar(props: ImageContentBarProps) {
  return (
    <React.Fragment>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{
          py: 1,
          px: 1,
          borderStyle: "none",
          borderWidth: 1,
          borderColor: colors?.grey[300],
          borderRadius: 3,
          borderTopStyle: "none",
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={3}>
              <Avatar
                src={props?.author?.picture}
                alt={props?.author?.name}
                sx={{
                  width: 54,
                  height: 54,
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Typography
                variant="body1"
                color={colors.common.white}
                fontFamily={"Montserrat"}
                fontSize={16}
              >
                {props?.author?.name}
              </Typography>
              <Typography
                variant="body2"
                color={colors.grey[300]}
                fontFamily={"Montserrat"}
                sx={{ fontStyle: "italic" }}
              >
                @{props?.author?.username}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={4}>
            <IconButton>
              <ThumbUpOutlined sx={{ color: colors?.grey[300] }} />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={5}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="body2"
              color={colors.common.white}
              sx={{
                pt: 0.5,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              {props?.image?.likes}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ImageContentBar;
