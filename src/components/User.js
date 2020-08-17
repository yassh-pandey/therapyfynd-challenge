import React, {useContext, useRef} from 'react'
import "../styles/User.css"
import firebase from "../firebaseConfig"
import FeedContext from "../contexts/FeedContext"
import fetchInitialState from '../fetchInitialState'

function User({userName, followers, following, userEmail}) {
    const feedContext = useContext(FeedContext);
    const actionButton = useRef();
    const handleFollow = async ()=>{
        feedContext.feedDispatch({type: "SET_INITIAL_FEED_FETCHED", payload: {initialFeedFetched: false}});
        actionButton.current.style.pointerEvents = "none";
        feedContext.feedDispatch({type: "ADD_FOLLOWING", payload: {userEmail}});
        await firebase.firestore().collection("users").doc(`${firebase.auth().currentUser?.email}`)
        .update({
            following: firebase.firestore.FieldValue.arrayUnion(userEmail)
        });
        await firebase.firestore().collection("users").doc(`${userEmail}`)
        .update({
            followers: firebase.firestore.FieldValue.arrayUnion(`${firebase.auth().currentUser?.email}`)
        });
        const {feed} = await fetchInitialState();
        feedContext.feedDispatch({type: "SET_FEED", payload: {feed}});
        feedContext.feedDispatch({type: "SET_INITIAL_FEED_FETCHED", payload: {initialFeedFetched: true}});
        if(actionButton.current !== null){
            actionButton.current.style.pointerEvents = "auto";
        }
    }
    const handleUnfollow = async ()=>{
        feedContext.feedDispatch({type: "SET_INITIAL_FEED_FETCHED", payload: {initialFeedFetched: false}});
        actionButton.current.style.pointerEvents = "none";
        feedContext.feedDispatch({type: "REMOVE_FOLLOWING", payload: {userEmail}});
        await firebase.firestore().collection("users").doc(`${firebase.auth().currentUser?.email}`)
        .update({
            following: firebase.firestore.FieldValue.arrayRemove(userEmail)
        });
        await firebase.firestore().collection("users").doc(`${userEmail}`)
        .update({
            followers: firebase.firestore.FieldValue.arrayRemove(`${firebase.auth().currentUser?.email}`)
        });
        const {feed} = await fetchInitialState();
        feedContext.feedDispatch({type: "SET_FEED", payload: {feed}});
        feedContext.feedDispatch({type: "SET_INITIAL_FEED_FETCHED", payload: {initialFeedFetched: true}});
        if(actionButton.current !== null){
            actionButton.current.style.pointerEvents = "auto";
        }
    }
    return (
        <div className="User__container">
            <div className="User__avatar"></div>
            <div className="User__nameFollowingWrapper">
                <div className="User__name">{userName}</div>
                <div className="User__following">Following: {following.length}</div>
            </div>  
            <div className="User_followActionButtonWrapper" ref={actionButton}>
                {
                    feedContext.feedState.following.includes(userEmail)
                    ?
                    <div className="User_loggedInUserAlreadyFollowing" onClick={handleUnfollow}>Following</div>
                    :
                    <div className="User_loggedInUserNotFollowing" onClick={handleFollow}>Follow</div>
                }   
            </div>
        </div>
    )
}

export default User
