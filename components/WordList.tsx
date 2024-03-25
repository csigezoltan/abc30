import React from "react";
import WordCard from "@/components/WordCard";
import { v4 as uuidv4 } from "uuid";

const WordList = async ({ words }: { words: any }) => {
  if (words) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {words.map((word: any) => (
          <WordCard key={`${uuidv4()}-${word.id}`} word={word} />
        ))}
      </ul>
    );
  }
};

export default WordList;
