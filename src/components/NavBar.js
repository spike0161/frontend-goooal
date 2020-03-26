import React from 'react'
import { Link } from 'react-router-dom'

// <a className="nav-item nav-link" href="/signUp">Sign up</a>
// <a className="nav-item nav-link" href="#" onClick={ e => props.logoutHandler(e)}>Logout</a>
const NavBar = (props) => {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">LOGO HERE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/leaguetable">League Table </a>
      <a className="nav-item nav-link" href="/allTeams">Teams</a>
      <a className="nav-item nav-link" href="https://www.worldsoccershop.com/shop/leagues/premier-league">Shop Apparel</a>
      <a className="nav-item nav-link" href="/users/1">Your Profile</a>
      <a className="nav-item nav-link" href="/about">About</a>
    </div>
  </div>
</nav>
    </div>
  )
}


export default NavBar
