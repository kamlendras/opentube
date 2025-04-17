"use client";
import * as React from "react";
import Link from 'next/link'
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Dot from "./dot";
import { createTheme } from "@mui/material/styles";
import HoverVideoPlayer from "react-hover-video-player";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const mdTheme = createTheme();
export default function Component(props: { video: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; img: string | Blob | undefined; channel: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; avatar: string | undefined; heading: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; view: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; date: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
<Link style={{ color: 'inherit', textDecoration: 'inherit'}} href="/watch">
    <Paper elevation={24} square>
      <Grid
        container
        columnSpacing={0}
        rowSpacing={0}
        sx={{
          width: 340,
          // height: 50,
        }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <HoverVideoPlayer
            videoSrc={props.video}
            // We should display an image over the video while it is paused
            pausedOverlay={
              <img
                src={props.img}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </Grid>

        <Grid
          container
          // columnSpacing={1.5} rowSpacing={1.5}
        >
          <Grid size={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }} paddingLeft={0.3}>
            <Avatar alt="no internet" src={props.avatar} />
          </Grid>

          <Grid size={{ xs: 6, sm: 6, md: 8, lg: 8, xl: 8 }}>
            <Typography
              variant="body1"
              gutterBottom
              className="textoverflow"
            >
              {props.heading}
            </Typography>
            <Grid container columnSpacing={2} rowSpacing={0}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {props.channel}{" "}
                  <CheckCircleIcon style={{ fontSize: "1rem" }} />
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {props.view} <CircleIcon style={{ fontSize: "4" }} />
                  {props.date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 0.5, sm: 0.5, md: 10.5, lg: 0.5, xl: 0.5 }}>
            <Dot />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Link>
  );
}
