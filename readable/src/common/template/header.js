import React from 'react'; 
import {NavLink} from 'react-router-dom'

/*
* Application Menu
*/
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <NavLink exact to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className="nav-item">
          Dois
        </li>
      </ul>
    </nav>
  )
}

export default Header;
