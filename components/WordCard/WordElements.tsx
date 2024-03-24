import React from "react";
import Image from "next/image";
import Forms from "@/components/WordCard/Forms";
import Example from "@/components/WordCard/Example";
import Idioms from "@/components/WordCard/Idioms";
import Translations from "@/components/WordCard/Translations";
import Description from "@/components/WordCard/Description";

const WordElements = ({ word }: { word: any }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div>
          <Image
            height={60}
            width={200}
            sizes="100vw"
            src={`${word?.imagePath}${word?.cursiveImage}`}
            alt={word?.lemma || ""}
            style={{
              width: "auto",
              height: "60px",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl text-red-600 font-bold">{word?.lemma}</span>
          <div className="grm">
            <span className="hyph">{word?.hyphenation}</span>
            <span className="text-gray-500 font-medium" lang="hu">
              {" "}
              «{word?.wordClass}»{" "}
            </span>
            {word?.forms && <Forms forms={word?.forms} />}
          </div>
          {word.description && <Description description={word.description} />}
          {word?.sourceLanguageExamples && (
            <Example examples={word.sourceLanguageExamples} />
          )}
          {word?.translations && (
            <Translations
              translations={word.translations}
              targetLanguageExamples={word?.targetLanguageExamples}
            />
          )}
          {word?.idioms && <Idioms idioms={word.idioms} />}
        </div>
      </div>
    </div>
  );
};

export default WordElements;
