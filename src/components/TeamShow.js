import React from "react";
// import { Link } from 'react-router-dom'

class TeamShow extends React.Component {
  constructor() {
    super();
    this.state = {
      playerPosition: "",
      // upComing: []
    };
  }

  // upComingGames = () => {
  //   fetch(
  //     `http://api.football-data.org/v2/teams/${this.props.team.id}/matches?status=SCHEDULED`,
  //     {
  //       headers: {
  //         "X-Auth-Token": "d6fd802b82a34762a26dfeb22947f330"
  //       }
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => this.setState({ upComing: data.matches }));
  // }

  playerPositionHandler = e => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  };

  getFilteredPositions = () => {
    let filteredPositions = this.getPlayers().filter(player =>
      player.position && player.position.includes(this.state.playerPosition)
    )
    return filteredPositions
  };
  // && above code - when it renders 1st time, it needs to be updated with the state. Wont pass && until truthy.

  getPlayers = () => {
    let players = this.props.players.filter(
      player => player.team_id == this.props.team.id
    );
    return players;
  };

  render() {
    return (
      <div>
        <div id="team-show-container">
          {this.props.team ? (
            <div>

              <h1 id="team-name">{this.props.team.full_name}</h1>
              <img
                src={this.props.team.crestUrl}
                style={{ width: 200, height: 200 }}
                alt={this.props.team.shortName}
                id="team-show-logo"
              />
            <div id='team-info-div'>
                <button
                  className=" addBtn btn btn-lg"
                  onClick={() => this.props.handleFavoriteTeam(this.props.team)}
                >
                  Favorite
                </button>
                <div id="team-info">
                  <p>Phone Number: {this.props.team.phone}</p>
                  <p>Year Founded: {this.props.team.founded}</p>
                  <p>Team Colors: {this.props.team.club_colors}</p>
                  <p>Stadium: {this.props.team.venue}</p>
                  <p><a href={this.props.team.website}>{this.props.team.website}</a></p>
                </div>
                </div>

          </div>
          ) : null}
        </div>

        <div id="team-roster-div">


          <select
            className="ui search dropdown"
            getFilteredPositions={this.getFilteredPositions()}
            onChange={e => this.playerPositionHandler(e)}
          >
            <option value="">All Players</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Attacker">Attacker</option>
            <option value="Coach">Coach</option>
          </select>
          <table className="roster">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Nationality</th>
              <th>Shirt Number</th>
            </tr>
            {this.getFilteredPositions().map(player => (
              <tr>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.nationality}</td>
                <td>{player.shirt_number}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default TeamShow;
