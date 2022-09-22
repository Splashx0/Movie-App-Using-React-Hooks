import { useState } from "react";
import { films } from "./Data";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router-dom";
import TrailerDesc from "./components/TrailerDesc";
function App() {
  const [Films, setFilms] = useState(films);

  const handleAdd = (film) => {
    setFilms([...Films, film]);
  };
  return (
    <>
      <Routes>
        <Route  path='/' element={<MovieList movies={Films} handleAdd={handleAdd}/>} />
        <Route  path='/:title' element={<TrailerDesc movies={Films}/>} />

      </Routes>
    </>
  );
}

export default App;
