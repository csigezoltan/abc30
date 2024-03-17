import React from "react";
import Image from "next/image";

const Buttons = ({ setShowVideo }: { setShowVideo: any }) => {
  return (
    <div className="flex gap-2 px-6 py-6 bg-gray-100 justify-center">
      <button
        className="rounded-2xl overflow-hidden p-2 bg-white speak1"
        onClick={() => setShowVideo(true)}
      >
        <Image src="/images/speak1.png" alt="speak1" width="60" height="44" />
      </button>
      <button className="rounded-2xl overflow-hidden p-2 bg-white speak2">
        <Image src="/images/speak2.png" alt="speak2" width="60" height="44" />
      </button>
      <button className="rounded-2xl overflow-hidden p-2 bg-white write">
        <Image src="/images/write.png" alt="write" width="60" height="44" />
      </button>
      <button className="rounded-2xl overflow-hidden p-2 bg-white exercise">
        <Image
          src="/images/exercise.png"
          alt="exercise"
          width="60"
          height="44"
        />
      </button>
    </div>
  );
};

export default Buttons;
