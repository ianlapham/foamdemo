import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../App.scss'
import Nav from './Nav'
import Home from './Home';
import Web3Container from '../components/Web3Container'
import { withWeb3Ctx } from "../contexts/Web3Context";
import { Grommet } from 'grommet';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Grommet>
          <Nav />
          <Web3Container>
            <Route path="/" component={withWeb3Ctx(Home)} />
          </Web3Container>
        </Grommet>
       </Router>
    );
  }
}

