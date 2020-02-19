// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {


    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  
  render() {
    console.log(this.state.timesClicked)
    return (
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}