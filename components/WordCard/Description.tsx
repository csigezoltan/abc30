import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-blue-600">
      <b className="grminfolbl">Nyelvtan: </b>
      <span className="grminfo" lang="hu">
        {description}
      </span>
    </p>
  );
};

export default Description;
