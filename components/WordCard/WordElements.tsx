import React from "react";
import Block from "@/components/WordCard/Block";
import Block2 from "@/components/WordCard/Block2";

const WordElements = ({ word }: { word: any }) => {
  return (
    <div className="flex flex-col gap-2">
      <Block data={word["block-hun"]} idioms={word["idioms"]} />
      <Block2 data={word["block-eng"]} />
    </div>
  );
};

export default WordElements;
