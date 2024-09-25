// 유튜브 비디오 ID를 추출하는 함수
import React from 'react';

type YouTubePlayerProps = { id: string; url?: never } | { id?: never; url: string };

const extractVideoId = (url: string) => {
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|user\/(?:[^/\n\s]+\/)+|(?:[^/\n\s]+\/)+)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(youtubeRegex);
  if (match) {
    return match[1];
  }
  return null;
};

function YouTube({ url, id }: YouTubePlayerProps) {
  const videoId = id ?? extractVideoId(url);

  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

export default YouTube;
