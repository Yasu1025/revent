import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'

import EventDashboard from '../../features/event/EventDashboard/EventDashBoard'
import NavBar from '../../features/nav/NavBar/NavBar'
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailPage from '../../features/event/EventDetail/EventDetailPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetail from '../../features/user/UserDetail/UserDetail'
import SettingDashboard from '../../features/user/Setting/SettingDashboard'
import HomePage from '../../features/home/HomePage'

import TestComponent from '../../features/test/TestComponent'

// api key  AIzaSyD3ZaC2cUMiGgUtVvYrHFY9wxwkjRWazNY

class App extends Component {
  render() {
    return (

      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>

        <Route path="/(.+)" render={()=>(
            <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/test" component={TestComponent}/>
                <Route path="/events" component={EventDashboard}/>
                <Route path="/event/:id" component={EventDetailPage}/>
                <Route path="/manage/:id" component={EventForm}/>
                <Route path="/people" component={PeopleDashboard}/>
                <Route path="/profile/:id" component={UserDetail}/>
                <Route path="/setting" component={SettingDashboard}/>
                <Route path="/createEvent" component={EventForm}/>
              </Switch>
            </Container>
            </div>
        )} />

     

      </div>
      
    );
  }
}


export default App;

