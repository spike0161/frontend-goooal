import React from "react";
import TeamShow from "./TeamShow";
import LeagueTable from "./LeagueTable";
import image from "../images/background.jpg";
import { Link } from "react-router-dom";

// {this.props.news.map(article => (
// <div className="card" style="width: 18rem;">
//   <img src={article.image} className="card-img-top" alt={article.url}>
//   <div className="card-body">
//     <h5 className="card-title">{article.title}</h5>
//     <p className="card-text">{article.description}</p>
//     <a href={article.url} className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// ))}


class HomePage extends React.Component {
  render() {
    console.log("HomePage props:", this.props);
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


          <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" >
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card" >
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>




        <div className="home-table-container">

          <table className="table table-hover" style={{width: 200}}>
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
                  <td className="tg-0lax"><img src={team.team.crestUrl} alt={team.team.name} style={{width: 25, height: 25}}/></td>
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
