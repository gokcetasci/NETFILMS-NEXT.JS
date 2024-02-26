const API_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
    try {
    const res = await fetch(
        `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return await res.json();
    } catch (error) {
        throw new Error(error)
    }
 
};
const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", `&page=1`);
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", `&page=1`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", `&page=1`);
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/genre/movie/list", `with_genres=${genreId}`);
};

const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`, `&page=1`);

}

export {
  fetchMovieApi,
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
  getMovie,
};
