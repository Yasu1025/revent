import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import EventList from '../EventList/EventList'
import EventActivity from '../eventActivity/EventActivity'
import { deleteEvent } from '../eventActions'
import Loading from '../../../app/layout/Loading'


const mapState = (state) => ({
  events: state.events,
  isLoading: state.async.isLoading
})

const actions = {
  deleteEvent
}


class EventDashBoard extends Component {


  handleDeleteEvent = (eventId) => () => {
   this.props.deleteEvent(eventId)
  }

  render() {

    const { events, isLoading } = this.props
    if(isLoading) return <Loading inverted = {true}/>

    return (
      
      <Grid>
        <Grid.Column width={10}>
            <EventList events={events}
                       onDeleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }
}


export default connect(mapState, actions)(EventDashBoard)
