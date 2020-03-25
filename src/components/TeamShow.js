import React from "react";
// import { Link } from 'react-router-dom'

class TeamShow extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     upComing: []
  //   };
  // }

  // componentDidMount() {
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
  getPlayers = () => {
    let players = this.props.players.filter(player => player.team_id == this.props.team.id)
    return players;
  };

  render() {
    console.log("TeamShow", this.getPlayers());
    return (
      <div>
      <div>
        {this.props.team ? (
          <div>
            <img
              src={this.props.team.crestUrl}
              style={{ width: 200, height: 200 }}
              alt={this.props.team.shortName}
            />
            <h1>{this.props.team.full_name}</h1>
            <h3>{this.props.team.short_name}</h3>
            <h3>{this.props.team.tla}</h3>
            <button
              onClick={() => this.props.handleFavoriteTeam(this.props.team)}
            >
              Favorite
            </button>

            <p>{this.props.team.address}</p>
            <p>{this.props.team.phone}</p>
            <p>{this.props.team.website}</p>
            <p>{this.props.team.founded}</p>
            <p>{this.props.team.email}</p>
            <p>{this.props.team.club_colors}</p>
            <p>{this.props.team.venue}</p>
          </div>
        ) : null}
      </div>





        <div>

          <table className='roster'>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Nationality</th>
              <th>Shirt Number</th>
            </tr>
            {this.getPlayers().map(player => (
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
    )
  }
}

export default TeamShow;
