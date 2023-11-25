import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import film from "./Film";
import people from "./People";
import planet from "./Planet";
import species from "./Species";
import starship from "./Starship";
import vehicle from "./Vehicle";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Logo />
      <div className="dashboard-content">
        <Sidebar />
        <Routes>
          <Route path="/film" element={film} />
          <Route path="/people" element={people} />
          <Route path="/planet" element={planet} />
          <Route path="/species" element={species} />
          <Route path="/starship" element={starship} />
          <Route path="/vehicle" element={vehicle} />

          <Route path="/">
            <>Welcome to the Dashboard</>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
