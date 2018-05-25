import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementNum, decrementNum } from './testAction'

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementNum,
    decrementNum
}

class TestComponent extends Component {
  render() {
      const { data, incrementNum, decrementNum } = this.props
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={incrementNum}>INC</button>
        <button onClick={decrementNum}>DEC</button>
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
