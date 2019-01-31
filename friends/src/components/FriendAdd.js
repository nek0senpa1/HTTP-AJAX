import React from "react";


function FriendAdd(props) {
  return (
    <div>
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
          Add Friend{" "}
        </button>
      </form>
    </div>
  );
}

export default FriendAdd;