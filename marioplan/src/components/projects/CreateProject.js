import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    flatno: '',
    member1name: '',
    totalfamilycount: 0,
    member1bloodgroup: '',
    member1email: '',
    member1phone: '',
    member1phone2: '',
    member1bike1: '',
    member1bike2: '',
    member1carno: '',
    member1officeaddress: '',
    otherdetail: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
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
            <label className="active" htmlFor="flatno">Flat No</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1name" onChange={this.handleChange} value={this.state.member1name}/>
            <label className="active" htmlFor="member1name">Name</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="number" id='totalfamilycount' onChange={this.handleChange} value={this.state.totalfamilycount}/>
            <label className="active" htmlFor="totalfamilycount">Fmaily members count</label>
          </div>
          <div className="input-field col s6">
            <input type="email" id="member1email" onChange={this.handleChange} value={this.state.member1email}/>
            <label className="active" htmlFor="member1email">Email</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="number" id='member1phone' onChange={this.handleChange} value={this.state.member1phone}/>
            <label className="active" htmlFor="member1phone">Primary mobile no</label>
          </div>
          <div className="input-field col s6">
            <input type="number" id="member1phone2" onChange={this.handleChange} value={this.state.member1phone2}/>
            <label className="active" htmlFor="member1phone2">Secondary mobile no</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1bike1' onChange={this.handleChange} value={this.state.member1bike1}/>
            <label className="active" htmlFor="member1bike1">Bike no</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1bike2" onChange={this.handleChange} value={this.state.member1bike2}/>
            <label className="active" htmlFor="member1bike2">Bike no2</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id="member1carno" onChange={this.handleChange} value={this.state.member1carno}/>
            <label className="active" htmlFor="member1carno">Car no</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1bloodgroup' onChange={this.handleChange} value={this.state.member1bloodgroup}/>
            <label className="active" htmlFor="member1bloodgroup">Fmaily members blood groups(seperated by comma)</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1officeaddress" onChange={this.handleChange} value={this.state.member1officeaddress}/>
            <label className="active" htmlFor="member1officeaddress">Office address</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <textarea id="otherdetail" className="materialize-textarea" onChange={this.handleChange} value={this.state.otherdetail}></textarea>
            <label className="active" htmlFor="otherdetail">Other Detail</label>
          </div>
          </div>
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
