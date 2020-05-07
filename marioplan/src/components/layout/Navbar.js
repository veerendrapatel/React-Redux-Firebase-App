import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import {SideNav, SideNavItem} from 'react-materialize';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <div>
    <style>
      {`
              #root > div > div {
                z-index: 99999 !important;
              }
      `}
    </style>
    <SideNav
      id="SideNav-10"
      options={{
        draggable: true
      }}
      trigger={<span node="button"><i className="small material-icons">menu</i></span>}
    >
      <SideNavItem
        user={{
          background: 'https://firebasestorage.googleapis.com/v0/b/simandhar-7b623.appspot.com/o/jain2.jpeg?alt=media&token=316032f1-0715-4bf1-8ac3-ad5d487646b8',
          email: auth.email || '',
          image: 'https://firebasestorage.googleapis.com/v0/b/simandhar-7b623.appspot.com/o/marble-jain.jpg?alt=media&token=d407706e-16fb-42c0-bcd6-68879394acf0',
          name: profile.firstName || 'Simandhar Darshan'
        }}
        userView
      />
      {links}
    </SideNav>
  </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
