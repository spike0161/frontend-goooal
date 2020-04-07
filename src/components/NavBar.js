import React from 'react'
import Logo from '../images/GOOAL.png'

import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/"><img src={Logo} alt="logo" style={{width:150, height:50}}/></Link>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to="/leaguetable" className="nav-item">League Table </Link>
      <Link to="/homepage" className="nav-item">Home Page</Link>
      <Link to="/allTeams" className="nav-item">Teams</Link>
      <Link to="https://www.worldsoccershop.com/shop/leagues/premier-league" className="nav-item">Shop Apparel</Link>
      <Link to="/profile/" className="nav-item">Your Profile</Link>
      <Link to="/about" className="nav-item">About</Link>
    </div>
  </div>
</nav>
    </div>
  )
}


export default NavBar
