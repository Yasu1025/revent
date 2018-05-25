import React, { Component } from 'react'
import { Menu, Container, Button} from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { auth } from 'firebase';

class NavBar extends Component {

  state = {
    authentication: true
  }

  handleSignIn = () => {
    this.setState({
      authentication: true
    })
  } 

  handleSignOut = () => {
    this.setState({
      authentication: false
    })

    this.props.history.push("/")
  } 

  render() {

    const { authentication } = this.state

    return (
      <Menu inverted fixed="top">
        <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="/assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            {(authentication) && 
              <Menu.Item as={NavLink} to="/people" name="People" />
            }
            {(authentication) &&
              <Menu.Item>
                <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
              </Menu.Item>
            }
            {
              (authentication) ?
                <SignedInMenu  signOut={this.handleSignOut} /> :
                <SignedOutMenu signIn={this.handleSignIn} />
            }
        </Container>
      </Menu>
    )
  }
}


export default withRouter(NavBar)
