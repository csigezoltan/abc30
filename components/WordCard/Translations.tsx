import React from "react";
import { v4 as uuidv4 } from "uuid";
import Example from "@/components/WordCard/Example";
import clsx from "clsx";

const Translations = ({
  translations,
  targetLanguageExamples,
}: {
  translations: any[];
  targetLanguageExamples: any[];
}) => {
  if (translations.length > 0) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap gap-2">
          {translations.map((translation) => (
            <span
              key={`${uuidv4()} + ${translation.id}`}
              className="font-medium"
            >
              <span
                className={clsx("text-xl", {
                  "text-red-600": translation.type === 1,
                  "text-gray-500": translation.type === 2,
                })}
              >
                ▶{" "}
              </span>
              <span
                className={clsx({
                  "text-gray-500": translation.type === 2,
                })}
              >
                {translation?.value}
              </span>
            </span>
          ))}
        </div>
        {targetLanguageExamples && (
          <Example examples={targetLanguageExamples} />
        )}
      </div>
    );
  }
};

export default Translations;
