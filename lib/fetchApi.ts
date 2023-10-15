/** @format */

const BASE_URL = "https://restcountries.com/v3.1";

export async function getWorld(url: string) {
  try {
    const searchUrl = `${BASE_URL}/${url}`;
    const response = await fetch(searchUrl);
    console.log(searchUrl);
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
