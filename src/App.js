import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component() {
  constructor(){
    super()
    this.state={
      color:[]
    }
  }
  componentDidMount(){
    let url = "https://coloranddesignflask.dcartist.vercel.app/colors/full/0"
    axios.get(url).then(
        results=> {
            this.setState({color:results.data})
            console.log(this.state.color)
        }
    )
}
render(){
  return (
    <div>
      this is test
    </div>
  );
}
 
}

export default App;
