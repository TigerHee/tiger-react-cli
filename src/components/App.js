import React, { Component } from 'react';
import {
  NavLink,
  BrowserRouter
} from "react-router-dom";
import logo from '../assets/img/logo.svg';
import './App.less';
import { Button } from 'antd'
import RouterInit from './router'

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
            <RouterInit></RouterInit>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
