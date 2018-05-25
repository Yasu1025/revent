import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import cuid from 'cuid'

import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'


const eventsList = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]



class EventDashBoard extends Component {

    state = {
      events: eventsList,
      selectedEvent: null,
      isOpen: false
    }


  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  handleCanselForm = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateEvent = (newEvent) => {
      newEvent.id = cuid()
      newEvent.hostPhotoURL = "/assets/user.png"
      const updatedState = [...this.state.events, newEvent]
      this.setState({
        events:updatedState,
        isOpen: false
      })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          return Object.assign({}, updatedEvent)
        }else{
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventOpen) => () => {
      this.setState({
        selectedEvent: eventOpen,
        isOpen: true
      })
  }

  handleDeleteEvent = (eventId) => () => {
    const updatedState = this.state.events.filter(event => (
        event.id !== eventId
    ))
    this.setState({
      events: updatedState
    })
  }

  render() {

    const { selectedEvent } = this.state

    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList events={this.state.events}
                       onOpenEvent={this.handleOpenEvent}
                       onDeleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
        <Button positive content="Create Event" onClick={this.handleFormOpen} />
            {this.state.isOpen && <EventForm selectedEvent={selectedEvent}
                                             onCancelForm={this.handleCanselForm}
                                             onCreateEvent={this.handleCreateEvent}
                                             onUpdateEvent={this.handleUpdateEvent} /> } 
        </Grid.Column>
      </Grid>
    )
  }
}


export default EventDashBoard
