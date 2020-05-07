import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
      <ul>
        <li><NavLink to='/signup'><i className="small material-icons">filter_tilt_shift</i>Signup</NavLink></li>
        <li><NavLink to='/signin'><i className="small material-icons">event_seat</i>Login</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks