import { Box, CircularProgress, ImageList, ImageListItem } from "@mui/material";
import React from "react";

import ImageContentBar, { ImageContentBarProps } from "./ImageContentBar";

export interface PhotographyInterface extends ImageContentBarProps {
  id: string;
  image: string;
  description: string;
  altDescription: string;
  width: number;
  height: number;
}

interface PhotographySeriesProps {
  images: PhotographyInterface[] | undefined;
  onSelect: (id: string) => void;
  isLoading: boolean;
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

  if (!props?.images || props?.isLoading) {
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
          <CircularProgress />
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
        {props?.images.map((image: PhotographyInterface, index: number) => (
          <ImageListItem key={index} cols={1} rows={1} sx={{ borderRadius: 4 }}>
            <img
              {...srcset(image?.image, image?.width / 12 ?? 121, 3, 3)}
              alt={image?.altDescription!}
              loading="lazy"
              style={{
                borderRadius: 12,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                cursor: "pointer",
              }}
              onClick={() => {
                props?.onSelect(image?.id!);
              }}
            />
            <ImageContentBar
              likes={image?.likes!}
              authorName={image?.authorName!}
              authorUsername={image?.authorUsername!}
              authorPicture={image?.authorPicture!}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </React.Fragment>
  );
}

export default PhotographySeries;
