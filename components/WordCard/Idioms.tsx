import React from "react";

const Idioms = ({ data }: { data: any }) => {
  return (
    <div>
      <p className="font-bold">Szólás:</p>
      <p className="idiomgrp">
        <span className="idiom">{data?.idiomgroup?.idiom}</span>
        <span className="expl"> = {data?.idiomgroup?.expl}</span>
      </p>
    </div>
  );
};

export default Idioms;
