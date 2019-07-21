import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  return fetch(
    limit > 0
      ? `${API_URL}?limit=${limit}`
      : rating > 0
      ? `${API_URL}?&minimum_rating=${rating}`
      : API_URL
  )
    .then(res => res.json())
    .then(json => json.data.movies);
};
