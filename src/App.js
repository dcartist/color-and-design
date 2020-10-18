import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Colors from './Colors/Colors';
import ColorsPage from './Colors/ColorPage';
import ColorsAlphabet from './Colors/ColorPageAlphabet';
import ColorsSnippet from './Colors/ColorPageSnippet';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import ColorMain from './Colors/ColorMainPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigationBool: false,
    };
  }

  render() {
    return (
      <div className="colorbody">
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/colors">
          <Colors />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/main">
          <ColorMain />
        </Route>
        <Route exact path="/colors/:pageNumber" component={ColorsPage} />
        <Route exact path="/search/digit/:digit" component={ColorsAlphabet} />
        <Route exact path="/search/snippet/:snippet" component={ColorsSnippet} />
      </div>
    );
  }
}

export default App;
