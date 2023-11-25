import React from "react";

const FilmList = ({ films, viewMode }) => {
  const renderGridView = () => {
    return (
      <div className="film-grid">
        {films.map((film, index) => (
          <div key={index} className="film-item-grid">
            <img src={film.imageURL} alt={film.title} />
            <h3>{film.title}</h3>
            <button>Show More</button>
          </div>
        ))}
      </div>
    );
  };

  const renderListView = () => {
    return (
      <div className="film-list">
        {films.map((film, index) => (
          <div key={index} className="film-item-list">
            <h3>{film.title}</h3>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
            <button>Show More</button>
          </div>
        ))}
      </div>
    );
  };

  return <div>{viewMode === "grid" ? renderGridView() : renderListView()}</div>;
};

export default FilmList;
