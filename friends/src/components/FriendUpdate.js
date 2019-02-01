import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function FriendUpdate(props) {
    console.log(props)
  return (
    <div>
        <h2>UPDATE FRIEND HERE !</h2>
      <form onSubmit={props.addFriend}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.newFriend.name}
          onChange={props.handleChanges}
        />
        <br></br>

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.newFriend.age}
          onChange={props.handleChanges}
        />
        <br></br>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.newFriend.email}
          onChange={props.handleChanges}
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
  );
}

export default FriendUpdate;