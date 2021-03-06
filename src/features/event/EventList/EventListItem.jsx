import React, { Component } from 'react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom' 
import format from 'date-fns/format'
import { Segment, Item, List, Button, Icon} from 'semantic-ui-react'

class EventListItem extends Component {
  render() {
    const { event, onDeleteEvent } = this.props
    return (
        <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(event.date, "YYYY dddd Do MMMM")} at {format(event.date, "HH:mm")} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            { event.attendees &&
              event.attendees.map((attendee) => (
                <EventListAttendee attendee={attendee} key={attendee.id} />
              ))
            }
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button onClick={onDeleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
          <Button as={Link} to={`/event/${event.id}`}  color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    )
  }
}


export default EventListItem