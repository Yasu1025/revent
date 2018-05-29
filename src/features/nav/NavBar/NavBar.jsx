import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Container, Button} from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { modalOpen } from '../../modals/modalActions'
import { signOut } from '.././../auth/authAction'


const mapState = (state) => ({
  auth: state.auth
})

const actions = {
  modalOpen,
  signOut
}

class NavBar extends Component {


  handleSignIn = () => {
    this.props.modalOpen("LoginModal")
  } 

  handleRegister = () => {
    this.props.modalOpen("RegisterModal")
  }

  handleSignOut = () => {
    this.props.signOut()

    this.props.history.push("/")
  } 

  render() {

    const { auth } = this.props
    const authenticated = auth.authenticate

    return (
      <Menu inverted fixed="top">
        <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="/assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            {(authenticated) && 
              <Menu.Item as={NavLink} to="/people" name="People" />
            }
            {(authenticated) &&
              <Menu.Item>
                <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
              </Menu.Item>
            }
            {
              (authenticated) ?
                <SignedInMenu loggedInUser={auth.loggedInUser}  signOut={this.handleSignOut} /> :
                <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
            }
        </Container>
      </Menu>
    )
  }
}


export default withRouter(connect(mapState, actions)(NavBar))
