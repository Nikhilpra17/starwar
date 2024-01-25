import React, { useState, useEffect } from "react";

const People = ({ urls }) => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        });

        const people = await Promise.all(promises);
        setPeopleData(people);
      } catch (error) {
        console.error("Error fetching people data:", error);
      }
    };
    fetchData();
  }, [urls]);

  return (
    <div className="people-tab">
      <h2>People</h2>
      <div className="people-list">
        {peopleData.map((person, index) => (
          <div key={index} className="person">
            <h3>{person.name}</h3>
            <p>Gender: {person.gender}</p>
            <p>Birth Year: {person.birth_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
