import React, { Component } from 'react'

class Awaiting extends Component {
  render() {
    return (
      <div className="container">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
        <div className="row">
        <div className="progress">
           <div className="indeterminate"></div>
         </div>
      <div className="col s12 m12">
      <div className="card">
      <div className="card-image">
            <img src="https://firebasestorage.googleapis.com/v0/b/simandhar-7b623.appspot.com/o/jain3.jpg?alt=media&token=6dfcd8f9-283a-47e3-aac0-4f31751a9e57" />
          </div>
          <div className="card-content">
            <p>Thank you for applying for an account. Your account is currently pending approval by the administrator</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      
    )
  }
}

export default Awaiting;
