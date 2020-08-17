import React, {useReducer} from 'react'
import FeedContext from '../contexts/FeedContext'
import feedReducer from '../reducers/feedReducer'
function FeedProvider(props) {
    const [feedState, feedDispatch] = useReducer(feedReducer, {
        posts: [],
        followers: [],
        following: [],
        feed: [],
        users: [],
        initialStateFetched: false,
        isLoggedIn: false,
        initialFeedFetched: false
    });
    
    return (
        <FeedContext.Provider value={{feedState, feedDispatch}}>
            {props.children}
        </FeedContext.Provider>
    )
}

export default FeedProvider
