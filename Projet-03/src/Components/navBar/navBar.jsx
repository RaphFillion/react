import { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Pays</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to='/' className='nav-link'>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='countries' className='nav-link'>Liste de pays</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}