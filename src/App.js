import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamShow from "./components/TeamShow";
import Login from './components/Login'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allTeams: [],
      news: []
    };
  }


componentDidMount(){
  Promise.all([fetch('http://localhost:3000/teams'), fetch("https://gnews.io/api/v3/search?q='EPL'&max=3&image&token=a2965dcd94c290f2ba5097d111ca2089")])
  .then(([res1, res2]) =>{
    return Promise.all([res1.json(), res2.json()])
  })
  .then(([res1, res2]) => {
    this.setState({allTeams: res1, news: res2})
  })
}




  render() {
    return (
      <div className="App">

        <Router>
          <NavBar />

          <Route
            exact
            path="/"
            render={props => <HomePage news={this.state.news} allTeams={this.state.allTeams} />}
          />
          <Route
            path="/teams/:id"
            render={props => {
              let id = parseInt(props.match.params.id);
              let teamObj = this.state.allTeams.find(team => team.id === id);
              return <TeamShow team={teamObj} />;
            }}
          />
        <Route
          exact
          path='/login'
          render={props => {
            return <Login />
          }}
          />

        </Router>
      </div>
    );
  }
}

export default App;
