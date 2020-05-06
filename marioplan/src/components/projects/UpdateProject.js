import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class UpdateProject extends Component {
  state = {
    id: this.props.directProject ? this.props.directProject.id : '',
    flatno: this.props.directProject? this.props.directProject.flatno : ''
    // member1name: this.props.project.member1name,
    // member1bloodgrp: this.props.project.member1bloodgrp,
    // member1phone: this.props.project.member1phone,
    // member1officeaddress: this.props.project.member1officeaddress,
    // member1email: this.props.project.member1email,
    // member1twowheel: this.props.project.member1twowheel,
    // member1carno: this.props.project.member1carno,
    // member2name: this.props.project.member2name,
    // member2bloodgrp: this.props.project.member2bloodgrp,
    // member2phone: this.props.project.member2phone,
    // member2officeaddress: this.props.project.member2officeaddress,
    // member2email: this.props.project.member2email,
    // member2twowheel: this.props.project.member2twowheel,
    // member2carno: this.props.project.member2carno,
    // otherdetail: this.props.project.otherdetail
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container col s12">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Member Detail</h5>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='flatno' onChange={this.handleChange} value={this.state.flatno}/>
            <label className="active" htmlFor="flatno">Flat No</label>
          </div>
          {/* <div className="input-field col s6">
            <input type="text" id="member1name" onChange={this.handleChange} defaultValue={project&&project.member1name ? project.member1name : ''}/>
            <label className="active" htmlFor="member1name">Member 1 Name</label>
          </div> */}
          </div>
          {/* <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1bloodgrp' onChange={this.handleChange} defaultValue={project&& project.member1bloodgrp? project.member1bloodgrp : ''}/>
            <label className="active" htmlFor="member1bloodgrp">Member 1 Blood Group</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1phone" onChange={this.handleChange} defaultValue={project&&project.member1phone ? project.member1phone : ''}/>
            <label className="active" htmlFor="member1phone">Member 1 Phone No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1officeaddress' onChange={this.handleChange} defaultValue={project&&project.member1officeaddress ? project.member1officeaddress : ''}/>
            <label className="active" htmlFor="member1officeaddress">Member 1 Office Address</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1email" onChange={this.handleChange} defaultValue={project&&project.member1email ? project.member1email : ''}/>
            <label className="active" htmlFor="member1email">Member 1 Email Id</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1twowheel' onChange={this.handleChange} defaultValue={project&&project.member1twowheel ? project.member1twowheel : ''}/>
            <label className="active" htmlFor="member1twowheel">Member 1 Bike No</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1carno" onChange={this.handleChange} defaultValue={project&&project.member1carno ? project.member1carno : ''}/>
            <label className="active" htmlFor="member1carno">Member 1 Car No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id="member2name" onChange={this.handleChange} defaultValue={project&&project.member2name ? project.member2name : ''}/>
            <label className="active" htmlFor="member2name">Member 2 Name</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2bloodgrp' onChange={this.handleChange} defaultValue={project&&project.member2bloodgrp ? project.member2bloodgrp : ''}/>
            <label className="active" htmlFor="member2bloodgrp">Member 2 Blood Group</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2phone" onChange={this.handleChange} defaultValue={project&&project.member2phone ? project.member2phone : ''}/>
            <label className="active" htmlFor="member2phone">Member 2 Phone No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2officeaddress' onChange={this.handleChange} defaultValue={project&&project.member2officeaddress ? project.member2officeaddress : ''}/>
            <label className="active" htmlFor="member2officeaddress">Member 2 Office Address</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2email" onChange={this.handleChange} defaultValue={project&&project.member2email ? project.member2email : ''}/>
            <label className="active" htmlFor="member2email">Member 2 Email Id</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2twowheel' onChange={this.handleChange} defaultValue={project&&project.member2twowheel ? project.member2twowheel : ''}/>
            <label className="active" htmlFor="member2twowheel">Member 2 Bike No</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2carno" onChange={this.handleChange} defaultValue={project&&project.member2carno ? project.member2carno : ''}/>
            <label className="active" htmlFor="member2carno">Member 2 Car No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <textarea id="otherdetail" className="materialize-textarea" onChange={this.handleChange} defaultValue={project&&project.otherdetail ? project.otherdetail : ''}></textarea>
            <label className="active" htmlFor="otherdetail">Other Detail</label>
          </div>
          </div> */}
          <div className="input-field">
            <button className="btn pink lighten-1">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  console.log('project', project);
  return {
    auth: state.firebase.auth,
    project,
    directProject: state.project.directProjects.filter(i => 
      i.id === id
    )[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProject: (project) => dispatch(updateProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UpdateProject);