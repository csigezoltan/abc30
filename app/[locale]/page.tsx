import { unstable_setRequestLocale } from "next-intl/server";

import { getTranslations } from "next-intl/server";
import Filter from "@/components/Filter";
import WordList from "@/components/WordList";
import Pagination from "@/components/pagination";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import { fetchLetters, fetchPageData } from "@/app/lib/data";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export default async function Index({
  searchParams,
  params: { locale },
}: {
  params: { locale: string };
  searchParams?: {
    page?: string;
  };
}) {
  unstable_setRequestLocale(locale);

  const letters = await fetchLetters();
  const pageData = await fetchPageData(searchParams);

  const totalPages = 200;

  return (
    <div className="max-w-screen-lg mx-auto min-h-screen">
      <div className="flex flex-col bg-white p-4 md:p-10 min-h-screen shadow shadow-gray-300">
        <Pagination
          totalPages={totalPages}
          numberTextInSourceLanguage={pageData.numberTextInSourceLanguage}
          numberTextInTargetLanguage={pageData.numberTextInTargetLanguage}
        />
        <Suspense fallback={<Loader />}>
          <h1 className="text-3xl text-center font-bold my-5 py-4 bg-[#F8E4DE] text-[#C41130] rounded-2xl">
            b, B
          </h1>
          <WordList words={pageData?.words} />
          <div className="flex w-full justify-center">
            <Filter letters={letters} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
