import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
  id: "",
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
}

class EventForm extends Component {

  state={
    formEvent: emptyEvent
  }

  componentDidMount(){
    if(this.props.selectedEvent !== null){
        this.setState({
          formEvent: this.props.selectedEvent
        })
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({
        formEvent: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.formEvent.id){
      this.props.onUpdateEvent(this.state.formEvent)
    }else{
      this.props.onCreateEvent(this.state.formEvent)
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
                <Button type="button" onClick={onCancelForm}>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default  EventForm