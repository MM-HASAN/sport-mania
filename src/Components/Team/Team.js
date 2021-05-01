import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Team.css";

import "../Css/Bootstrap.css";
import { Link } from "react-router-dom";

const Team = (props) => {
  const {
    strTeamBadge,
    strTeam,
    strGender,
    idTeam,
    strLeague,
    strSport,
  } = props.team;

  return (
    <div className="leagueList">
      <Card
        style={{
          margin: "5px",
          backgroundColor: "blue",
          textAlign: "center",
          padding: "10px",
          color: "pink",
        }}
      >
        <Card.Img
          style={{ width: "100px", height: "100px", margin: "auto" }}
          variant="top"
          src={strTeamBadge}
        />
        <Card.Body>
          <Card.Title> {strLeague}</Card.Title>
          <Card.Title> sports type: {strSport}</Card.Title>
          <Card.Text> {idTeam}</Card.Text>
          <Card.Text> {strGender}</Card.Text>
          <Button className="btn" variant="success">
            {" "}
            <Link to={`/teamInfo/${strTeam}`}> explorer the team </Link>{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
