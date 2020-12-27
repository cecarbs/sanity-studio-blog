import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const YouTubePreview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);

  if (!id) return <div>Missing YouTube URL</div>;
  return <YouTube videoId={id} />;
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],

  preview: {
    select: {
      url: "url",
    },
    component: YouTubePreview,
  },
};
