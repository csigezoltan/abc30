"use client";

import React, { useState } from "react";
import Buttons from "@/components/WordCard/Buttons";
import dynamic from "next/dynamic";
import WordElements from "@/components/WordCard/WordElements";
import { unstable_noStore as noStore } from "next/cache";
const VideoPlayer = dynamic(() => import("@/components/WordCard/VideoPlayer"), {
  ssr: false,
});

const WordCard = ({ word }: { word: any }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  noStore();

  console.log(word);

  return (
    <li className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden shadow">
      <div className="flex-grow px-6 py-8">
        <WordElements word={word} />
      </div>
      <Buttons
        setShowVideo={setShowVideo}
        setVideoSrc={setVideoSrc}
        word={word}
      />
      {showVideo && videoSrc && (
        <VideoPlayer
          url={videoSrc}
          showVideo={showVideo}
          setShowVideo={setShowVideo}
          word={word}
        />
      )}
    </li>
  );
};

export default WordCard;
