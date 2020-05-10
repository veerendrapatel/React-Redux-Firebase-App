import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignedInLinks = (props) => {
  // let initials = '';
  // if(props.profile.firstName && props.profile.lastName) {
  //   initials = props.profile.firstName.charAt(0) + props.profile.lastName.charAt(0)
  // }
  const { auth, members, profile } = props;
  const handleClick = () => {
    window.location.reload(false);
  }
  if (profile.approved === false) return <Redirect to='/approvalWaiting' />
  const isUserAddedMember = members.some(el => el.authorId === auth.uid )
  return (
    <ul>
      <li onClick={handleClick}><NavLink to='/'><i className="small material-icons">home</i>
          Home
      </NavLink></li>
      {!isUserAddedMember && <li onClick={handleClick}><NavLink to='/create'><i className="small material-icons">add</i>Add Member</NavLink></li>} 
      <li onClick={handleClick}><a onClick={props.signOut}><i className="small material-icons">exit_to_app</i>Log Out</a></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
const mapStateToProps = (state) => {
  //const projects = state.firestore.data.projects;
  return {
    auth: state.firebase.auth,
    members: state.project.directProjects,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
