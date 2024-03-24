import React from "react";
import { v4 as uuidv4 } from "uuid";

const Example = ({ examples }: { examples: any[] }) => {
  if (examples.length > 0) {
    return (
      <div className="flex flex-col gap-1">
        {examples.map((example) => (
          <p key={`${uuidv4()}-${example.id}`} className="flex gap-1">
            <span>☀</span>
            {example.value}
          </p>
        ))}
      </div>
    );
  }
};

export default Example;
