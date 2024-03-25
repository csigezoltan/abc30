"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Filter = ({ letters }: { letters: any }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((letter) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("letterId", letter);

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  if (letters) {
    return (
      <div className="bg-slate-100 w-full text-md text-center my-5 rounded-xl p-4">
        <div className="flex flex-wrap justify-center gap-1">
          {letters?.map((letter: any, index: number) => (
            <button
              key={`${letter}-${index}`}
              className="text-gray-500 border p-2 bg-white rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={() => handleSearch(letter.id)}
            >
              {letter.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
};

export default Filter;
