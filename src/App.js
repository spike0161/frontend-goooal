import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamShow from "./components/TeamShow";
import Login from "./components/Login";
import UserProfile from "./containers/UserProfile";
import LeagueTable from "./components/LeagueTable";
import AllTeams from './components/AllTeams'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTeams: [],
      news: [],
      currentUser: [],
      players: [],
      searchText: ""
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/teams"),
      fetch(
        "https://gnews.io/api/v3/search?q='EPL'&max=3&image&token=a2965dcd94c290f2ba5097d111ca2089"
      ),
      fetch("http://localhost:3000/players"),
      fetch("http://localhost:3000/users/5")
    ])
      .then(([res1, res2, res3, res4]) => {
        return Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json()
        ]);
      })
      .then(([res1, res2, res3, res4]) => {
        this.setState({
          allTeams: res1,
          news: res2.articles,
          players: res3,
          currentUser: res4
        });
      });
  }
  // environment variables

  handleFavoriteTeam = team => {
    fetch("http://localhost:3000/favorite_teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.currentUser.id,
        team_id: team.id
      })
    });
  };




searchTextHandler = (e) => {
e.preventDefault()
this.setState({ searchText: e.target.value})
}

getFilteredTeams = () => {

let filteredTeams = this.state.allTeams.filter( team => team.full_name.toLowerCase().includes(this.state.searchText)
)
return filteredTeams
}




  render() {
    // console.log("In App", this.state.news)
    return (
      <div className="App">
        <Router>
          <NavBar />

          <Route
            exact
            path="/"
            render={props => (
              <HomePage news={this.state.news} allTeams={this.state.allTeams} />
            )}
          />
          <Route
            path="/teams/:id"
            render={props => {
              let id = parseInt(props.match.params.id);
              let teamObj = this.state.allTeams.find(team => team.id === id);
              return (
                <TeamShow
                  team={teamObj}
                  players={this.state.players}
                  handleFavoriteTeam={this.handleFavoriteTeam}
                />
              );
            }}
          />
          <Route
            exact
            path="/allTeams"
            render={props => (
               <AllTeams
                 search={this.searchTextHandler}
                 teams={this.getFilteredTeams()}
                />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login />;
            }}
          />
          <Route
            exact
            path="/users/:id"
            render={props => <UserProfile user={this.state.currentUser} />}
          />

          <Route exact path="/leaguetable" render={props => <LeagueTable />} />
        </Router>
      </div>
    );
  }
}

export default App;
