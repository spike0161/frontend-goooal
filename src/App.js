import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom'
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamShow from "./components/TeamShow";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allTeams: []
    }
  }

componentDidMount(){
  fetch('http://localhost:3000/teams')
  .then(res => res.json())
  .then(teamsArr => this.setState({ allTeams: teamsArr}))
}



  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage allTeams={this.state.allTeams}/>
        <TeamShow />
      </div>
    );
  }
}

export default App;
