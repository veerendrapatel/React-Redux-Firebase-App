import React from 'react'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import '../../css/project.css';
import { Link } from 'react-router-dom'
import {deleteProject} from '../../store/actions/projectActions.js'

const handleDel = (id, props)=> {
    props.deleteProject(id);
    props.history.push('/');
   }
const ProjectDetails = (props) => {
  
  const { auth, directProject } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (directProject) {
    return (
      <div className="container section project-details">
      {auth.uid === directProject.authorId && <div className="row-flex-container">
      <Link to={'/update/' + props.match.params.id} key={props.match.params.id} className="waves-effect waves-light btn-large"><i className="material-icons left">edit</i>Edit</Link>
      <a className="waves-effect waves-light btn-large" onClick={() => handleDel(props.match.params.id, props)}><i className="material-icons left">delete_forever</i>Delete</a>
      </div>}
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Flat No - {directProject ? directProject.flatno : ''}</span>
            <ul className="collection with-header">
            {directProject && directProject.member1name && <li className="collection-header indigo lighten-5"><h3>{directProject.member1name}</h3></li>}
            {directProject && directProject.flatstatus && <li className="collection-header lime lighten-1">Flat Status - {directProject.flatstatus}</li>}
            {directProject && directProject.totalfamilycount && <li className="collection-header yellow lighten-5">Family members - {directProject.totalfamilycount}</li>}
            {directProject && directProject.member1phone && <li className="collection-header red lighten-5">Primary no - {directProject.member1phone}</li>}
            {directProject && directProject.member1phone2 && <li className="collection-header red lighten-4">Secondary no - {directProject.member1phone2}</li>}
            {directProject && directProject.member1bloodgroup && <li className="collection-header red lighten-2">Blood group - {directProject.member1bloodgroup}</li>}
            {directProject && directProject.member1bike1 && <li className="collection-header deep-purple lighten-5">2 Wheeler - {directProject.member1bike1}</li>}
            {directProject && directProject.member1bike2 && <li className="collection-header green lighten-5">2 Wheeler - {directProject.member1bike2}</li>}
            {directProject && directProject.member1dob && <li className="collection-header green lighten-4">DOB - {directProject.member1dob}</li>}
            {directProject && directProject.member1officeaddress && <li className="collection-header green lighten-3">Office address - {directProject.member1officeaddress}</li>}
            {directProject && directProject.member1carno && <li className="collection-header green lighten-4">Car no - {directProject.member1carno}</li>}
            {directProject && directProject.otherdetail && <li className="collection-header lime lighten-1">Other info - {directProject.otherdetail}</li>}
          </ul>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {directProject.authorFirstName} {directProject.authorLastName}</div>
            <div>{moment(directProject.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  //const projects = state.firestore.data.projects;
  //const project = projects ? projects[id] : null
  return {
    //project: project,
    auth: state.firebase.auth,
    directProject: state.project.directProjects.filter(i => 
      i.id === id
    )[0]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  //,
  // firestoreConnect([{
  //   collection: 'projects'
  // }])
)(ProjectDetails)
