import React, { useState, useEffect } from "react";
import FilmList from "./FilmList";
import people from "./People";
import vehicle from "./Vehicle";
import species from "./Species";
import starship from "./Starship";
import planet from "./Planet";

const Film = () => {
  const [filmData, setFilmData] = useState(null);
  const [activeTab, setActiveTab] = useState("film");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/1/");
        const data = await response.json();
        setFilmData(data);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="film-page">
      <div className="tabs">
        <button onClick={() => handleTabChange("film")}>Film</button>
        <button onClick={() => handleTabChange("people")}>People</button>
        <button onClick={() => handleTabChange("planets")}>Planets</button>
        <button onClick={() => handleTabChange("starships")}>Starships</button>
        <button onClick={() => handleTabChange("vehicles")}>Vehicles</button>
        <button onClick={() => handleTabChange("species")}>Species</button>
      </div>

      {activeTab === "film" && filmData && <FilmList film={filmData} />}
      {activeTab === "people" && filmData && (
        <people category="people" urls={filmData.people} />
      )}
      {activeTab === "planets" && filmData && (
        <planet category="planets" urls={filmData.planets} />
      )}
      {activeTab === "starships" && filmData && (
        <starship category="starships" urls={filmData.starships} />
      )}
      {activeTab === "vehicles" && filmData && (
        <vehicle category="vehicles" urls={filmData.vehicles} />
      )}
      {activeTab === "species" && filmData && (
        <species category="species" urls={filmData.species} />
      )}
    </div>
  );
};

export default Film;
