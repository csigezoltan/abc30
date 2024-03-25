import React from "react";
import { v4 as uuidv4 } from "uuid";

const Example = ({ examples }: { examples: any[] }) => {
  if (examples.length > 0) {
    return (
      <div>
        {examples.map((example, index) => (
          <span key={`${uuidv4()}-${example.id}`}>
            <span className="text-orange-400">{"☀".repeat(index + 1)}</span>
            {example.value}
          </span>
        ))}
      </div>
    );
  }
};

export default Example;
