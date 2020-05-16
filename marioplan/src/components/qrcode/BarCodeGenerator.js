import React, { Component } from 'react'
import { connect } from 'react-redux'
import Barcode from "react-barcode";
class BarCodeGenerator extends Component {
  render() {
    const { qrValue } = this.props;
    return (
      <div className="container">
        <div className="row">
      <div className="col s12 m12">
      <div className="card">
      <div className="card-image">
        <Barcode value={qrValue} format="CODE128" displayValue={false}/>
      </div>
          <div className="card-content">
            <p> We shall stick this barcode in vechicle and security man will scan this barcode using another app I am building.
              So only society vechicle can come inside.
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
export default connect(mapStateToProps)(BarCodeGenerator)
