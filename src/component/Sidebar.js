import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const tabs = ["film", "people", "planet", "species", "starship", "vehicle"];

  return (
    <div className="sidebar">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link to={`/${tab}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
