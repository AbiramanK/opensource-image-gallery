import { Box, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import React from "react";

import ImageContentBar from "./ImageContentBar";
import { ImageInterface } from "src/types";

interface PhotographySeriesProps {
  images: ImageInterface[] | undefined;
}

function PhotographySeries(props: PhotographySeriesProps) {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  if (!props?.images) {
    return (
      <React.Fragment>
        <Box
          sx={{
            m: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />;
        </Box>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ImageList
        // variant="quilted"
        variant="masonry"
        cols={3}
        rowHeight={375}
        gap={20}
        sx={{ px: 1 }}
      >
        {props?.images.map((image: ImageInterface, index: number) => (
          <ImageListItem
            key={image?.urls?.full}
            cols={1}
            rows={1}
            sx={{ borderRadius: 4 }}
          >
            <img
              {...srcset(image?.urls?.full, image?.width / 12 ?? 121, 3, 3)}
              alt={image?.alt_description!}
              loading="lazy"
              style={{
                borderRadius: 12,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }}
            />
            <ImageContentBar
              image={{
                likes: image?.likes!,
              }}
              author={{
                name: image?.user?.name!,
                username: image?.user?.username!,
                picture: image?.user?.profile_image?.medium!,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </React.Fragment>
  );
}

export default PhotographySeries;
