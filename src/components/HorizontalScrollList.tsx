import React from "react";
import { Box, colors, Tab, Tabs, Typography } from "@mui/material";

interface HorizontalScrollListProps {
  list: Array<string>;
}

function HorizontalScrollList(props: HorizontalScrollListProps) {
  const tagClicked = (value: string) => {};

  return (
    <React.Fragment>
      <Box
        sx={{
          my: 1,
        }}
      >
        <Typography
          variant={"h4"}
          fontFamily={"Montserrat"}
          sx={{ pl: 2, pt: 2, pb: 1 }}
        >
          Animals in the wild
        </Typography>
        <Box sx={{ bgcolor: "background.paper" }}>
          <Tabs
            value={false}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable tags"
            TabIndicatorProps={{ style: { display: "none" } }}
            TabScrollButtonProps={{}}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            {props?.list?.map((item: string, index: number) => (
              <Tab
                key={index}
                label={item}
                value={item?.toLowerCase()}
                onClick={() => tagClicked(item?.toLowerCase())}
                sx={{
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  borderStyle: "solid",
                  borderColor: colors?.grey[600],
                  borderWidth: 1,
                  borderRadius: 1,
                  mx: 1,
                  py: 0.5,
                  minHeight: 40,
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default HorizontalScrollList;
