import React from "react";
import { useEffect, useState } from "react";
import Team from "./../Team/Team";
import "./Home.css";
const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t")
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  console.log(teams);
  return (
    <div>
      <header className="banner">
        <h1> Sports Mania || Life is sporty </h1>
      </header>
      {teams.map((team) => (
        <Team team={team}> </Team>
      ))}
    </div>
  );
};

export default Home;
