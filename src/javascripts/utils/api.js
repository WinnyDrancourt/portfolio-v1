export const BASE_URL = "http://localhost:1337";

export const fetchStrapi = async (e) => {
  const response = await fetch(`${BASE_URL}${e}`);
  const data = await response.json();
  return data.data;
};
