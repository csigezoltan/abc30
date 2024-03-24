import React from "react";
import WordCard from "@/components/WordCard";
import { v4 as uuidv4 } from "uuid";
import { fetchPageData } from "@/app/lib/data";

const WordList = async ({ currentPage }: { currentPage: number }) => {
  const pageData = await fetchPageData(currentPage);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {pageData.words.map((word: any) => (
        <WordCard key={`${uuidv4()}-${word.id}`} word={word} />
      ))}
    </ul>
  );
};

export default WordList;
