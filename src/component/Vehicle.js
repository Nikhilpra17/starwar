import React, { useState, useEffect } from "react";

const Vehicle = ({ urls }) => {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });

        const fetchedVehicles = await Promise.all(promises);
        setVehicleData(fetchedVehicles);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    fetchData();
  }, [urls]);

  return (
    <div className="vehicle-tab">
      <h2>Vehicles</h2>
      <div className="vehicle-list">
        {vehicleData.map((vehicle, index) => (
          <div key={index} className="vehicle">
            <h3>{vehicle.name}</h3>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
