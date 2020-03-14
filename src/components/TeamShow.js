import React from 'react'
// import { Link } from 'react-router-dom'


class TeamShow extends React.Component {

  render(){

    return(
      <div>
      { this.props.team ?
        <div>
      <img src={this.props.team.crestUrl} style={{width: 200, height: 200}} alt={this.props.team.shortName} />
      <h1>{this.props.team.full_name}</h1>
      <h3>{this.props.team.short_name}</h3>
      <h3>{this.props.team.tla}</h3>
      <button onClick = {()=>this.props.handleFavoriteTeam(this.props.team)}>Favorite</button>

      <p>{this.props.team.address}</p>
      <p>{this.props.team.phone}</p>
      <p>{this.props.team.website}</p>
      <p>{this.props.team.founded}</p>
      <p>{this.props.team.email}</p>
      <p>{this.props.team.club_colors}</p>
      <p>{this.props.team.venue}</p>

      </div> :
      null
    }

  {this.props.players.map( player => (
    <div>
      <h4>Name: {player.name}</h4>
      <p>Position: {player.position}</p>
      <p>Nationality: {player.nationality}</p>
      <p>Shirt Number: {player.shirt_number}</p>
      <p>DOB: {player.date_of_birth}</p>
    </div>
  ))}


      </div>
    )
  }
}

export default TeamShow
