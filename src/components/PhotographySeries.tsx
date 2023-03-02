import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageContentBar, { ImageContentBarProps } from "./ImageContentBar";
import SiriLoader from "./SiriLoader";
import { Forbidden, NoResultFound } from "./errors";

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
  error: number;
}

function PhotographySeries(props: PhotographySeriesProps) {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  if (props?.error! === 403) {
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
          <Forbidden />
        </Box>
      </React.Fragment>
    );
  }

  if (
    !props?.error &&
    props?.images! &&
    props?.images?.length! === 0 &&
    !props?.isLoading
  ) {
    return (
      <React.Fragment>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NoResultFound />
        </Box>
      </React.Fragment>
    );
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
          <SiriLoader />
        </Box>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ImageList
        variant="masonry"
        cols={isXs ? 1 : 3}
        rowHeight={375}
        gap={20}
        sx={{ px: 1 }}
      >
        {props?.images.map((image: PhotographyInterface, index: number) => (
          <ImageListItem key={index} cols={1} rows={1} sx={{ borderRadius: 4 }}>
            <img
              {...srcset(
                image?.image,
                image?.width / 12 ?? 121,
                isXs ? 1 : 3,
                isXs ? 1 : 3
              )}
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
