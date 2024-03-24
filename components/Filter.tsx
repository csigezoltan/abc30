"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((letter) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", letter);

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const characters = [
    { value: "A" },
    { value: "B" },
    { value: "C" },
    { value: "D" },
    { value: "E" },
    { value: "F" },
    { value: "G" },
    { value: "H" },
    { value: "I" },
    { value: "K" },
    { value: "L" },
    { value: "M" },
    { value: "N" },
    { value: "O" },
    { value: "P" },
    { value: "Q" },
    { value: "R" },
    { value: "S" },
    { value: "T" },
    { value: "V" },
    { value: "X" },
    { value: "Y" },
    { value: "Z" },
  ];
  return (
    <div className="bg-slate-100 w-full text-md text-center my-5 rounded-xl p-4">
      <div className="flex flex-wrap justify-center gap-1">
        {characters.map((c, index) => (
          <button
            key={`${c}-${index}`}
            className="text-gray-500 border w-[32px] h-[32px] bg-white rounded-lg hover:bg-blue-600 hover:text-white"
            onClick={() => handleSearch(c.value)}
          >
            {c.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
