export const API_URL = "https://billions-api.nomadcoders.workers.dev/";

export async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
