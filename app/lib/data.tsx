import { fetchHeros } from "./utils";

export const fetchHerosCharaters = async () => {
  const URL = fetchHeros("characters", "100");
  console.log(URL);

  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};

export const fetchCharacter = async (id: string) => {
  const URL = fetchHeros("characters", "", id);
  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};
