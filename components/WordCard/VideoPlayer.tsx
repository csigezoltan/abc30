"use client";

import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ReactPlayerProps } from "react-player";
import ReactPlayer from "react-player/lazy";
import WordElements from "@/components/WordCard/WordElements";

/*const INITIAL_STATE: ReactPlayerProps = {
  playing: false,
  controls: false,
  volume: 0.8,
  light: true,
  progress: {
    playedSeconds: 0,
  },
  duration: 0,
};*/

// https://github.com/cookpete/react-player

const VideoPlayer: React.FC<ReactPlayerProps> = (props) => {
  const { word, url, showVideo, setShowVideo } = props;
  const ref = useRef(null);
  const cancelButtonRef = useRef(null);

  const onReady = () => {
    // @ts-ignore
    ref?.current?.getInternalPlayer("dash");
  };

  /*const getDashData = () => {
    const reactPlayer = ref.current;
    dashPlayer = reactPlayer?.getInternalPlayer("dash");

    console.log(`🚀 ~ file: App.tsx:137 ~ dashPlayer:`, dashPlayer);

    dashPlayer?.extend(
      "RequestModifier",
      function () {
        console.log(`🚀 ~ file: App.tsx:112 ~ RequestModifier:`, 1111111111);

        return {
          modifyRequestHeader: function (xhr, { url }) {
            console.log(`🚀 ~ file: App.tsx:107 ~ url:`, url);
            /!* Add custom header. Requires to set up Access-Control-Allow-Headers in your *!/
            /!* response header in the server side. Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader *!/
            /!* xhr.setRequestHeader('DASH-CUSTOM-HEADER', 'MyValue'); *!/
            // xhr.setRequestHeader("DASH-CUSTOM-HEADER", "MyValue");
            return xhr;
          },
          modifyRequestURL: function (url) {
            console.log(`🚀 ~ file: App.tsx:126 ~ url:`, url);

            /!* Modify url adding a custom query string parameter *!/
            return url + "?customQuery=value";
          },
          modifyRequest(request) {
            console.log(`🚀 ~ file: App.tsx:126 ~ request:`, request);

            /!* Modify the entire request. Allows for async modifications *!/
            var url = new URL(request.url);
            console.log(`🚀 ~ file: App.tsx:115 ~ url:`, url);

            if (!/\.mpd$/.test(url.pathname)) {
              return;
            }

            return fetch("https://time.akamai.com")
              .then(function (response) {
                return response.text();
              })
              .then(function (text) {
                url.searchParams.set("now", text);
                request.url = url.toString();
              });
          },
        };
      },
      true,
    );
    console.log(`🚀 ~ file: App.tsx:137 ~ isReady:`, dashPlayer?.isReady());
  };*/

  return (
    <Transition.Root show={showVideo} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowVideo}
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
                <div className="flex flex-col lg:flex-row gap-8 p-4">
                  <div className="flex-shrink-0 w-full max-w-[320px]">
                    <WordElements word={word} />
                  </div>
                  <div className="flex rounded overflow-hidden align-middle ">
                    <div className="border-4 border-gray-100">
                      <ReactPlayer
                        url={url}
                        ref={ref}
                        width="100%"
                        height="100%"
                        controls
                        playing
                        onError={(error) => {
                          console.log(`🚀 ~ file: App.tsx:259 ~ error:`, error);
                        }}
                        onReady={() => onReady()}
                        config={{
                          file: {
                            forceDASH: true,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {/*<button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setShowVideo(false)}
                  >
                    Deactivate
                  </button>*/}
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setShowVideo(false)}
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

export default VideoPlayer;
