import React from "react";
import Image from "next/image";
import MessageIcon from "@/components/icons/MessageIcon";
import Idioms from "@/components/WordCard/Idioms";
import SquareInfoIcon from "@/components/icons/SquareInfoIcon";

const Block = ({ data, idioms }: { data: any; idioms: any }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 bg-gray-100 rounded-2xl overflow-hidden">
        <div className="bg-white p-2">
          <Image
            height={60}
            width={200}
            sizes="100vw"
            src={`/images/words/b/${data?.head?.cursive}.jpg`}
            alt="bab kézírással"
            style={{
              width: "auto",
              height: "60px",
            }}
          />
        </div>
        <div className="flex flex-col gap-2 p-4 ">
          <span className="text-red-600 text-xl font-medium">
            ▶ {data?.head?.lemma}
          </span>
          <div className="flex gap-3">
            <MessageIcon
              width="16px"
              height="16px"
              className="text-[#50d71e] shrink-0 mt-1"
            />
            <p className="eg" lang="hu">
              {data?.body?.egs?.eg}
            </p>
          </div>
          <div className="flex gap-3">
            <SquareInfoIcon
              width="16px"
              height="16px"
              className="text-blue-600 shrink-0 mt-1"
            />
            <div>
              <div className="grm">
                <span className="hyph">{data?.body?.grm?.hyph}</span>
                <span className="pos text-gray-600" lang="hu">
                  {" "}
                  «{data?.body?.grm?.pos}»{" "}
                </span>
                <span className="forms">
                  <span className="form" lang="hu">
                    {data?.body?.grm?.forms?.plur}
                  </span>
                  <span className="bluebullet"> ◉ </span>
                  <span className="form" lang="hu">
                    {data?.body?.grm?.forms?.poss}
                  </span>
                </span>
              </div>
              {/*<p className="my-4">
            <b className="grminfolbl">Nyelvtan: </b>
            <span className="grminfo" lang="hu">
              {data?.body?.grminfo}
            </span>
          </p>*/}
            </div>
          </div>
          {idioms && (
            <>
              <hr className="my-2 border-gray-300" />
              <Idioms data={idioms} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
