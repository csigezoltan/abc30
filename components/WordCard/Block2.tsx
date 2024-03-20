import React from "react";

const Block2 = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-1 rounded-2xl overflow-hidden">
      <span className="text-red-600 font-medium">▶ {data?.trs?.tr}</span>
      <div className="flex gap-3">
        <p className="egtr">☀ {data?.egtrs?.egtr || "-"}</p>
      </div>
    </div>
  );
};

export default Block2;
