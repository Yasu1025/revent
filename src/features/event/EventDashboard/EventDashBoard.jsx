import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { deleteEvent } from '../eventActions'


const mapState = (state) => ({
  events: state.events
})

const actions = {
  deleteEvent
}


class EventDashBoard extends Component {


  handleDeleteEvent = (eventId) => () => {
   this.props.deleteEvent(eventId)
  }

  render() {

    const { events } = this.props

    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList events={events}
                       onDeleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h1>Work on Later...</h1>
        </Grid.Column>
      </Grid>
    )
  }
}


export default connect(mapState, actions)(EventDashBoard)
