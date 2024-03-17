"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    console.log(`Searching... ${term}`);
    params.set("page", "1");

    if (term) {
      params.set("letter", term);
    } else {
      params.delete("letter");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="bg-slate-100 w-full text-xl text-center my-5 rounded-2xl p-4">
      <div className="flex flex-wrap justify-center gap-1">
        {characters.map((c, index) => (
          <button
            key={`${c}-${index}`}
            className="text-gray-500 border w-[48px] h-[48px] bg-white rounded-xl hover:bg-blue-600 hover:text-white"
            onClick={() => handleSearch(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
