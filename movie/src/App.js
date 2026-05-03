import { useState } from "react";
import "./App.css";

function MovieList() {
  const movies = [
    { title: "Inception", genre: "Sci-Fi", year: 2010 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((m) => m.genre === selectedGenre);

  return (
    <div className="container">
      <h1>Movie List</h1>

      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>

      {filteredMovies.map((movie, index) => (
        <div
          key={index}
          className="card"
          onClick={() => alert(movie.title)}
        >
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return <MovieList />;
}