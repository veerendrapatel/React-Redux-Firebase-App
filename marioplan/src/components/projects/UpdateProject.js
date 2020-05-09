import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class UpdateProject extends Component {
  state = {
    id: this.props.directProject ? this.props.directProject.id : '',
    flatno: this.props.directProject? this.props.directProject.flatno : '',
    member1name: this.props.directProject? this.props.directProject.member1name : '',
    totalfamilycount: this.props.directProject? this.props.directProject.totalfamilycount : 0,
    member1bloodgroup: this.props.directProject? this.props.directProject.member1bloodgroup : '',
    member1phone: this.props.directProject? this.props.directProject.member1phone : '',
    member1phone2: this.props.directProject? this.props.directProject.member1phone2 : '',
    member1bike1: this.props.directProject? this.props.directProject.member1bike1 : '',
    member1bike2: this.props.directProject? this.props.directProject.member1bike2 : '',
    member1carno: this.props.directProject? this.props.directProject.member1carno : '',
    member1officeaddress: this.props.directProject? this.props.directProject.member1officeaddress : '',
    otherdetail: this.props.directProject? this.props.directProject.otherdetail : '',
    member1dob: this.props.directProject && this.props.directProject.member1dob != undefined? this.props.directProject.member1dob : '',
    flatstatus: this.props.directProject && this.props.directProject.flatstatus != undefined ? this.props.directProject.flatstatus : '',
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
          <div className="input-field col s3">
            <input type="text" id='flatno' onChange={this.handleChange} value={this.state.flatno} required/>
            <label className="active" htmlFor="flatno">Flat No</label>
          </div>
          <div className="input-field col s3">
            <input type="text" id="flatstatus" onChange={this.handleChange} value={this.state.flatstatus} required/>
            <label className="active" htmlFor="flatstatus">Flat Self Occupied/Rented</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1name" onChange={this.handleChange} value={this.state.member1name} required/>
            <label className="active" htmlFor="member1name">Name</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="number" id='member1phone' onChange={this.handleChange} value={this.state.member1phone} required/>
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
            <input type="text" id="member1dob" onChange={this.handleChange} value={this.state.member1dob}/>
            <label className="active" htmlFor="member1dob">DOB</label>
          </div>
          <div className="input-field col s6">
            <input type="number" id='totalfamilycount' onChange={this.handleChange} value={this.state.totalfamilycount}/>
            <label className="active" htmlFor="totalfamilycount">Fmaily members count</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='member1bloodgroup' onChange={this.handleChange} value={this.state.member1bloodgroup} required/>
            <label className="active" htmlFor="member1bloodgroup">Blood group</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="member1officeaddress" onChange={this.handleChange} value={this.state.member1officeaddress}/>
            <label className="active" htmlFor="member1officeaddress">Office address</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id="member1carno" onChange={this.handleChange} value={this.state.member1carno}/>
            <label className="active" htmlFor="member1carno">Car no</label>
          </div>
          <div className="input-field col s6">
            <textarea id="otherdetail" className="materialize-textarea" onChange={this.handleChange} value={this.state.otherdetail}></textarea>
            <label className="active" htmlFor="otherdetail">Other Detail</label>
          </div>
          </div>
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
  //const projects = state.firestore.data.projects;
  return {
    auth: state.firebase.auth,
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