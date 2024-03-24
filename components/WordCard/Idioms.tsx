import React from "react";
import { v4 as uuidv4 } from "uuid";

const Idioms = ({ idioms }: { idioms: any }) => {
  return idioms.map((idiom: any) => (
    <div key={`${uuidv4()} + ${idiom.id}`} className="text-[#3FB9A4]">
      <p>Szólás:</p>
      <p>
        <span className="font-bold">{idiom?.description}</span>
        <span> = {idiom?.value}</span>
      </p>
    </div>
  ));
};

export default Idioms;
