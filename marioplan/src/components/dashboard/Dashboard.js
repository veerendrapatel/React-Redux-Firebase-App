import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import SearchPlace from '../projects/SearchPlace';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {listMembers} from '../../store/actions/projectActions.js';

class Dashboard extends Component {
  state = {search: '', searched: []};
  componentDidMount() {
    this.props.listMembers();
  }
  handleSearch = (e) => {
    const searched = this.props.directProjects.filter(obj => Object.keys(obj).some(key => String(obj[key]).toLowerCase().includes(e.target.value.toLowerCase())));
    this.setState({search: e.target.value.toLowerCase(), searched});
  }
  render() {
    const { auth, notifications, directProjects } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    
    return (
      <div className="dashboard container">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input id="search" type="text" onChange={this.handleSearch}/>
        </div>
        <div className="row">
          <div className="col s12 m6">
            {this.state.search ? <ProjectList projects={this.state.searched} /> :
            <SearchPlace />}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
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
    notifications: state.firestore.ordered.notifications,
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
  firestoreConnect([
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
