import React from "react";
import { Link } from "react-router-dom";

const AllTeams = props => {
  console.log(props);
  return (
    <div>
      <h2>All Teams</h2>
      {props.teams.map(team => (
        <Link to={`/teams/${team.id}`}>
          <img
            className="team-img"
            key={team.id}
            style={{ width: 100, height: 100, margin: 20 }}
            alt={team.shortName}
            src={team.crestUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default AllTeams;

// {props.teams.map(team => (
//   <Link to={`/teams/${team.id}`}>
//     <img
//       className="rest-card-img"
//       key={team.id}
//       style={{ width: 50, height: 50 }}
//       alt={team.shortName}
//       src={team.crestUrl}
//     />
//   </Link>
//  )}
