import React, {useEffect, useContext} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login'
import Users from './components/Users'
import Profile from './components/Profile'
import Feed from './components/Feed'
import Write from './components/Write'
import firebase from './firebaseConfig'
import FeedContext from './contexts/FeedContext'
import fetchInitialState from './fetchInitialState'
import Loader from './components/Loader';
function App() {
  const feedContext = useContext(FeedContext);
  const feedDispatch = feedContext.feedDispatch;
  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        fetchInitialState()
        .then(result=>{
          feedDispatch({type: "SET_INIT_STATE_LOGIN", payload: {isLoggedIn: true, initialStateFetched: true,
                                    users: result.users, currentUser: result.currentUser, posts: result.posts, feed: result.feed, initialFeedFetched: true}});
        })
      } else {
        fetchInitialState()
        .then(result=>{
          feedDispatch({type: "SET_INIT_STATE_LOGOUT", payload: {isLoggedIn: false, initialStateFetched: true, initialFeedFetched: false}});
        })
      }
    });
    return unsubscribe;
  }, []);
  return (
    feedContext.feedState.initialStateFetched
    ?
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </div>
    :
    <Loader />
  );
}

export default App;
