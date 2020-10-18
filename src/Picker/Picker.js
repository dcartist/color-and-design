import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import "./Picker.css"
import axios from "axios"
// import { PhotoshopPicker } from 'react-color';

export default class Picker extends Component {
  state = {
    background: '#fff',
    results:[],
  };

  handleChangeComplete = (color, event) => {
    this.setState({ background: color.hex })
    console.log(`https://flask.colorand.design/colors/hex/snippet/${color.hex.replace("#","")}`)
    // axios.get(`https://flask.colorand.design/colors/hex/code/${color.hex.replace("#","")}`)
    //   .then(res => {
    //     this.setState({ results: res });
    //     console.log(this.state.results)
    //   })
      
    

  };

  render() {
    // return <PhotoshopPicker onChangeComplete={ this.handleChangeComplete } />;
    return (<div classname="picker" style={{background: this.state.background}}>
      <div classname="picker" style={{background: this.state.background}}>
    <p>{this.state.background.replace("#","")}</p>
      <ChromePicker 
      disableAlpha= {true}
    color={ this.state.background }
    onChangeComplete={ this.handleChangeComplete }
  />
      </div>

      </div>)

  }
}
