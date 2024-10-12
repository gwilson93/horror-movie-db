import axios from "axios";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchHorrorMovies(page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        with_genres: "27", // 27 is the genre ID for horror
        page: page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching horror movies:", error);
    return [];
  }
}

export async function fetchMovieDetails(movieId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
