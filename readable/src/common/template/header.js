import React from 'react'; 
import {NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <NavLink exact to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact to='/posts/new' className='nav-link'>New Post</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
