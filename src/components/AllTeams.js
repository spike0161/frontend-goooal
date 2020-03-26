import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class AllTeams extends React.Component {
  render() {
    // console.log(this.props.teams);
    return (
      <div className="allTeams-container">
        <h2 id="all-teams-header">All Teams</h2>
        <div className="search">
          <input
            className="search-teams, form-control-sm"
            type="text"
            placeholder="Search Teams"
            onChange={e => this.props.search(e)}
          />
        </div>
        {this.props.teams.map(team => (
          <Link to={`/teams/${team.id}`}>
            <div className="image-div">
              <img
                className="team-img"
                key={team.id}
                style={{ width: 100, height: 100, margin: 20 }}
                alt={team.shortName}
                src={team.crestUrl}
              />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default AllTeams;
