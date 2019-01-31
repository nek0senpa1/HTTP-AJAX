import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './App.css';
import FriendsList from './FrindsList';
import FriendAdd from './components/FriendAdd';

class App extends Component {
  constructor(){
    super()

    this.state = {
      friends: []
    }

  }

  componentDidMount() {
    axios
    .get ("http://localhost:5000/friends")
    .then ( rezultz => {
      console.log(rezultz)
      this.setState (
        { friends: rezultz.data }
      )
    })
    .catch (errerz => {
      console.log(errerz)
    })
  }

  addFriend = event => {
    console.log('adding friendo here')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ALL THE FRIENDS!</h1>
          <NavLink to="/add-form" className="nav-links">Add Friendo!</NavLink>

          

          <Route
            exact path="/"
            render ={props => <FriendsList friends={this.state.friends} />}
          />

          <Route
            exact path="/add-form"
            render={props => <FriendAdd {...props} addFriend={this.addFriend} />}
          />

        </header>

        

      </div>
    );
  }
}

export default App;
