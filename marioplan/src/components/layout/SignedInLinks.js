import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  let initials = '';
  if(props.profile.firstName && props.profile.lastName) {
    initials = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
  }
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>Add Member</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
