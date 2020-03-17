import React from "react";
import TeamCard from "../components/TeamCard";

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      usersArr: [],
      favTeams: []
    };
  }



  componentDidMount() {
    fetch("http://localhost:3000/users/5")
      .then(res => res.json())
      .then(data => this.setState({ usersArr: data, favTeams: data.teams }));
  }


  render() {
    let favTeams = this.state.usersArr.teams;
    return (
      <div>
        <h2>Welcome {this.props.user.username}</h2>

        <div className="fav-teams-div">
          <h4>Your favorite Teams</h4>

          {favTeams
            ? favTeams.map(teamObj => (
                <TeamCard team={teamObj} key={teamObj.id} removeFavoriteTeam={this.props.removeFavoriteTeam} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default UserProfile;
