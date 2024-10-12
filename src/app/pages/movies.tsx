import { useState, useEffect } from "react";
import { fetchHorrorMovies } from "../utils/tmdb";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const horrorMovies = await fetchHorrorMovies();
      setMovies(horrorMovies);
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h1>Horror Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4 rounded">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
            <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
