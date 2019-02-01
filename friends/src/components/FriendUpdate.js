import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";




class FriendUpdate extends React.Component {
  constructor(props) {
      super(props)

      console.log(props)

      

      this.state = {
          person: {
          id: this.props.friend.id,
          name: this.props.name,
          age: this.props.age,
          email: this.props.email
          }
      };
  }

  

  render() {
    return (
      <div>
            <h2>UPDATE FRIEND HERE !</h2>
          <form onSubmit={this.props.updateFriend}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.props.friend.name}
              onChange={this.props.handleChanges}
            />
            <br></br>

            <input
              type="text"
              name="age"
              placeholder="Age"
              value={this.props.friend.age}
              onChange={this.props.handleChanges}
            />
            <br></br>

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.props.friend.email}
              onChange={this.props.handleChanges}
            />
            

            
            <br />
            <button type="submit" className="md-button form-button">
              Update Friend{" "}
            </button>
            <br />
            <br></br>
            <NavLink to="/" className="nav-links">Back Home!</NavLink>
          </form>

        </div>
    )
  }
}


export default FriendUpdate;