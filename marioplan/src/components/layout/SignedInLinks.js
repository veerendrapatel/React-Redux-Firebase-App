import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  // let initials = '';
  // if(props.profile.firstName && props.profile.lastName) {
  //   initials = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
  // }
  return (
    <ul>
      <li><NavLink to='/create'><i className="small material-icons">add</i>Add Member</NavLink></li> 
      <li><a onClick={props.signOut}><i className="small material-icons">exit_to_app</i>Log Out</a></li>
      {/* <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {initials}
      </NavLink></li> */}
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
