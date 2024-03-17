import React from "react";
import MessageIcon from "@/components/icons/MessageIcon";

const Block2 = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-2xl overflow-hidden">
      <span className="text-red-600 text-xl font-medium">
        ▶ {data?.trs?.tr}
      </span>
      <div className="flex gap-3">
        <MessageIcon
          width="16px"
          height="16px"
          className="text-[#50d71e] shrink-0 mt-1"
        />
        <p className="egtr">{data?.egtrs?.egtr || "-"}</p>
      </div>
    </div>
  );
};

export default Block2;
