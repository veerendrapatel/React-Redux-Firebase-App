import React, { Component } from 'react'
import { connect } from 'react-redux'
class UnderCons extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="row">
      <div className="col s12 m12">
      <div className="card">
      <div className="card-image">
            <img alt="imgholder" src="https://firebasestorage.googleapis.com/v0/b/simandhar-7b623.appspot.com/o/under.png?alt=media&token=7179cfb2-f33d-4572-8177-21320eeae8c3" />
          </div>
          <div className="card-content">
            <p>Under construction</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      
    )
  }
}
const mapStateToProps = (state) => {
  //const projects = state.firestore.data.projects;
  return {
    //profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(UnderCons)
