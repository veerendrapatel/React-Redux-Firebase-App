import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class QrCreate extends Component {
  state = {
    vehicalNo: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    // this.props.createProject(this.state);
    // this.props.history.push('/');
    try {
      await axios.get(`http://barcodes4.me/barcode/c128a/${this.state.vehicalNo}.png`)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
    } catch(error) {

    }
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container col s12">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Vehical No</h5>
          <div className="row">
          <div className="input-field col s3">
            <input type="text" id='vehicalNo' onChange={this.handleChange} value={this.state.vehicalNo} required/>
            <label htmlFor="vehicalNo">Vehical No</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(QrCreate)
