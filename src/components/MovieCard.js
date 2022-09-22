import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie: { title, description, posterURL, rating } }) => {
  return (
    <div>
      <div class="d-flex  justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
        <Link to={`/${title}`}>
              <img class="card-img-top" src={posterURL}alt="pho" style={{ height: "25rem" }} />
        </Link>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <div  class="btn btn-primary">{rating} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
