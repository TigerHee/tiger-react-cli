import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import './App.less';

import { Button } from 'antd'
import Page1 from './page1/page1'
import Page2 from './page2/page2'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              href="https://github.com/tigerHee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary">tigerHee</Button>
            </a>
            <div className="navigation">
              <Button type="default"><NavLink to="/">Page1</NavLink></Button>
              <Button type="default"><NavLink to="/page2">Page2</NavLink></Button>
            </div>
          </header>
          <div className="content">
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
