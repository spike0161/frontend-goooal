import React from "react";

const TeamCard = props => {
  // console.log("TeamCard props:" ,props);
  return (
    <div>
      <img
        src={props.team.crestUrl}
        alt={props.team.shortName}
        style={{ width: 50, height: 50 }}
      />
      <h2>{props.team.tla}</h2>

    <button onClick={() => props.removeFavoriteTeam(props.team.id)}> Remove </button>

    </div>
  );
};

export default TeamCard;
