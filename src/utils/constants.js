

export const BGIMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg";

export const PHOIMG =
  "https://avatars.githubusercontent.com/u/142401395?s=40&v=4";

export const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const movieurl = "https://api.themoviedb.org/3/movie/";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const img_cmd = "https://image.tmdb.org/t/p/original";

export const popular_url =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRated_url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const upcoming_url =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
 

export const Supported_languages = [{identifier:"en",name:"English"},{identifier:"hin",name:"Hindi"},{identifier:"spa",name:"Spanish"},{identifier:"ger",name:"German"}];