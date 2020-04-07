import React from "react";
import TeamShow from "./TeamShow";
import LeagueTable from "./LeagueTable";
import image from "../images/background.jpg";
import { Link } from "react-router-dom";


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="team-crests-div">
          {this.props.allTeams.map(team => (
            <Link to={`/teams/${team.id}`}>
              <img
                className="crest-card-img"
                key={team.id}
                style={{ width: 50, height: 50 }}
                alt={team.shortName}
                src={team.crestUrl}
              />
            </Link>
          ))}
        </div>

        {this.props.news.map(article => (
        <div className="card" style={{width: 18 + 'rem'}}>
          <img src={article.image} className="card-img-top" alt="Article Image"/>
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            <a href={article.url} className="btn btn-primary">Read Article</a>
          </div>
        </div>
        ))}




        <div className="home-table-container">
          <table className="table table-hover" style={{ width: 200 }}>
            <thead className="thead"></thead>
            <tbody>
              <tr>
                <th className="tg-cly1">Position</th>
                <th className="tg-cly1"></th>
                <th className="tg-0lax">Team</th>
                <th className="tg-0lax">Played</th>
                <th className="tg-0lax">Won</th>
                <th className="tg-0lax">Points</th>
              </tr>
              {this.props.top5Table.map(team => (
                <tr>
                  <td className="tg-0lax">{team.position}</td>
                  <td className="tg-0lax">
                    <img
                      src={team.team.crestUrl}
                      alt={team.team.name}
                      style={{ width: 25, height: 25 }}
                    />
                  </td>

                  <td className="tg-0lax">{team.team.name}</td>
                  <td className="tg-0lax">{team.playedGames}</td>
                  <td className="tg-0lax">{team.won}</td>
                  <td className="tg-0lax">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HomePage;
