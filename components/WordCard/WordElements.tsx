import React from "react";
import Block from "@/components/WordCard/Block";
import Block2 from "@/components/WordCard/Block2";

const WordElements = ({ word }: { word: any }) => {
  return (
    <>
      <Block data={word["block-hun"]} idioms={word["idioms"]} />
      <hr className="my-4" />
      <Block2 data={word["block-eng"]} />
    </>
  );
};

export default WordElements;
