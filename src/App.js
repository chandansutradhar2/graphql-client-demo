import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { DisplayJobs } from "./Jobs";
import { Company } from "./Company";
import { CompanyDetail } from "./CompanyDetail";
import { Home } from "./Home";
import { useQuery, gql } from "@apollo/client";
import { GET_COMPANIES } from "./queries";

function App() {
  const [id, setId] = useState(undefined);
  const { loading, error, data } = useQuery(GET_COMPANIES);

  const [showJobs, setShowJobs] = useState(false);
  const onSelectHandler = (ev) => {
    console.log(ev.target.value);
    setId(ev.target.value);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <h2>Apollo Client Demo</h2>
      <select name="company" onChange={onSelectHandler}>
        {data.companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      {id && <CompanyDetail companyId={id} />}

      {/* <button onClick={() => setShowJobs(false)}>Home</button>
      <button onClick={ () => setShowJobs( true ) }>Jobs</button>
      
      {showJobs ? <DisplayJobs /> : <Home />} */}
    </div>
  );
}

export default App;
