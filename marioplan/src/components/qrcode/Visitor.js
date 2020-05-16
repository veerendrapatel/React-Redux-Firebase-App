import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
//import axios from 'axios'
import QrGenerator from './QrGenerator'
class Visitor extends Component {
  state = {
    visitorName: '',
    visitorPhone: '',
    visitorPurpose: '',
    visitorDetail: '',
    showQr: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    this.setState({showQr : true});
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container col s12">
        {!this.state.showQr ? <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Visitor Pass</h5>
          <div className="row">
          <div className="input-field col s3">
            <input type="text" id='visitorName' onChange={this.handleChange} value={this.state.visitorName} required/>
            <label htmlFor="visitorName">Visitor Name</label>
          </div>
          <div className="input-field col s3">
            <input type="number" id='visitorPhone' onChange={this.handleChange} value={this.state.visitorPhone}/>
            <label htmlFor="visitorPhone">Visitor Phone</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s3">
            <input type="text" id='visitorPurpose' onChange={this.handleChange} value={this.state.visitorPurpose} required/>
            <label htmlFor="visitorPurpose">Visitor Purpose</label>
          </div>
          <div className="input-field col s3">
            <input type="text" id='visitorDetail' onChange={this.handleChange} value={this.state.visitorDetail}/>
            <label htmlFor="visitorDetail">Other Detail</label>
          </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form> : ''}
        {this.state.showQr ? <QrGenerator qrValues={this.state} /> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)
