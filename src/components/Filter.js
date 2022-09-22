import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Filter = ({data}) => {
  
  const [TitleSearched, setTitleSearched] = useState("");
  const [RateSearched, setRateSearched] = useState("");

  const handleSearchByTitle = (e) => {
    setTitleSearched(e.target.value);
  };
  const handleSearchByRate = (e) => {
    setRateSearched(e.target.value);
  };
  return (
    <div>
        <div class="container d-flex justify-content-center mt-3 gap-3">    
             <input type="text" class="form-control-sm" placeholder="type a film name" onChange={handleSearchByTitle} />
             <input type="text" class="form-control-sm" placeholder="type a rate" onChange={handleSearchByRate} />
        </div>
      <div class="d-flex justify-content-center gap-3 mt-3 flex-wrap mb-3">
        
        {data.filter((movie)=>movie.title.toLowerCase().includes(TitleSearched)&&
                                 movie.rating.toString().includes(RateSearched))
             .map((movie)=><MovieCard key={movie.title} movie={movie}/>)}
      </div>

      </div>
  );
};

export default Filter;
