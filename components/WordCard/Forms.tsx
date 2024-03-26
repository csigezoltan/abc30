import React from "react";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";

const Forms = ({ forms, wordClass }: { forms: any[]; wordClass: string }) => {
  return forms.map((form, index) => (
    <span key={`${uuidv4()}-${form.id}`}>
      <span>{parse(formatValue(form.value, wordClass))}</span>
      {forms.length - 1 > index && <span className="text-blue-600"> ◉ </span>}
    </span>
  ));
};

const formatValue = (value: string, wordClass: string) => {
  if (wordClass === "ige") {
    return value.replace(
      /\(([^)]+)\)/g,
      '(<span class="text-red-600">$1</span>)',
    );
  }

  return value;
};

export default Forms;
