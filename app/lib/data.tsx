import {
  CategoriesLinks,
  CategoryComicsLinks,
  CategoryEventsLinks,
  CategorySeriesLinks,
  CategoryStoriesLinks,
} from "./definitions";
import {
  urlCharactersByName,
  urlComicsByTitle,
  urlComicsById,
  urlComics,
  urlCharacters,
  urlComicsCharacters,
  urlSeries,
  urlCreators,
  urlSeriesByTitle,
  urlSeriesById,
  urlSeriesCharacters,
  urlSeriesComics,
  urlCharactersById,
  urlCharactersComics,
  urlCharactersSeries,
  urlCharactersEvents,
  urlCharactersStories,
  urlComicsCreators,
  urlComicsEvents,
  urlComicsStories,
  urlCreatorsByName,
  urlCreatorsById,
  urlCreatorsComics,
  urlCreatorsEvents,
  urlCreatorsSeries,
  urlCreatorsStories,
  urlSeriesCreators,
  urlSeriesEvents,
  urlSeriesStories,
  urlEvents,
  urlEventsByTitle,
  urlEventsById,
  urlEventsCharacters,
  urlEventsComics,
  urlEventsCreators,
  urlEventsSeries,
  urlEventsStories,
  urlMainSearch,
} from "./utils";

//////Home Search/////
export const fetchMainSearch = async (category: string, value: string) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const URL = urlMainSearch(category, value);
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};
/////////////////////////////

//////////Fetch Categories////////
export const fetchCategory = async (
  category: CategoriesLinks,
  offset: string
) => {
  // object of each category and its link
  const categoriesLinks = {
    characters: urlCharacters(offset),
    comics: urlComics(offset),
    creators: urlCreators(offset),
    events: urlEvents(offset),
    series: urlSeries(offset),
  };

  try {
    let URL;
    // checking if the category passed contain the object
    if (category in categoriesLinks) {
      URL = categoriesLinks[category];
    } else {
      throw new Error(`Invalid category: ${category}`);
    }
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};
/////////////////////////////////////////////////

////////////////fetch category by name///////////
export const fetchCategoryByName = async (
  category: CategoriesLinks,
  name: string,
  offset: string
) => {
  // object of each category and its link
  const categoryByNameLinks = {
    characters: urlCharactersByName(name, offset),
    comics: urlComicsByTitle(name, offset),
    creators: urlCreatorsByName(name, offset),
    events: urlEventsByTitle(name, offset),
    series: urlSeriesByTitle(name, offset),
  };

  let URL;
  // checking if the category passed contain the object
  if (category in categoryByNameLinks) {
    URL = categoryByNameLinks[category];
  } else {
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////

////////////////fetch category by id///////////
export const fetchCategoryById = async (
  category: CategoriesLinks,
  id: string
) => {
  // object of each category and its link
  const categoryByIdLinks = {
    characters: urlCharactersById(id),
    comics: urlComicsById(id),
    creators: urlCreatorsById(id),
    events: urlEventsById(id),
    series: urlSeriesById(id),
  };

  let URL;
  // checking if the category passed contain the object
  if (category in categoryByIdLinks) {
    URL = categoryByIdLinks[category];
  } else {
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////

//////////////fetch category Comics/////////////

export const fetchCategoryComics = async (
  category: CategoryComicsLinks,
  id: string
) => {
  const categoryComicsLink = {
    characters: urlCharactersComics(id),
    creators: urlCreatorsComics(id),
    events: urlEventsComics(id),
    series: urlSeriesComics(id),
  };
  let URL;
  // checking if the category passed contain the object
  if (category in categoryComicsLink) {
    URL = categoryComicsLink[category];
  } else {
    1;
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};
///////////////////////////////////

///////////fetch categoy Series/////////
export const fetchCategorySeries = async (
  category: CategorySeriesLinks,
  id: string
) => {
  const categorySeriesLink = {
    characters: urlCharactersSeries(id),
    creators: urlCreatorsSeries(id),
    events: urlEventsSeries(id),
  };
  let URL;
  // checking if the category passed contain the object
  if (category in categorySeriesLink) {
    URL = categorySeriesLink[category];
  } else {
    1;
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};
//////////////////////////////////////////

///////////fetch categoy Events/////////
export const fetchCategoryEvents = async (
  category: CategoryEventsLinks,
  id: string
) => {
  const categoryEventsLink = {
    characters: urlCharactersEvents(id),
    comics: urlComicsEvents(id),
    creators: urlCreatorsEvents(id),
    series: urlSeriesEvents(id),
  };
  let URL;
  // checking if the category passed contain the object
  if (category in categoryEventsLink) {
    URL = categoryEventsLink[category];
  } else {
    1;
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};
//////////////////////////////////////////

///////////fetch categoy Stories/////////
export const fetchCategoryStories = async (
  category: CategoryStoriesLinks,
  id: string
) => {
  const categoryStoriesLink = {
    characters: urlCharactersStories(id),
    comics: urlComicsStories(id),
    creators: urlCreatorsStories(id),
    events: urlEventsSeries(id),
    series: urlSeriesStories(id),
  };
  let URL;
  // checking if the category passed contain the object
  if (category in categoryStoriesLink) {
    URL = categoryStoriesLink[category];
  } else {
    1;
    throw new Error(`Invalid category: ${category}`);
  }
  const res = await fetch(URL);
  return res.json();
};
//////////////////////////////////////////

/////////fetch characters//////////
// export const fetchCharacters = async (offset: string) => {
//   try {
//     // await new Promise((resolve) => setTimeout(resolve, 5000));
//     const URL = urlCharacters(offset);
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch revenue data.");
//   }
// };

// export const fetchCharacterById = async (id: string) => {
//   const URL = urlCharactersById(id);
//   const res = await fetch(URL);
//   return res.json();
// };

// export const fetchCharactersByName = async (name: string, offset: string) => {
//   const URL = urlCharactersByName(name, offset);
//   const res = await fetch(URL);
//   return res.json();
// };

// export const fetchCharactersComics = async (id: string) => {
//   const URL = urlCharactersComics(id);
//   const res = await fetch(URL);
//   return res.json();
// };

// export const fetchCharactersSeries = async (id: string) => {
//   const URL = urlCharactersSeries(id);
//   const res = await fetch(URL);
//   return res.json();
// };

// export const fetchCharactersEvents = async (id: string) => {
//   const URL = urlCharactersEvents(id);
//   const res = await fetch(URL);
//   return res.json();
// };

// export const fetchCharactersStories = async (id: string) => {
//   const URL = urlCharactersStories(id);
//   const res = await fetch(URL);
//   return res.json();
// };

////////////////////////////////////////

/////////fetch comics//////////
export const fetchComics = async (offset: string) => {
  const URL = urlComics(offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsByTitle = async (title: string, offset: string) => {
  const URL = urlComicsByTitle(title, offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsById = async (id: string) => {
  const URL = urlComicsById(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsCharacters = async (id: string) => {
  const URL = urlComicsCharacters(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsCreators = async (id: string) => {
  const URL = urlComicsCreators(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsEvents = async (id: string) => {
  const URL = urlComicsEvents(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchComicsStories = async (id: string) => {
  const URL = urlComicsStories(id);
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////////////////

//////////fetch creators///////////
export const fetchCreators = async (offset: string) => {
  const URL = urlCreators(offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsByName = async (name: string, offset: string) => {
  const URL = urlCreatorsByName(name);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsById = async (id: string) => {
  const URL = urlCreatorsById(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsComics = async (id: string) => {
  const URL = urlCreatorsComics(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsEvents = async (id: string) => {
  const URL = urlCreatorsEvents(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsSeries = async (id: string) => {
  const URL = urlCreatorsSeries(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchCreatorsStories = async (id: string) => {
  const URL = urlCreatorsStories(id);
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////////////////

//////////fetch Series///////////
export const fetchSeries = async (offset: string) => {
  const URL = urlSeries(offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesByTitle = async (title: string, offset: string) => {
  const URL = urlSeriesByTitle(title, offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesById = async (id: string) => {
  const URL = urlSeriesById(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesCharacters = async (id: string) => {
  const URL = urlSeriesCharacters(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesComics = async (id: string) => {
  const URL = urlSeriesComics(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesCreators = async (id: string) => {
  const URL = urlSeriesCreators(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesEvents = async (id: string) => {
  const URL = urlSeriesEvents(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchSeriesStories = async (id: string) => {
  const URL = urlSeriesStories(id);
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////////////////

/////////fetch Events//////////
export const fetchEvents = async (offset: string) => {
  const URL = urlEvents(offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchEventsByTitle = async (title: string, offset: string) => {
  const URL = urlEventsByTitle(title, offset);
  const res = await fetch(URL);
  return res.json();
};

export const fetchEventsById = async (id: string) => {
  const URL = urlEventsById(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchEventsCharacters = async (id: string) => {
  const URL = urlEventsCharacters(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchEventsComics = async (id: string) => {
  const URL = urlEventsComics(id);
  const res = await fetch(URL);
  return res.json();
};

export const fetchEventsCreators = async (id: string) => {
  const URL = urlEventsCreators(id);
  const res = await fetch(URL);
  return res.json();
};
export const fetchEventsSeries = async (id: string) => {
  const URL = urlEventsSeries(id);
  const res = await fetch(URL);
  return res.json();
};
export const fetchEventsStories = async (id: string) => {
  const URL = urlEventsStories(id);
  const res = await fetch(URL);
  return res.json();
};

////////////////////////////////////////
