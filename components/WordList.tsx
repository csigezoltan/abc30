import React from "react";
import { ITEMS_PER_PAGE, WORDS_B } from "@/app/constant";
import WordCard from "@/components/WordCard";
import { unstable_noStore as noStore } from "next/cache";
import { v4 as uuidv4 } from "uuid";

const WordList = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const words = await fetchFilteredWords(query, currentPage);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {words.map((word, index) => (
        <WordCard key={`${uuidv4()}-${index}`} word={word} />
      ))}
    </ul>
  );
};

const fetchFilteredWords = async (query: string, currentPage: number) => {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    return WORDS_B.slice(offset, offset + ITEMS_PER_PAGE);
  } catch (error) {
    throw new Error("Failed to fetch words.");
  }
};

export default WordList;
