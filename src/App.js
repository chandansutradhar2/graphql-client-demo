import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { DisplayJobs } from "./Jobs";
import { Company } from "./Company";
import { CompanyDetail } from "./CompanyDetail";
import { Home } from "./Home";

function App() {
  const [id, setId] = useState(1);
  const [showJobs, setShowJobs] = useState(false);
  const onSelectHandler = (ev) => {
    console.log(ev.target.value);
    setId(ev.target.value);
  };
  return (
    <div className="App">
      <h2>Apollo Client Demo</h2>
      <button onClick={() => setShowJobs(false)}>Home</button>
      <button onClick={() => setShowJobs(true)}>Jobs</button>
      {showJobs ? <DisplayJobs /> : <Home />}
    </div>
  );
}

export default App;
