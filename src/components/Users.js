import React, {useContext} from 'react'
import Nav from './Nav'
import '../styles/Users.css'
import RouteGuard from '../RouteGuard'
import FeedContext from '../contexts/FeedContext'
import User from './User'
import firebase from "../firebaseConfig"
function Users() {
    const feedContext = useContext(FeedContext);
    return (
        <RouteGuard redirectTo={"/login"}>
            <div className="Users__container">
                <Nav />
                <div className="Users__usersListContainer">
                    {
                        feedContext.feedState.users.map(
                            user=>(
                                    firebase.auth().currentUser?.email !== user.email
                                    ?
                                    <User key={user.email} id={user.email} userName={user.name} followers={user.followers} following={user.following} userEmail={user.email}/>
                                    :
                                    null
                            )
                        )
                    }
                </div>
            </div>
        </RouteGuard>
    )
}

export default Users
