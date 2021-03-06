import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  apiKey = process.env.REACT_APP_API_KEY
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"> <News key="general" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="general"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/sports"> <News key="sports" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="sports"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/entertainment"> <News key="entertainment" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="entertainment"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/health"> <News key="generalhealth" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="health"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/science"> <News key="science" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="science"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/technology"> <News key="technology" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="technology"/> </Route>
        </Switch>
        <Switch>
          <Route exact path="/business"> <News key="business" pageSize={this.pageSize} apiKey = {this.apiKey} country = "in" category ="business"/> </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}



