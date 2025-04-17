import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextAppProvider } from "@toolpad/core/nextjs";
import LinearProgress from "@mui/material/LinearProgress";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Navigation } from "@toolpad/core/AppProvider";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import HistoryIcon from "@mui/icons-material/History";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import theme from "../theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Tube",
  description: "Open Media Software",
};

const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    segment: "shorts",
    title: "Shorts",
    icon: <PlayCircleOutlineOutlinedIcon />,
  },
  {
    segment: "subscriptions",
    title: "Subscriptions",
    icon: <SubscriptionsOutlinedIcon />,
  },
  {
    kind: "divider",
  },
  {
    segment: "history",
    title: "History",
    icon: <HistoryIcon />,
  },
  {
    segment: "playlists",
    title: "Playlists",
    icon: <PlaylistPlayOutlinedIcon />,
  },
  {
    segment: "your_videos",
    title: "Your videos",
    icon: <SmartDisplayOutlinedIcon />,
  },
  {
    segment: "watch_later",
    title: "Watch later",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    segment: "liked_videos",
    title: "Liked videos",
    icon: <ThumbUpOutlinedIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "explore",
  },
  {
    segment: "trending",
    title: "Trending",
    icon: <WhatshotOutlinedIcon />,
  },
  {
    segment: "shopping",
    title: "Shopping",
    icon: <LocalMallOutlinedIcon />,
  },
  {
    segment: "music",
    title: "Music",
    icon: <MusicNoteOutlinedIcon />,
  },
  {
    segment: "movies",
    title: "Movies",
    icon: <MovieCreationOutlinedIcon />,
  },
  {
    segment: "live",
    title: "Live",
    icon: <LiveTvOutlinedIcon />,
  },
  {
    segment: "gaming",
    title: "Gaming",
    icon: <SportsEsportsOutlinedIcon />,
  },
  {
    segment: "news",
    title: "News",
    icon: <NewspaperIcon />,
  },
  {
    segment: "sports",
    title: "Sports",
    icon: <EmojiEventsOutlinedIcon />,
  },
  {
    segment: "courses",
    title: "Courses",
    icon: <SchoolOutlinedIcon />,
  },
  {
    segment: "fashion",
    title: "Fashion",
    icon: <DiamondOutlinedIcon />,
  },
  {
    segment: "podcasts",
    title: "Podcasts",
    icon: <PodcastsOutlinedIcon />,
  },
  {
    kind: "divider",
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
  {
    segment: "report_istory",
    title: "Report history",
    icon: <OutlinedFlagIcon />,
  },
  {
    segment: "help",
    title: "Help",
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    segment: "send_feedback",
    title: "Send feedback",
    icon: <FeedbackOutlinedIcon />,
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider navigation={NAVIGATION} theme={theme}>
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
