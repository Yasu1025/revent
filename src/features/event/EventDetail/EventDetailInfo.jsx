
import React, { Component } from 'react'
import { Segment, Icon, Grid, Button } from 'semantic-ui-react'
import EventDetailMap from './EventDetailMap'
import format from 'date-fns/format'



 class EventDetailInfo extends Component {

  state = {
    showMap: false
  }

  // イベントを編集しようと編集ページを映ると、APIを二度呼ばれるのを防ぐ
  componentWillUnmount(){
    this.setState({
      showMap: false
    })
  }

  showMapToggle = () => {
    this.setState(previousState =>({
      showMap: !previousState.showMap
    }))
  }

  render() {
    const {event} = this.props
    return (
      <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
          <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="calendar" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
                  {format(event.date, "YYYY dddd Do MMMM")} at    
                  {format(event.date, "h:mm A")}
            </span>
            
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="marker" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button color="teal" size="tiny"
                    content={this.state.showMap ? "Hide Map" : "Show Map"}
                    onClick={this.showMapToggle} />
          </Grid.Column>
        </Grid>
      </Segment>
      {
        this.state.showMap &&
        <EventDetailMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng} />
      }
    </Segment.Group>
    )
  }
}




export default EventDetailInfo
