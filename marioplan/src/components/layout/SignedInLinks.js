import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  // let initials = '';
  // if(props.profile.firstName && props.profile.lastName) {
  //   initials = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
  // }
  const handleClick = () => {
    window.location.reload(false);
  }
  return (
    <ul>
      <li onClick={handleClick}><NavLink to='/'><i className="small material-icons">home</i>
          Home
      </NavLink></li>
      <li onClick={handleClick}><NavLink to='/create'><i className="small material-icons">add</i>Add Member</NavLink></li> 
      <li onClick={handleClick}><a onClick={props.signOut}><i className="small material-icons">exit_to_app</i>Log Out</a></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
