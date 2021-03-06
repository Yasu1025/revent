import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailChat from './EventDetailChat'
import EventDetailSideBar from './EventDetailSideBar'


const mapState = (state, ownProps) =>{
  const eventId = ownProps.match.params.id
  let event = {}
  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return{
    event
  }
}

const EventDetailPage = ({event}) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapState)(EventDetailPage)
