import { useState } from "react";
import { films } from "./Data";
import MovieList from "./components/MovieList";
function App() {
  const [Films, setFilms] = useState(films);

  const handleAdd = (film) => {
    setFilms([...Films, film]);
  };
  return (
    <>
      <MovieList movies={Films} handleAdd={handleAdd} />
    </>
  );
}

export default App;
