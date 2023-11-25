import React, { useState, useEffect } from "react";

const Species = ({ urls }) => {
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });

        const fetchedSpecies = await Promise.all(promises);
        setSpeciesData(fetchedSpecies);
      } catch (error) {
        console.error("Error fetching species data:", error);
      }
    };

    fetchData();
  }, [urls]);

  return (
    <div className="species-tab">
      <h2>Species</h2>
      <div className="species-list">
        {speciesData.map((species, index) => (
          <div key={index} className="single-species">
            <h3>{species.name}</h3>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Species;
