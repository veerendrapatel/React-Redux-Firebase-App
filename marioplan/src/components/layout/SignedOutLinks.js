import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  const handleClick = () => {
    window.location.reload(false);
  }
  return (
      <ul>
        <li onClick={handleClick}><NavLink to='/signup'><i className="small material-icons">filter_tilt_shift</i>Signup</NavLink></li>
        <li onClick={handleClick}><NavLink to='/signin'><i className="small material-icons">event_seat</i>Login</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks