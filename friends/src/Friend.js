import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import FriendUpdate from './components/FriendUpdate';

function Friend (props) {
    
    
        return (
            <div>
                <h1>{props.stuff.name}</h1>
                <p>{props.stuff.age}</p>
                <p>{props.stuff.email}</p>
                <button onClick={ event => props.deleteFriend(event,props.stuff)}>Delete Friend</button>
                <button onClick={ event => props.firstUpdate(event,props.stuff)}>Update Friend</button>
                <br />
                <br />
                
                <NavLink to="/update" className="nav-links">Update Friend</NavLink>     
                
                
                             
                <hr></hr>
                
            </div>
        )               
    }

export default Friend;