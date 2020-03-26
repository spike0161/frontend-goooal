import React from "react";
import { Link } from 'react-router-dom'

// add links to each teams show page
class LeagueTable extends React.Component {


  render() {
    console.log(this.props.leagueTable, "League Table:", this.props);
    return (
      <div id='league-table-container'>
        <h1 id="table-thead">Premier League Table <span><img src="https://1000logos.net/wp-content/uploads/2017/05/Premier-League-Logo.png" id="league-logo"></img></span></h1>
        <table className="table table-hover league-table">
          <thead></thead>
          <tbody>
            <tr>
              <th className="tg-0lax1">Position</th>
              <th className="tg-0lax1"></th>
              <th className="tg-0lax1">Team</th>
              <th className="tg-0lax1">Played</th>
              <th className="tg-0lax1">Won</th>
              <th className="tg-0lax1">Draw</th>
              <th className="tg-0lax1">Lost</th>
              <th className="tg-0lax1">Points</th>
              <th className="tg-0lax1">For</th>
              <th className="tg-0lax1">Against</th>
              <th className="tg-0lax1">Diff</th>
            </tr>
            { this.props.leagueTable.map(team => (
              <tr>
                <td className="tg-0lax team-position">{team.position}</td>
                <td className="img"><span><img src={team.team.crestUrl} alt='Team crest' style={{width:35, height: 35}}/></span></td>
                <td className="tg-0lax">{team.team.name}</td>
                <td className="tg-0lax">{team.playedGames}</td>
                <td className="tg-0lax">{team.won}</td>
                <td className="tg-0lax">{team.draw}</td>
                <td className="tg-0lax">{team.lost}</td>
                <td className="tg-0lax">{team.points}</td>
                <td className="tg-0lax">{team.goalsFor}</td>
                <td className="tg-0lax">{team.goalsAgainst}</td>
                <td className="tg-0lax">{team.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeagueTable;
