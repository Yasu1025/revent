import React, { Component } from 'react'
import { connect } from 'react-redux'
import cuid from 'cuid'
import { Segment, Form, Button } from 'semantic-ui-react'
import { createEvent, updateEvent } from '../eventActions'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }

  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }
}

const actions = {
  createEvent,
  updateEvent
}

class EventForm extends Component {

  state={
    formEvent: Object.assign({}, this.props.event)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.formEvent.id){
      // Update existing event
      this.props.updateEvent(this.state.formEvent)
      this.props.history.push('/events')
    }else{
      // Create new Event
      const newEvent = {
        ...this.state.formEvent,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      }
      this.props.createEvent(newEvent)
      this.props.history.push('/events')
    }

    
  }

  onInputChange = (e) => {
    const newEvent = this.state.formEvent
    newEvent[e.target.name] = e.target.value
    this.setState({
      formEvent: newEvent
      }
    )
  }
  


  render() {

    const { onCancelForm } = this.props
    const { formEvent } = this.state

    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name="title" value={formEvent.title} onChange={this.onInputChange} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name="date" value={formEvent.date} onChange={this.onInputChange} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name="city" value={formEvent.city} onChange={this.onInputChange} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name="venue" value={formEvent.venue} onChange={this.onInputChange} placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name="hostedBy" value={formEvent.hostedBy} onChange={this.onInputChange} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default  connect(mapState, actions)(EventForm)