import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import BarCodeGenerator from './BarCodeGenerator'
class BarCreate extends Component {
  state = {
    vechicleNo: '',
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
          <h5 className="grey-text text-darken-3">Vechicle No</h5>
          <div className="row">
          <div className="input-field col s6">
            <input type="text" id='vechicleNo' onChange={this.handleChange} value={this.state.vechicleNo} required/>
            <label htmlFor="vechicleNo">Vechicle No</label>
          </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form> : ''}
        {this.state.showQr ? <BarCodeGenerator qrValue={this.state.vechicleNo} /> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(BarCreate)
