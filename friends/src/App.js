import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter } from "react-router-dom";

import './App.css';
import FriendsList from './FrindsList';
import FriendAdd from './components/FriendAdd';
import FriendUpdate from './components/FriendUpdate';


const newfrand = {
  name: '',
  age:'',
  email:''
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      friends: [],
      newFriend: newfrand
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

  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = event => {
    event.preventDefault();
    console.log('adding friendo here')
    
    axios
    .post('http://localhost:5000/friends', this.state.newFriend)
    .then( res => {
      console.log(res)
      
    })
    .catch( err => {
      console.log(err)
    })

  }

  deleteFriend = (event, deadFriend) => {
    event.preventDefault();
    console.log(`Deleting ${deadFriend.name} here`)

    axios
    .delete(`http://localhost:5000/friends/${deadFriend.id}`)
    .then (res => {
      console.log(res)
      
    })
    .catch (err => {
      console.log(err)
    })
  }

  updateFriend = (event, upFriend) => {
    event.preventDefault();
    console.log(`Updating ${upFriend.name}`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ALL THE FRIENDS!</h1>
          
          <Route
            exact path="/"
            render ={props => 
              <FriendsList 
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends} 
              updateFriend={this.updateFriend}
              />}
          />

          <Route
            exact path="/add-form"
            render={props => 
              <FriendAdd {...props} 
              addFriend={this.addFriend} 
              newFriend={this.state.newFriend} 
              handleChanges={this.handleChanges}
              />}
          />

               

        </header>

      </div>
    );
  }
}


export default App;
