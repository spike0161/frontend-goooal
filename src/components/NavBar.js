import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">LOGO HERE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/leaguetable">League Table </a>
      <a className="nav-item nav-link" href="/allTeams">Teams</a>
      <a className="nav-item nav-link" href="https://www.worldsoccershop.com/shop/leagues/premier-league">Shop Apparel</a>
      <a className="nav-item nav-link" href="/users/2">Your Profile</a>
      <a className="nav-item nav-link" href="#">About Creator</a>
      <button type="submit" className="nav-item nav-link" onClick={ e => props.logoutHandler(e)}>Logout</button>
      <a className="nav-item nav-link" href="/signUp">Sign up</a>
    </div>
  </div>
</nav>
    </div>
  )
}


export default NavBar
