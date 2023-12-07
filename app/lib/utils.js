// Marvel API form https://developer.marvel.com/
import { MD5 } from "crypto-js";

// geting api from .env
const API_URL = process.env.API_URL;

// the api require a hash in link
// using MD5 to make crypto line
const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};
// combine all the link (baseUrl + ts + apikey + hash)
const ts = Date.now().toString();
const apiKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const hash = getHash(ts, privateKey, apiKey);

const link = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;

// get image url
export const getImageUrl = (img) => {
  const IMG_SIZE = "portrait_fantastic";
  return `${img.path}/${IMG_SIZE}.${img.extension}`;
};

/////////characters section///////////

const charactersBaseUrl = `${API_URL}/v1/public/characters`;

export const urlCharacters = (offset) => {
  return `${charactersBaseUrl}?limit=30&offset=${offset}&${link}`;
};

export const urlCharactersByName = (name, offset) => {
  return `${charactersBaseUrl}?nameStartsWith=${name}&offset=${offset}&${link}`;
};

export const urlCharactersById = (id) => {
  return `${charactersBaseUrl}/${id}?${link}`;
};

export const urlCharactersComics = (id) => {
  return `${charactersBaseUrl}/${id}/comics?${link}`;
};

export const urlCharactersSeries = (id) => {
  return `${charactersBaseUrl}/${id}/series?${link}`;
};

export const urlCharactersEvents = (id) => {
  return `${charactersBaseUrl}/${id}/events?${link}`;
};

export const urlCharactersStories = (id) => {
  return `${charactersBaseUrl}/${id}/stories?${link}`;
};
////////////////////////////////////////////

/////////Comics section///////////
const comicsBaseUrl = `${API_URL}/v1/public/comics`;

export const urlComics = (offset) => {
  return `${comicsBaseUrl}?dateDescriptor=thisMonth&limit=50&offset=${offset}&${link}`;
};

export const urlComicsByTitle = (title, offset) => {
  return `${comicsBaseUrl}?titleStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlComicsById = (id) => {
  return `${comicsBaseUrl}/${id}?${link}`;
};

export const urlComicsCharacters = (id) => {
  return `${comicsBaseUrl}/${id}/characters?${link}`;
};

export const urlComicsCreators = (id) => {
  return `${comicsBaseUrl}/${id}/creators?${link}`;
};

export const urlComicsEvents = (id) => {
  return `${comicsBaseUrl}/${id}/events?${link}`;
};

export const urlComicsStories = (id) => {
  return `${comicsBaseUrl}/${id}/stories?${link}`;
};
/////////////////////////////////////////////////////

/////////Creators section///////////

const createrBaseUrl = `${API_URL}/v1/public/creators`;

export const urlCreators = (offset) => {
  return `${createrBaseUrl}?orderBy=suffix&limit=50&offset=${offset}&${link}`;
};

export const urlCreatorsByName = (name, offset) => {
  return `${createrBaseUrl}?nameStartsWith=${name}&offset=${offset}&${link}`;
};

export const urlCreatorsById = (id) => {
  return `${createrBaseUrl}/${id}?${link}`;
};

export const urlCreatorsComics = (id) => {
  return `${createrBaseUrl}/${id}/comics?${link}`;
};

export const urlCreatorsEvents = (id) => {
  return `${createrBaseUrl}/${id}/events?${link}`;
};

export const urlCreatorsSeries = (id) => {
  return `${createrBaseUrl}/${id}/series?${link}`;
};

export const urlCreatorsStories = (id) => {
  return `${createrBaseUrl}/${id}/stories?${link}`;
};

/////////////////////////////////////////////////////

/////////Series section///////////

const seriesBaseUrl = `${API_URL}/v1/public/series`;

export const urlSeries = (offset) => {
  return `${seriesBaseUrl}?orderBy=startYear&limit=50&offset=${offset}&${link}`;
};

export const urlSeriesByTitle = (title, offset) => {
  return `${seriesBaseUrl}?titleStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlSeriesById = (id) => {
  return `${seriesBaseUrl}/${id}?${link}`;
};

export const urlSeriesCharacters = (id) => {
  return `${seriesBaseUrl}/${id}/characters?${link}`;
};

export const urlSeriesComics = (id) => {
  return `${seriesBaseUrl}/${id}/comics?${link}`;
};

export const urlSeriesCreators = (id) => {
  return `${seriesBaseUrl}/${id}/creators?${link}`;
};

export const urlSeriesEvents = (id) => {
  return `${seriesBaseUrl}/${id}/events?${link}`;
};

export const urlSeriesStories = (id) => {
  return `${seriesBaseUrl}/${id}/stories?${link}`;
};

/////////////////////////////////////////////////////

/////////Events section///////////
const eventsBaseUrl = `${API_URL}/v1/public/events`;

export const urlEvents = (offset) => {
  return `${eventsBaseUrl}?limit=50&offset=${offset}&${link}`;
};

export const urlEventsByTitle = (title, offset) => {
  return `${eventsBaseUrl}?nameStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlEventsById = (id) => {
  return `${eventsBaseUrl}/${id}?${link}`;
};

export const urlEventsCharacters = (id) => {
  return `${eventsBaseUrl}/${id}/characters?${link}`;
};

export const urlEventsComics = (id) => {
  return `${eventsBaseUrl}/${id}/comics?${link}`;
};

export const urlEventsCreators = (id) => {
  return `${eventsBaseUrl}/${id}/creators?${link}`;
};

export const urlEventsSeries = (id) => {
  return `${eventsBaseUrl}/${id}/series?${link}`;
};

export const urlEventsStories = (id) => {
  return `${eventsBaseUrl}/${id}/stories?${link}`;
};
/////////////////////////////////////////////////////
