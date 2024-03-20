import React from "react";
import Image from "next/image";
import Idioms from "@/components/WordCard/Idioms";

const Block = ({ data, idioms }: { data: any; idioms: any }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div>
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
        <div className="flex flex-col gap-1">
          <span className="text-red-600 font-medium">{data?.head?.lemma}</span>
          <div className="flex gap-3">
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
          <div className="flex gap-3">
            <p className="eg" lang="hu">
              ☀ {data?.body?.egs?.eg}
            </p>
          </div>
          {idioms && <Idioms data={idioms} />}
        </div>
      </div>
    </div>
  );
};

export default Block;
