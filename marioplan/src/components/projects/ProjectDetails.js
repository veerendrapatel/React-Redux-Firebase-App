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
    console.log('directProject after filter',directProject.flatno);
    return (
      <div className="container section project-details">
      <div className="row-flex-container">
      <Link to={'/update/' + props.match.params.id} key={props.match.params.id} className="waves-effect waves-light btn-large"><i className="material-icons left">edit</i>Edit</Link>
      <a className="waves-effect waves-light btn-large" onClick={() => handleDel(props.match.params.id, props)}><i className="material-icons left">delete_forever</i>Delete</a>
      </div>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{`Flat No - ` + directProject ? directProject.flatno : ''}</span>
            {/* <p>{`Name           - ${project.member1name}`}</p>
            <p>{`Blood Group    - ${project.member1bloodgrp}`}</p>
            <p>{`Phone          - ${project.member1phone}`}</p>
            <p>{`Office Address - ${project.member1officeaddress}`}</p>
            <p>{`Email          - ${project.member1email}`}</p>
            <p>{`Two Wheeler    - ${project.member1twowheel}`}</p>
            <p>{`Four Wheeler   - ${project.member1carno}`}</p>
            <p>{`Member 2 Name  - ${project.member2name}`}</p>
            <p>{`Blood Group    - ${project.member2bloodgrp}`}</p>
            <p>{`Phone          - ${project.member2phone}`}</p>
            <p>{`Office Address - ${project.member2officeaddress}`}</p>
            <p>{`Email          - ${project.member2email}`}</p>
            <p>{`Two Wheeler    - ${project.member2twowheel}`}</p>
            <p>{`Four Wheeler   - ${project.member2carno}`}</p>
            <p>{`Other Details  - ${project.otherdetail}`}</p> */}
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
  console.log('inside ProjectDetails-',state);
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
