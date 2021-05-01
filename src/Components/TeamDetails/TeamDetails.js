import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TeamDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//import female from "./image/female.png";
import male from "./image/male.png";
import female from "./image/female.png";

const TeamDetails = () => {
  const { teamName } = useParams();
  const [team, setTeam] = useState([]);
  console.log("the team is ", team);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`
    )
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamName]);
  console.log(team.strStadiumThumb);

  //conditional rendering
  let gender = team.strGender;
  let imageUrl;

  if (gender === "Male") {
    imageUrl = <img className="info-img" src={male} alt="#"></img>;
  } else if (gender === "Female") {
    imageUrl = <img className="info-img" src={female} alt="#"></img>;
  }

  let headerImg = team.strStadiumThumb;
  let propImg;
  if (headerImg !== null) {
    propImg = team.strStadiumThumb;
  } else {
    propImg = team.strTeamBadge;
  }

  return (
    <div>
      <div>
        <img className="bg-img" src={propImg} alt="#"></img>
        <p className="leagueName"> {team.strLeague}</p>
      </div>

      <div className="infoDetails">
        <div className="info">
          <h2>League name is: {team.strLeague}</h2>
          <p> Founded: {team.intFormedYear}</p>
          <p> Country: {team.strCountry}</p>
          <p> Sport Type: {team.strSport}</p>
          <p> Sport Type: {team.strGender}</p>
        </div>
        {imageUrl}
      </div>

      <div className="textDescription">
        <p>{team.strStadiumDescription}</p>
        <p> {team.strDescriptionEN}</p>
      </div>

      <div className="socialIcon">
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={team.strFacebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/?lang=en">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={team.strYoutube}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default TeamDetails;
