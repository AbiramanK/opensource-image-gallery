import React from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Avatar,
  Box,
  colors,
  Grid,
  CircularProgress,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  Download,
  Info,
  Share,
  ThumbUpAltOutlined,
  Close as CloseIcon,
} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface ImagePopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  relatedTags: Array<string>;
  authorName: string;
  authorUsername: string;
  authorPicture: string;
  totalLikes: number;
  totalDownloads: number;
  image: string;
}

function ImagePopup(props: ImagePopupProps) {
  return (
    <React.Fragment>
      <div>
        <Dialog
          fullScreen
          open={props?.open}
          onClose={props?.onClose}
          TransitionComponent={Transition}
          sx={{ backgroundColor: "transparent" }}
          PaperProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <AppBar sx={{ position: "relative", backgroundColor: "#3b3b3b00" }}>
            <Toolbar>
              <Box
                sx={{
                  flex: 1,
                  width: "90%",
                }}
                component="div"
              >
                <Typography
                  fontFamily="Galada"
                  textOverflow="ellipsis"
                  variant="h4"
                  noWrap
                  overflow={"hidden"}
                  width={"90%"}
                >
                  {props?.title}
                </Typography>
              </Box>
              <IconButton
                edge="start"
                color="inherit"
                onClick={props?.onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {!props?.image && (
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
          )}
          {props?.image && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Grid
                container
                justifyContent={"center"}
                sx={{ backgroundColor: "transparent" }}
              >
                <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box
                    component={"img"}
                    src={props?.image}
                    alt={props?.title}
                    width="100%"
                    height={{ xs: "100%", sm: "85vh" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{
                    backgroundColor: colors.grey[100],
                  }}
                >
                  <Grid container sx={{ height: "100%" }}>
                    <Grid item>
                      <Grid container rowGap={3} sx={{ pl: 2, pt: 2 }}>
                        <Grid item xs={12}>
                          <Grid container alignItems={"center"}>
                            <Grid item xs={3} sm={2}>
                              <Avatar
                                sx={{ width: 56, height: 56 }}
                                src={props?.authorPicture}
                                alt={props?.authorName}
                              />
                            </Grid>
                            <Grid item xs={9} sm={10}>
                              <Grid container alignItems={"center"}>
                                <Grid item xs={12}>
                                  <Typography
                                    variant="body1"
                                    color={colors.common.black}
                                    fontFamily={"Montserrat"}
                                    fontSize={16}
                                  >
                                    {props?.authorName}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography
                                    variant="body2"
                                    color={colors.grey[600]}
                                    fontFamily={"Montserrat"}
                                    sx={{ fontStyle: "italic" }}
                                  >
                                    @{props?.authorUsername}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item>
                              <Typography
                                sx={{
                                  fontFamily: "Montserrat",
                                  color: colors.common.black,
                                }}
                              >
                                Related Tags
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Box
                                id="related-tags-box"
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  maxHeight: 175,
                                  rowGap: 1,
                                  columnGap: 1,
                                  overflowY: "auto",
                                  my: 2,
                                }}
                              >
                                {props?.relatedTags?.map(
                                  (tag: string, index: number) => (
                                    <Button
                                      key={index}
                                      variant="outlined"
                                      sx={{
                                        textTransform: "none",
                                        fontFamily: "Montserrat",
                                        fontSize: 10,
                                      }}
                                    >
                                      {tag}
                                    </Button>
                                  )
                                )}
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <Grid container sx={{ px: 1 }} alignItems={"center"}>
                        <Grid item xs={6} sm={8}>
                          <Grid container>
                            <Grid item>
                              <IconButton sx={{ color: colors.grey[600] }}>
                                <Share fontSize="large" />
                              </IconButton>
                            </Grid>
                            <Grid item>
                              <IconButton sx={{ color: colors.grey[600] }}>
                                <Info fontSize="large" />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                          <Button
                            variant="outlined"
                            color="success"
                            startIcon={<Download />}
                          >
                            Download
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid
                              item
                              xs={6}
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Grid container alignItems={"center"}>
                                <Grid item>
                                  <IconButton sx={{ color: colors.grey[600] }}>
                                    <Download fontSize="large" />
                                  </IconButton>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    sx={{
                                      fontFamily: "Montserrat",
                                      color: colors.grey[800],
                                    }}
                                  >
                                    {props?.totalDownloads}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={6}>
                              <Grid container justifyContent={"flex-end"}>
                                <Grid item xs={4} sm={2}>
                                  <IconButton sx={{ color: colors.grey[600] }}>
                                    <ThumbUpAltOutlined fontSize="large" />
                                  </IconButton>
                                </Grid>
                                <Grid
                                  item
                                  xs={3}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Montserrat",
                                      color: colors.grey[800],
                                    }}
                                  >
                                    {props?.totalLikes}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default ImagePopup;
