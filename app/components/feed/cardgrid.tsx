"use client";
import * as React from "react";
import Card from "./card";
function refreshMessages() {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
  // Array.from(new Array(40))
  return messageExamples.map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Icourses() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <>
      {messages.map(
        ({ img, video, heading, avatar, date, channel, view }) => (
          <>
            <div className="grid">
              <Card
                img={img}
                video={video}
                heading={heading}
                avatar={avatar}
                date={date}
                view={view}
                channel={channel}
              />
            </div>
          </>
        )
      )}
    </>
  );
}
const messageExamples = [
  {
    img: "/blender_thumbnail_1.jpg",
    video: "/video.mp4",
    heading: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    avatar: "/blender_icon.jpg",
    date: " 10 years ago",
    view: "21M views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_2.jpg",
    video: "/3.mp4",
    heading: "Blender 4.4 - Showcase Reel",
    avatar: "/blender_icon.jpg",
    date: "4 weeks ago",
    view: "33K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_3.jpg",
    video: "/3.mp4",
    heading: "What's New in Blender 4.4! Official Overview",
    avatar: "/blender_icon.jpg",
    date: "6 day ago",
    view: "40K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_4.jpg",
    video: "/3.mp4",
    heading: "Education SIG – Blender Conference 2024",
    avatar: "/blender_icon.jpg",
    date: "9 day ago",
    view: "47K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_5.jpg",
    video: "/3.mp4",
    heading: "Blender 4.3 New Features Official Overview",
    avatar: "/blender_icon.jpg",
    date: "4 months  ago",
    view: "213K views",
    channel: "Blender",
    link: "/watch",
  },

  {
    img: "/blender_thumbnail_6.jpg",
    video: "/video.mp4",
    heading:
      "Gizmos, For-Each Zone and more! NEW Geometry Nodes features - Blender 4.3",
    avatar: "/blender_icon.jpg",
    date: " 4 months ago",
    view: "32K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_7.jpg",
    video: "/3.mp4",
    heading: "BLENDERHEADS - Ep.07",
    avatar: "/blender_icon.jpg",
    date: " 4 months ago",
    view: "22K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_1.jpg",
    video: "/video.mp4",
    heading: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    avatar: "/blender_icon.jpg",
    date: " 10 years ago",
    view: "21M views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_2.jpg",
    video: "/3.mp4",
    heading: "Blender 4.4 - Showcase Reel",
    avatar: "/blender_icon.jpg",
    date: "4 weeks ago",
    view: "33K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_3.jpg",
    video: "/3.mp4",
    heading: "What's New in Blender 4.4! Official Overview",
    avatar: "/blender_icon.jpg",
    date: "6 day ago",
    view: "40K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_4.jpg",
    video: "/3.mp4",
    heading: "Education SIG – Blender Conference 2024",
    avatar: "/blender_icon.jpg",
    date: "9 day ago",
    view: "47K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_5.jpg",
    video: "/3.mp4",
    heading: "Blender 4.3 New Features Official Overview",
    avatar: "/blender_icon.jpg",
    date: "4 months  ago",
    view: "213K views",
    channel: "Blender",
    link: "/watch",
  },

  {
    img: "/blender_thumbnail_6.jpg",
    video: "/video.mp4",
    heading:
      "Gizmos, For-Each Zone and more! NEW Geometry Nodes features - Blender 4.3",
    avatar: "/blender_icon.jpg",
    date: " 4 months ago",
    view: "32K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/blender_thumbnail_7.jpg",
    video: "/3.mp4",
    heading: "",
    avatar: "/blender_icon.jpg",
    date: " 4 months ago",
    view: "22K views",
    channel: "Blender",
    link: "/watch",
  },
  {
    img: "/nasa1.jpg",
    video: "/2.mp4",
    heading: "We Are Going",
    avatar: "/nasa.jpg",
    date: " 2 min ago",
    view: "17M views ",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa2.jpg",
    video: "/2.mp4",
    heading: "How We Are Going to the Moon - 4K",
    avatar: "/nasa.jpg",
    date: " 4 years ago",
    view: "10M views",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa3.jpg",
    video: "/2.mp4",
    heading: "Welcome Back! Discovery Lands Safely at Kennedy",
    avatar: "/nasa.jpg",
    date: "14 years ago",
    view: "4.4M views",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa4.jpg",
    video: "/3.mp4",
    heading: "NASA Artemis Lunar Terrain Vehicle (Official NASA Trailer)",
    avatar: "/nasa.jpg",
    date: " 1 month ago",
    view: "17K views ",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa5.jpg",
    video: "/4.mp4",
    heading: "NASA Astronauts Aboard Space Station Huddle Up for Super Bowl",
    avatar: "/nasa.jpg",
    date: " 2 months ago",
    view: "14K views ",
    channel: "NASA",
    link: "/watch",
  },

  {
    img: "/nasa1.jpg",
    video: "/2.mp4",
    heading: "We Are Going (Official NASA Trailer)",
    avatar: "/nasa.jpg",
    date: " 2 min ago",
    view: "17M views ",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa2.jpg",
    video: "/2.mp4",
    heading: "How We Are Going to the Moon - 4K",
    avatar: "/nasa.jpg",
    date: " 4 years ago",
    view: "10M views",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa3.jpg",
    video: "/2.mp4",
    heading: "Welcome Back! Discovery Lands Safely at Kennedy",
    avatar: "/nasa.jpg",
    date: "14 years ago",
    view: "4.4M views",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa4.jpg",
    video: "/3.mp4",
    heading: "NASA Artemis Lunar Terrain Vehicle (Official NASA Trailer)",
    avatar: "/nasa.jpg",
    date: " 1 month ago",
    view: "17K views ",
    channel: "NASA",
    link: "/watch",
  },
  {
    img: "/nasa5.jpg",
    video: "/4.mp4",
    heading: "NASA Astronauts Aboard Space Station Huddle Up for Super Bowl",
    avatar: "/nasa.jpg",
    date: " 2 months ago",
    view: "14K views ",
    channel: "NASA",
    link: "/watch",
  },
];
