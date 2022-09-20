import React from "react";

const MovieCard = ({ movie: { title, description, posterURL, rating } }) => {
  return (
    <div >
      <div class="d-flex  justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={posterURL}alt="pho" style={{ height: "25rem" }} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <div  class="btn btn-primary">{rating} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
