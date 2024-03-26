"use client";

import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const WritePopup = ({
  word,
  showWrite,
  setShowWrite,
}: {
  word: string;
  showWrite: boolean;
  setShowWrite: any;
}) => {
  const cancelButtonRef = useRef(null);

  const example = {
    bajnok: [
      {
        title: "Hogy írjuk helyesen: bajnok vagy balynok?",
      },
      { title: "Írj két szinonimát a bajnok szóhoz!" },
    ],
    bál: [
      {
        title: "Hogy kell elválasztani a bál szavunkat?",
      },
      {
        title: "Melyik szó áll előbb az ábécében: bal vagy bál?",
      },
    ],
    Balaton: [
      {
        title: "Szerinted miért kell nagy kezdőbetűvel írni a Balaton nevét?",
      },
      {
        title: "Mi a Balaton többes számú alakja?",
      },
    ],
    bárány: [
      {
        title: "Melyik ünnepünkhöz köthető a bárány?",
      },
      {
        title: "Egészítsd ki a szólást: Ártatlan, mint a … bárány?",
      },
    ],
    barátság: [
      {
        title: "Melyik helyes: barátság – batácság – baráccság?",
      },
    ],
    bátor: [
      {
        title:
          "Összekeveredtek a betűk! Melyik szót (szavakat) tudod kirakni ezekből a betűkből? o, t, á, b, r",
      },
      {
        title: "A közmondás szerint mi a bátraké?",
      },
    ],
  };

  // @ts-ignore
  const data: any = example[word];
  console.log(data);

  return (
    <Transition.Root show={showWrite} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowWrite}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl transition-all max-w-screen-xl">
                <div className="flex flex-col gap-8 p-4 py-8">
                  {data?.map((d: any, index: number) => (
                    <div key={`${word}-data-${index}`}>
                      <p>{d.title}</p>
                      <p>.............................</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShowWrite(false)}
                    ref={cancelButtonRef}
                  >
                    Bezárás
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WritePopup;
