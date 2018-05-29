import React, { Component } from 'react'
import { Form, Label } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete from 'react-places-autocomplete'

const styles = {
  autocompleteContainer: {
    zIndex: 1000
  }
}

class PlaceTextInput extends Component {

  state = {
    scriptLoaded: false
  }

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true})
  }

  render() {

    const {input, width, placeholder, onSelect, options, meta: {touched, error}} = this.props
    const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-OcIwRFz4Ku4EHYSxQZ-owWDi6iIUo6c&libraries=places"
    return (
      <Form.Field error={touched && !!error} width={width}> 
        <Script 
          url={url}
          onLoad = {this.handleScriptLoad}
        />
        { this.state.scriptLoaded &&
          <PlacesAutocomplete inputProps={{...input, placeholder}}
                              options={options}
                              styles={styles}
                              onSelect={onSelect}
                              />
        }
        {touched && error && <Label basic color="red">{error}</Label>}
      </Form.Field>
    )
  }
}

export default PlaceTextInput
