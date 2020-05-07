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
          //background: 'https://placeimg.com/640/480/tech',
          email: auth.email || '',
          //image: 'https://placeimg.com/640/480/tech/static/media/react-materialize-logo.824c6ea3.svg',
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
