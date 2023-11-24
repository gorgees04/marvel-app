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

// get image url
export const getImageUrl = (img) => {
  const IMG_SIZE = "portrait_fantastic";
  return `${img.path}/${IMG_SIZE}.${img.extension}`;
};

/////////chategory section///////////
export const urlchategory = (chategory, offset) => {
  const baseUrl = `${API_URL}/v1/public/${chategory}`;

  const url = `${baseUrl}?&limit=50&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  return url;
};

/////////characters section///////////
export const getCharacterById = (id) => {
  const baseUrl = `${API_URL}/v1/public/characters`;
  return `${baseUrl}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
};

export const urlChategoryByName = (chategory, name, offset) => {
  const baseUrl = `${API_URL}/v1/public/${chategory}`;
  return `${baseUrl}?nameStartsWith=${name}&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
};

export const getCharacterComicsUrl = (id) => {
  const baseUrl = `${API_URL}/v1/public/characters`;
  return `${baseUrl}/${id}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
};
////////////////////////////////////////////

/////////characters section///////////

/////////////////////////////////////////////////////
