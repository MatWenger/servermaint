import { api } from "./api";

export default async function getHealthcheck() {
  const response = await fetch(`${api}/health`);

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();

  return data;
}
