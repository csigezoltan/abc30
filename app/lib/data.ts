import { unstable_noStore as noStore } from "next/cache";
import { V1_WORDS } from "@/app/constant";

export async function fetchPageData(currentPage: number) {
  noStore();

  try {
    return V1_WORDS;
  } catch (error) {
    console.error("Api Error:", error);
    throw new Error("Failed to fetch page.");
  }
}
