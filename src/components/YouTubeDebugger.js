// Code YouTubeDebugger Component Here
import React, {Component} from 'react'


export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user:null,
    settings:{
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }


  handleBitrateClick = () => {
    this.setState(previousState => {
      return {
        errors: [],
        user:null,
        settings:{
          bitrate: previousState.settings.bitrate + 4,
          video: {
            resolution: '1080p'
          }
        }
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        video:{
          ...this.state.video,
          resolution: "720p"
        }
      }
    })
  }


  render(){
    return(
      <div>
      <button className="bitrate" onClick={this.handleBitrateClick}></button>
      <button className="resolution" onClick={this.handleResClick}></button>
      </div>
    )
  }
}