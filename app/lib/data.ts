import { unstable_noStore as noStore } from "next/cache";

export async function fetchPageData(searchParams: any) {
  noStore();

  let query = "pageNumber=36";
  if (searchParams?.page) {
    query = `pageNumber=${searchParams?.page}`;
  } else if (searchParams?.letterId) {
    query = `letterId=${searchParams?.letterId}`;
  }

  try {
    const dynamicData = await fetch(
      process.env.API_BASE_URL + `/pages?${query}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-version": "1.0",
        },
      },
    );

    return dynamicData.json();
  } catch (error) {
    console.error("Api Error:", error);
    throw new Error("Failed to fetch page.");
  }
}

export async function fetchLetters() {
  noStore();

  try {
    const dynamicData = await fetch(process.env.API_BASE_URL + `/letters`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-version": "1.0",
      },
    });

    return dynamicData.json();
  } catch (error) {
    console.error("Api Error:", error);
    throw new Error("Failed to fetch letters.");
  }
}

export async function fetchImage(imagePath: string) {
  noStore();

  console.log(process.env.API_BASE_URL);

  try {
    const imageResponse = await fetch(
      `${process.env.API_BASE_URL}/streaming/images/${imagePath}`,
      {
        method: "GET",
        /*headers: {
          accept: "image/jpeg",
          "x-api-version": "1.0",
        },*/
      },
    );

    let obj = await imageResponse.blob();
    return URL.createObjectURL(obj);
  } catch (error) {
    console.error("Api Error:", error);
    throw new Error("Failed to fetch image.");
  }
}
