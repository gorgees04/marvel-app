import {
  urlchategory,
  getCharacterById,
  getCharacterComicsUrl,
  urlChategoryByName,
} from "./utils";

/////////fetch characters//////////
export const fetchHerosCharaters = async (offset: string) => {
  const URL = urlchategory("characters", offset);
  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};

// fetching single character depending on id
export const fetchCharacterById = async (id: string) => {
  const URL = getCharacterById(id);
  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};

export const fetchCharacterByName = async (name: string, offset: string) => {
  const URL = urlChategoryByName("characters", name, offset);
  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};

// fetch comics
export const fetchCharacterComics = async (id: string) => {
  const URL = getCharacterComicsUrl(id);
  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};

////////////////////////////////////////

/////////fetch comics//////////
export const fetchComics = async (offset: string) => {
  const URL = urlchategory("comics", offset);
  console.log(URL);

  const res = await fetch(URL, { cache: "force-cache" });
  return res.json();
};
