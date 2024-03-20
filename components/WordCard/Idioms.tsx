import React from "react";

const Idioms = ({ data }: { data: any }) => {
  return (
    <div className="text-[#3FB9A4]">
      <p>Szólás:</p>
      <p className="idiomgrp">
        <span className="idiom font-bold">{data?.idiomgroup?.idiom}</span>
        <span className="expl"> = {data?.idiomgroup?.expl}</span>
      </p>
    </div>
  );
};

export default Idioms;
