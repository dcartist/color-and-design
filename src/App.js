import React, { Component } from 'react';
import axios from 'axios';
import "./App.css"
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from './Home/Home'
import Colors from './Colors/Colors'
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
  
        <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/colors">
        <Colors />
      </Route>
      </div>
    );
  }
}


export default App;