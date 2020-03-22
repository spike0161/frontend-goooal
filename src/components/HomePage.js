import React from "react";
import TeamShow from "./TeamShow";
import LeagueTable from './LeagueTable'
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
      // console.log("HomePage props:", this.props)
    return (

      <div>
        {this.props.allTeams.map(team => (
          <Link to={`/teams/${team.id}`}>
            <img
              className="rest-card-img"
              key={team.id}
              style={{ width: 50, height: 50 }}
              alt={team.shortName}
              src={team.crestUrl}
            />
          </Link>
        ))}

        {this.props.news.map(article => (
          <div>
            <h5>{article.title}</h5>
            <img  src={article.image} alt={article.url} style={{width: 50, height: 50}}/>
            <p>{article.description}</p>
          </div>
        ))}
        
      </div>
    );
  }
}

export default HomePage;
