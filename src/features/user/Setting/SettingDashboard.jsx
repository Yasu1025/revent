import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import BasicPage from './BasicPage'
import PhotoPage from './PhotoPage'
import SettingNav from './SettingNav'

const SettingDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/setting" to="/setting/basic" />
          <Route path="/setting/about" component={AboutPage} />
          <Route path="/setting/account" component={AccountPage} />
          <Route path="/setting/basic" component={BasicPage} />
          <Route path="/setting/photos" component={PhotoPage} />
        </Switch>
      </Grid.Column>
      <SettingNav />
    </Grid>
  )
}

export default SettingDashboard
