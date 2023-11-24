// Marvel API form https://developer.marvel.com/
import { MD5 } from "crypto-js";

// geting api from .env
const API_URL = process.env.API_URL;

// the api require a hash in link
// using MD5 to make crypto line
const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

export const fetchHeros = (chategory, limit, id) => {
  const baseUrl = `${API_URL}/v1/public/${chategory}`;

  // ts is the time
  const ts = Date.now().toString();
  const apiKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const hash = getHash(ts, privateKey, apiKey);

  // combine all the link (baseUrl + ts + apikey + hash)
  const url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  if (id) {
    return `${baseUrl}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  }

  return url;
};

export const getImageUrl = (img) => {
  const IMG_SIZE = "portrait_fantastic";

  return `${img.path}/${IMG_SIZE}.${img.extension}`;
};
