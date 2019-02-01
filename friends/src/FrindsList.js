import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import FriendUpdate from './components/FriendUpdate';

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
                        <br />
                        <br />
                        
                        <NavLink to="/update-form" className="nav-links">Update Friend</NavLink>     
                        
                        <Route
                            exact path="/update-form"
                            render={props => 
                            <FriendUpdate {...props} 
                            friend = {stuff}
                            updateFriend={this.props.updateFriend}
                            handleChanges={this.props.handleChanges}
                            />}
                        />                
            <hr></hr>
                        
                    </div>
                )               
            })}
        </div>
    )

}

export default FriendsList;