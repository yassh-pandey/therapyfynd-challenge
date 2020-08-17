import React from 'react'
import '../styles/Nav.css'
import {NavLink, useHistory} from 'react-router-dom'
import firebase from '../firebaseConfig'
function Nav() {
    const history = useHistory();
    const handleSignOutClick = (e)=>{
        return firebase.auth().signOut()
        .then(()=>{
            history.push("/login");
        })
    }
    return (
        <div className="Nav__Container">
            <div className="Nav__logo Nav__item">
                    TweetX
            </div>
            <div className="Nav__item">
                <NavLink to="/feed" activeClassName="Nav__itemSelected">
                    Feed
                </NavLink>
            </div>
            <div className="Nav__item">
                <NavLink to="/users" activeClassName="Nav__itemSelected">
                    Users
                </NavLink>
            </div>
            <div className="Nav__item">
                <NavLink to="/profile/" activeClassName="Nav__itemSelected">
                    Profile
                </NavLink>
            </div>
            <div className="Nav__item Nav__signOutButton" onClick={handleSignOutClick}>
                    Sign Out
            </div>
        </div>
    )
}

export default Nav
