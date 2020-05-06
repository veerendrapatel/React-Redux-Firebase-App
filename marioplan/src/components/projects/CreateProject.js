import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    flatno: '',
    // member1name: '',
    // member1bloodgrp: '',
    // member1phone: '',
    // member1officeaddress: '',
    // member1email: '',
    // member1twowheel: '',
    // member1carno: '',
    // member2name: '',
    // member2bloodgrp: '',
    // member2phone: '',
    // member2officeaddress: '',
    // member2email: '',
    // member2twowheel: '',
    // member2carno: '',
    // otherdetail: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
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
            <label htmlFor="flatno">Flat No</label>
          </div>
          {/* <div className="input-field col s6">
            <input type="text" id="member1name" onChange={this.handleChange} />
            <label htmlFor="member1name">Member 1 Name</label>
          </div> */}
          </div>
          {/* <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1bloodgrp' onChange={this.handleChange} />
            <label htmlFor="member1bloodgrp">Member 1 Blood Group</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1phone" onChange={this.handleChange} />
            <label htmlFor="member1phone">Member 1 Phone No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1officeaddress' onChange={this.handleChange} />
            <label htmlFor="member1officeaddress">Member 1 Office Address</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1email" onChange={this.handleChange} />
            <label htmlFor="member1email">Member 1 Email Id</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1twowheel' onChange={this.handleChange} />
            <label htmlFor="member1twowheel">Member 1 Bike No</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1carno" onChange={this.handleChange} />
            <label htmlFor="member1carno">Member 1 Car No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id="member2name" onChange={this.handleChange} />
            <label htmlFor="member2name">Member 2 Name</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2bloodgrp' onChange={this.handleChange} />
            <label htmlFor="member2bloodgrp">Member 2 Blood Group</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2phone" onChange={this.handleChange} value={this.state.member2phone}/>
            <label htmlFor="member2phone">Member 2 Phone No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2officeaddress' onChange={this.handleChange} />
            <label htmlFor="member2officeaddress">Member 2 Office Address</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2email" onChange={this.handleChange} />
            <label htmlFor="member2email">Member 2 Email Id</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member2twowheel' onChange={this.handleChange} />
            <label htmlFor="member2twowheel">Member 2 Bike No</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member2carno" onChange={this.handleChange} />
            <label htmlFor="member2carno">Member 2 Car No</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <textarea id="otherdetail" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="otherdetail">Other Detail</label>
          </div>
          </div> */}
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
