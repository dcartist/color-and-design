import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
// import { PhotoshopPicker } from 'react-color';

export default class Picker extends Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color, event) => {
    this.setState({ background: color.hex });
  };

  render() {
    // return <PhotoshopPicker onChangeComplete={ this.handleChangeComplete } />;
    return (<div style={{background: this.state.background}}>
      <ChromePicker
      disableAlpha= {true}
    color={ this.state.background }
    onChangeComplete={ this.handleChangeComplete }
  />
      </div>)

  }
}
