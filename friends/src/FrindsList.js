import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import FriendUpdate from './components/FriendUpdate';
import Friend from './Friend';

function FriendsList (props) {
    console.log(props)
    return(
        <div>
            <NavLink to="/add-form" className="nav-links">Add Friendo!</NavLink>
            <h1>Friends of the Friends</h1>
            <hr></hr>
            {props.friends.map( stuff => {
                return <Friend 
                stuff={stuff} 
                deleteFriend={props.deleteFriend} 
                updateFriend={props.updateFriend}
                firstUpdate={props.firstUpdate}
                />               
            })}
        </div>
    )

}

export default FriendsList;