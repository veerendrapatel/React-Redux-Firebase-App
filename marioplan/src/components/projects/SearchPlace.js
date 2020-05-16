import React, { Component } from 'react'
import { connect } from 'react-redux'
class SearchPlace extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container">
        <div className="row">
        <div className="progress">
           <div className="indeterminate"></div>
         </div>
      <div className="col s12 m12">
      <div className="card">
      <div className="card-image">
            <img alt="imgholder" src="https://firebasestorage.googleapis.com/v0/b/simandhar-7b623.appspot.com/o/search.jpg?alt=media&token=84750e0e-fec8-413e-9187-c346a1840499" />
          </div>
          <div className="card-content">
            <p>Please search for members</p>
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
export default connect(mapStateToProps)(SearchPlace)
