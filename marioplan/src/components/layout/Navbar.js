import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import {SideNav, SideNavItem, Button} from 'react-materialize';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { auth, profile } = props;
  console.log('auth', auth);
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
      trigger={<span node="button"><i class="large material-icons">menu</i></span>}
    >
      <SideNavItem
        user={{
          background: 'https://placeimg.com/640/480/tech',
          email: auth.email,
          image: 'https://placeimg.com/640/480/tech/static/media/react-materialize-logo.824c6ea3.svg',
          name: profile.firstName
        }}
        userView
      />
      {links}
      {/* <SideNavItem
        href="#!icon"
        icon={<Icon>cloud</Icon>}
      >
        First Link With Icon
      </SideNavItem> */}
      {/* <SideNavItem href="#!second">
        Second Link
      </SideNavItem>
      <SideNavItem divider /> */}
      {/* <SideNavItem subheader>
        Subheader
      </SideNavItem>
      <SideNavItem
        href="#!third"
        waves
      >
        Third Link With Waves
      </SideNavItem> */}
    </SideNav>
  </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
