import React, { useState, useEffect } from "react";

const Starship = ({ urls }) => {
  const [starshipData, setStarshipData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });

        const fetchedStarships = await Promise.all(promises);
        setStarshipData(fetchedStarships);
      } catch (error) {
        console.error("Error fetching starship data:", error);
      }
    };

    fetchData();
  }, [urls]);

  return (
    <div className="starship-tab">
      <h2>Starships</h2>
      <div className="starship-list">
        {starshipData.map((starship, index) => (
          <div key={index} className="starship">
            <h3>{starship.name}</h3>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starship;
