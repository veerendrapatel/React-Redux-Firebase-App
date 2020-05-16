import React, { Component } from 'react'
import { connect } from 'react-redux'
import QrCode  from 'react.qrcode.generator'
class QrGenerator extends Component {
  render() {
    const { qrValues } = this.props;
    return (
      <div className="container">
        <div className="row">
      <div className="col s12 m12">
      <div className="card">
      <div className="card-image">
      <QrCode value={qrValues} size='200'/>
      </div>
          <div className="card-content">
            <p> Please share this with visitor. Security man will scan this and let the visitor in
            </p>
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
export default connect(mapStateToProps)(QrGenerator)
