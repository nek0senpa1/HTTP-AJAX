import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function FriendsList (props) {
    console.log(props)
    return(
        <div>
            <NavLink to="/add-form" className="nav-links">Add Friendo!</NavLink>
            <h1>Friends of the Friends</h1>
            <hr></hr>
            {props.friends.map( stuff => {
                return (
                    <div>
                        <h1>{stuff.name}</h1>
                        <p>{stuff.age}</p>
                        <p>{stuff.email}</p>
                        <button onClick={ event => props.deleteFriend(event,stuff)}>Delete Friend</button>
                        <hr></hr>
                        
                    </div>
                )               
            })}
        </div>
    )

}

export default FriendsList;