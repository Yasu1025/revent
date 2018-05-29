import React, { Component } from 'react'
import { connect } from 'react-redux'
// To achive Autocomplete with API
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import GoogleMapReact from 'google-map-react';

import { incrementNum, decrementNum } from './testAction'
import {Icon} from 'semantic-ui-react'

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementNum,
    decrementNum
}

// for Icon
const Marker = () =>(
  <Icon name="marker" size="large" color="red" />
)


class TestComponent extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  const 

  state = {
    address: "",
    scriptLoaded: false
  }

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  onChange = (address) => this.setState({address}) 



  render() {
      const { data, incrementNum, decrementNum } = this.props
      const inputProps = {
        value: this.state.address,
        onChange: this.onChange,
      }
      const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-OcIwRFz4Ku4EHYSxQZ-owWDi6iIUo6c&libraries=places"
    return (
      <div>
        {/* <Script 
          url={url}
          onLoad = {this.handleScriptLoad}
           /> */}
        <h1>{data}</h1>
        <button onClick={incrementNum}>INC</button>
        <button onClick={decrementNum}>DEC</button>
        <br/><br/>

      <form onSubmit={this.handleFormSubmit}>
        {(this.state.scriptLoaded) && <PlacesAutocomplete inputProps={inputProps} />}
        <button type="submit">Submit</button>
      </form>


       {/* Important! Always set the container height explicitly */}
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-OcIwRFz4Ku4EHYSxQZ-owWDi6iIUo6c" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>

      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
