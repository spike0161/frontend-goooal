import React from "react";
import TeamCard from "../components/TeamCard";
import "../App.css";
import swal from 'sweetalert';



class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      usersArr: [],
      favTeams: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(res => res.json())
      .then(data =>
        this.setState({ usersArr: data, favTeams: data.favorites })
      );
  }

  removeFavoriteTeam = id => {
    fetch(`http://localhost:3000/favorite_teams/1/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    this.setState(prevState => ({
      favTeams: prevState.favTeams.filter(team => team.id != id)
    }));
    swal({text: "Team has been removed from your favorites", icon:"error"});
  };

  // removeTeam = id => {
  //
  // };

  render() {
    let favTeams = this.state.favTeams;
    return (
      <div id="user-profile-container">

        <div className="fav-teams-div">
          <h4 id="fav-teams-header">Your favorite Teams</h4>

          <h3 id="h3-username">Dean88</h3>
          <img src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png" alt="Profile Pic" id="avatar"></img>
          {favTeams
            ? favTeams.map(teamObj => (
              <div id="fav-team-div">
                <TeamCard
                  team={teamObj}
                  key={teamObj.id}
                  favTeams={this.state.favTeams}
                  removeFavoriteTeam={this.removeFavoriteTeam}
                />
              </div>

              ))
            : null}
        </div>
        <div className="bio-div">
          <h2>Bio:</h2>
          <p>Stared watching soccer at a very young age.</p> <br/>
          <p>Played in middle school and highschool as a midfield player.</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
