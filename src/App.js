import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import TeamCard from "./components/TeamCard";

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
      </div>
    );
  }
}

export default App;
