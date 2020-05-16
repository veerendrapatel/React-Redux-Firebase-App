import React, { Component } from 'react'
import QrList from './QrList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {listMembers} from '../../store/actions/projectActions.js';
import { Link } from 'react-router-dom'

class QrContainer extends Component {
  state = {search: '', searched: []};
  componentDidMount() {
    this.props.listMembers();
  }
  handleSearch = (e) => {
    const searched = this.props.directProjects.filter(obj => Object.keys(obj).some(key => String(obj[key]).toLowerCase().includes(e.target.value.toLowerCase())));
    this.setState({search: e.target.value.toLowerCase(), searched});
  }
  render() {
    const { auth, directProjects } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          <Link to={'/qrcode/create'} key={'1'} className="waves-effect waves-light btn-large"><i className="material-icons left">add</i>Create</Link>
            <QrList projects={this.props.directProjects} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
   // notifications: state.firestore.ordered.notifications,
    directProjects: state.project.directProjects
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    listMembers: () => dispatch(listMembers())
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  // ])
)(QrContainer)
