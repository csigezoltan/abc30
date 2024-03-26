import React from "react";
import Image from "next/image";

const WordImage = async ({ imagePath }: { imagePath: string }) => {
  return (
    <div>
      <Image
        height={60}
        width={200}
        src={`https://abc30.ingenimind.com/api/streaming/images/${imagePath}`}
        style={{
          width: "100%",
          height: "auto",
        }}
        alt={""}
      />
    </div>
  );
};

export default WordImage;
