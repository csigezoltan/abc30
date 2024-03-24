import { unstable_setRequestLocale } from "next-intl/server";

import { getTranslations } from "next-intl/server";
import Filter from "@/components/Filter";
import WordList from "@/components/WordList";
import Pagination from "@/components/pagination";
import { Suspense } from "react";

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

  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 200;

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col bg-white p-4 md:p-10">
        <Pagination totalPages={totalPages} />
        <h1 className="text-4xl text-center font-bold my-5 py-4 bg-[#F8E4DE] text-[#C41130] rounded-2xl">
          b, B
        </h1>
        <Suspense fallback="loading...">
          <WordList currentPage={currentPage} />
        </Suspense>
        <div className="flex w-full justify-center">
          <Filter />
        </div>
      </div>
    </div>
  );
}
