/* global google */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import moment from 'moment'
import cuid from 'cuid' // Create Random ID
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Script from 'react-load-script'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'

import { createEvent, updateEvent } from '../eventActions'
import TextInput from '../../../app/common/Form/TextInput'
import TextArea from '../../../app/common/Form/TextArea'
import SelectInput from '../../../app/common/Form/SelectInput'
import DateInput from '../../../app/common/Form/DateInput'
import PlaceTextInput from '../../../app/common/Form/PlaceTextInput'

// Setup for redux ----------------------------------

const mapState = (state, ownProps) => {

  const eventId = ownProps.match.params.id
  let event = {}

  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    initialValues: event
  }
}

const actions = {
  createEvent,
  updateEvent
}

// Setup end ----------------------------------

// Categories for Category input auto complete
const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


// Validation using 'revalidate'
const validate =combineValidators({
  title: isRequired('Title'),
  category: isRequired({message: "Please select Category"}),
  description: composeValidators(
    isRequired({message: "Please Enter Description."}),
    hasLengthGreaterThan(4)({message: "Description should be at least 5 chars."})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired("Date and Time")
})


// component code start here

class EventForm extends Component {

  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  }

// Manage for Google Map
  handleCitySelect = (selectedCity) => {
    
    geocodeByAddress(selectedCity) // return Promise
    .then(results => getLatLng(results[0])) // this also return Promise
    .then(latLng => {
      this.setState({
        cityLatLng: latLng
      })
    })
    .then(() => {
      this.props.change('city', selectedCity)
    })
  }

  handleVenueSelect = (selectedVenue) => {

    geocodeByAddress(selectedVenue)
     .then(result => getLatLng(result[0]))
     .then(latLng => {
       this.setState({
         venueLatLng: latLng
       })
     })
     .then(() => {
        this.props.change("venue", selectedVenue)
     })
  }

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true})
  }

  onFormSubmit = (value) => {

    //日付時間を適切な型に変換
    value.date = moment(value.date).format()
    // 位置情報も一緒にstoreに保存
    value.venueLatLng = this.state.venueLatLng

    if(this.props.initialValues.id){
      // Update existing event
      this.props.updateEvent(value)
      this.props.history.goBack()
    }else{
      // Create new Event
      const newEvent = {
        ...value,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Yasu"
      }
      this.props.createEvent(newEvent)
      this.props.history.push('/events')
    }
  }
  

  render() {
    const { invalid, submitting, pristine } = this.props
    const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-OcIwRFz4Ku4EHYSxQZ-owWDi6iIUo6c&libraries=places"
    return (
            <Grid>
              <Script 
                url={url}
                onLoad = {this.handleScriptLoad}
              />

              <Grid.Column width={10}>
                <Segment>
                    <Header sub color="teal" content="Event Detail" />
                    <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} >
                      <Field name="title" type="text"
                             component={TextInput}
                             placeholder="Give Your Event Name"
                             />
                      <Field name="category" type="text"
                             component={SelectInput}
                             options={category}
                             placeholder="What's Category"
                             />
                      <Field name="description" type="text"
                             component={TextArea}
                             rows="3"
                             placeholder="Tell us about your event"
                             />
                      
                      <Header sub color="teal" content="Event Locations and Date" />

                      <Field name="city" type="text"
                             component={PlaceTextInput}
                             options={{types: ['(cities)']}}
                             placeholder="Event city" 
                             onSelect={this.handleCitySelect}
                             />
                      { this.state.scriptLoaded &&
                      <Field name="venue" type="text"
                             component={PlaceTextInput}
                             options={{
                               location: new google.maps.LatLng(this.state.cityLatLng),
                               radius: 1000,
                               types: ['establishment']
                              }}
                             placeholder="Event venue"
                             onSelect={this.handleVenueSelect}
                             />
                      }
                      <Field name="date" type="text" component={DateInput}
                             dateFormat="YYYY-MM-DD HH:mm" timeFormat="HH:mm"
                             showTimeSelect
                             placeholder="Date and Time Event" />
                      
                      <Button positive type="submit"
                              disabled={invalid || submitting || pristine}>
                        Submit
                      </Button>
                      <Button type="button" onClick={this.props.history.goBack}>
                        Cancel
                      </Button>
                    </Form>
              </Segment>
              </Grid.Column>
            </Grid>

            
    )
  }
}

export default  connect(mapState, actions)(reduxForm({form:'eventForm', enableReinitialize: true, validate})(EventForm))