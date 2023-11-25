import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Router className="App">
      <Dashboard />
    </Router>
  );
}

export default App;
