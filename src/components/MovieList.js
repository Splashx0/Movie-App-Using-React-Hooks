import React, { useState } from "react";
import Filter from "./Filter";

const MovieList = ({ movies, handleAdd }) => {
  const [Add, setAdd] = useState({title: "",description: "",posterURL: "",rating: "",trailer:''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAdd({ ...Add, [e.target.name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="mt-3">
        <div class="container d-flex justify-content-center gap-3">
          <input  type="text" class="form-control-sm"  placeholder="title"  name="title"onChange={handleChange}/>
          <input type="text" class="form-control-sm" placeholder="description" name="description"  onChange={handleChange}/>
          <input type="text" class="form-control-sm" placeholder="posterURL" name="posterURL"onChange={handleChange}/>
          <input type="text" class="form-control-sm" placeholder="rating" name="rating"onChange={handleChange}/>
          <input type="text" class="form-control-sm" placeholder="trailer" name="trailer"onChange={handleChange}/>

          <button class="btn btn-primary" onClick={() => handleAdd(Add)}>
            Add
          </button>
        </div>
      </form>
      <Filter data={movies}/>
    </div>
  );
};

export default MovieList;
