import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
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
        <Router>
          <NavBar />

          <Route exact
                 path='/'
                 render={props => (
                     <HomePage allTeams={this.state.allTeams}/>
                 )}
                 />
            <Route path ='/teams/:id' render={(props) => {
                    let id = parseInt(props.match.params.id)
                    let teamObj = this.state.allTeams.find(team => team.id === id)
                    return <TeamShow team={teamObj} />
                    }
                  }/>
        </Router>

      </div>
    );
  }
}

export default App;
