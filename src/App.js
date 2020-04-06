import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamShow from "./components/TeamShow";
// import Signup from "./containers/Signup";
import Login from "./containers/login";
import About from "./components/About";
import UserProfile from "./containers/UserProfile";
import LeagueTable from "./components/LeagueTable";
import AllTeams from "./components/AllTeams";
import swal from "sweetalert";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTeams: [],
      news: [],
      currentUser: null,
      players: [],
      searchText: "",
      leagueTable: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/teams"),
      fetch(
        "https://gnews.io/api/v3/search?q='EPL'&max=3&image&token=a2965dcd94c290f2ba5097d111ca2089"
      ),
      fetch("http://localhost:3000/players"),
      fetch("http://api.football-data.org/v2/competitions/2021/standings", {
        headers: {
          "X-Auth-Token": "d6fd802b82a34762a26dfeb22947f330"
        }
      })
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
          leagueTable: res4.standings[0].table
        });
      });
  }
  // environment variables

  signUpHandler = (e, formInfo) => {
    e.preventDefault();
    let name = formInfo.name;
    let username = formInfo.userName;

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        username: username
      })
    };
    fetch("http://localhost:3000/users", configObj)
      .then(res => res.json())
      .then(user => this.setState({ currentUser: user }))
      .then(<Redirect to="/profile/:id" />);
  };

  updateCurrentUser = user => {
    this.setState({ currentUser: user });
  };



  // logoutHandler = () => {
  //   this.setState = {
  //     currentUser: null
  //   }(<Redirect to="/signup" />);
  // };

  top5Table = () => {
    let teams = this.state.leagueTable.filter(team => team.position <= 5);
    return teams;
  };

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
    swal({ text: "Team has been favorited", icon: "success" });
  };

  searchTextHandler = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  };

  getFilteredTeams = () => {
    let filteredTeams = this.state.allTeams.filter(team =>
      team.full_name.toLowerCase().includes(this.state.searchText)
    );
    return filteredTeams;
  };

  render() {
    // console.log("In App", this.top5Table);
    return (
      <div>
        <Router>
          <NavBar currentUser={this.state.currentUser} />
          <div className="App">
            <Route
              exact
              path="/homepage"
              render={props => {
                return (
                  <HomePage
                    news={this.state.news}
                    allTeams={this.state.allTeams}
                    top5Table={this.top5Table()}
                  />
                );
              }}
            />
            }
            <Route
              exact path="/about" component={About}
            />
          <Switch>
          <Route exact path="/" render={() => <Redirect to="/login"/>}/>
          <Route exact path="/profile" render={() => {
              return this.state.currentUser ? <UserProfile user={this.state.currentUser}/> :
              <Redirect to="/login"/>
            }} />
          <Route exact path="/login" render={() => {
              return this.state.currentUser ? <Redirect to="/profile"/> : <Login updateCurrentUser={this.updateCurrentUser}
              />
            }} />
        </Switch>


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
              render={props => {
                return (
                  <AllTeams
                    search={this.searchTextHandler}
                    teams={this.getFilteredTeams()}
                  />
                );
              }}
            />
            <Route
              exact
              path="/leaguetable"
              render={props => {
                return (
                  <LeagueTable
                    leagueTable={this.state.leagueTable}
                    allTeams={this.state.allTeams}
                  />
                );
              }}
            />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
