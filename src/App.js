import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

class App extends Component {
    constructor(){
    super()
    this.state={
      color:[]
    }
  }
componentDidMount(){
console.log("testing")
let url = "https://flask.colorand.design/colors/full/0"
    axios.get(url).then(
        results=> {
            this.setState({color:results.data})
            console.log(this.state.color)
            console.log(results.data)
            console.log("test")
        }
    )
}


  render() {
    return (
      <div>
        Color and Design
        
      </div>
    );
  }
}


export default App;