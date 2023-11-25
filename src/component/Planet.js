import React, { useState, useEffect } from "react";

const Planet = ({ urls }) => {
  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });

        const fetchedPlanets = await Promise.all(promises);
        setPlanetData(fetchedPlanets);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      }
    };

    fetchData();
  }, [urls]);

  return (
    <div className="planet-tab">
      <h2>Planets</h2>
      <div className="planet-list">
        {planetData.map((planet, index) => (
          <div key={index} className="planet">
            <h3>{planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planet;
