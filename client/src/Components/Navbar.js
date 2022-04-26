import React from 'react'
import {Link} from 'react-router-dom';
import Login from './Login/Login'


function Navbar() {
  return (
    <div>
        <Link to="/login">
            <span>Login</span>
        </Link>
        <Link to="/">
        <h1>Space</h1>
        </Link>
    </div>
  )
}

export default Navbar