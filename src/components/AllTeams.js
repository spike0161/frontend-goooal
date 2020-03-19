import React from "react";
import { Link } from "react-router-dom";

class AllTeams extends React.Component {
  constructor(){
    super()
    this.state = {
      searchText: ""
    }
  }

searchTextHandler = (e) => {
  e.preventDefault()
  this.setState({ searchText: e.target.value})
}

getFilteredTeams = () => {
  let filteredTeams = this.props.allTeams.filter( team => team.full_name.includes(this.state.searchText))
}

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>All Teams</h2>
        <div>
          <input
            className="search-teams"
            type="text"
            placeholder="Search Teams"
            onChange ={ e => this.searchTextHandler(e)}
          />

        </div>
        {this.props.teams.map(team => (
          <Link to={`/teams/${team.id}`}>
            <div>
              <img
                className="team-img"
                key={team.id}
                style={{ width: 100, height: 100, margin: 20 }}
                alt={team.shortName}
                src={team.crestUrl}
              />
            <h3>{team.full_name}</h3>
            </div>
          </Link>

        ))}
      </div>
    );
  }
}

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
