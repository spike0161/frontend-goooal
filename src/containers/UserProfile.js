import React from "react";
import TeamCard from "../components/TeamCard";

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      usersArr: [],
      favTeams: []
    };

    // this.removeTeam = this.removeTeam.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/8")
      .then(res => res.json())
      .then(data =>
        this.setState({ usersArr: data, favTeams: data.favorites })
      );
  }

  removeFavoriteTeam = id => {
    fetch(`http://localhost:3000/favorite_teams/8/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  };

  removeTeam = id => {
    this.setState(prevState => ({
      favTeams: prevState.favTeams.filter(team => team.id != id)
    }));
    // console.log("Remove team", this.state.favTeams, this.state.usersArr)
    alert("Team has been removed from your favorites");
  };

  render() {
    // console.log("UserProfile", this.props.user);
    let favTeams = this.state.favTeams;

    return (
      <div>
        <h2>Welcome {}</h2>

        <div className="fav-teams-div">
          <h4>Your favorite Teams</h4>

          {favTeams
            ? favTeams.map(teamObj => (
                <TeamCard
                  team={teamObj}
                  key={teamObj.id}
                  removeTeam={this.removeTeam}
                  favTeams={this.state.favTeams}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default UserProfile;
