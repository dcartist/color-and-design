import React, { Component } from 'react';
import "./App.css"
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from './Home/Home'
import Colors from './Colors/Colors'
import ColorsPage from './Colors/ColorPage'
import ColorsAlphabet from './Colors/ColorPageAlphabet'
// import PropTypes from 'prop-types';

class App extends Component {
 


  render() {
    return (
      <div>
  
        <Route exact path="/">
        <Home />
      </Route>
        <Route exact path="/colors">
        <Colors />
      </Route>
        <Route exact path="/colors/:pageNumber" component={ColorsPage}>
      </Route>
        <Route exact path="/search/digit/:digit" component={ColorsAlphabet}>
      </Route>
      </div>
    );
  }
}


export default App;