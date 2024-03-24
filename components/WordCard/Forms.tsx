import React from "react";
import { v4 as uuidv4 } from "uuid";

const Forms = ({ forms }: { forms: any[] }) => {
  return forms.map((form, index) => (
    <span key={`${uuidv4()}-${form.id}`}>
      <span>{form.value}</span>
      {forms.length - 1 > index && <span className="text-blue-600"> ◉ </span>}
    </span>
  ));
};

export default Forms;
