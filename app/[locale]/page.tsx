import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { getTranslations } from "next-intl/server";
import Filter from "@/components/Filter";
import WordList from "@/components/WordList";
//import { ITEMS_PER_PAGE, WORDS_B } from "@/app/constant";

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

export default function Index({
  searchParams,
  params: { locale },
}: {
  params: { locale: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  //const totalPages = WORDS_B.length / ITEMS_PER_PAGE;

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col bg-white p-4 md:p-10">
        <h1 className="text-2xl text-center font-bold my-5">{t("app_name")}</h1>
        <WordList query={query} currentPage={currentPage} />
        <div className="mt-10 flex w-full justify-center">
          <Filter />
          {/*<Pagination totalPages={totalPages} />*/}
        </div>
      </div>
    </div>
  );
}
