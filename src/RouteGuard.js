import React, {useContext} from 'react'
import FeedContext from './contexts/FeedContext'
import {Redirect} from "react-router-dom"
import Loader from './components/Loader'
function RouteGuard(props) {
    const feedContext = useContext(FeedContext);
    return (
        feedContext.feedState.initialStateFetched
        ?
            feedContext.feedState.isLoggedIn
            ?
                props.children
            :
                <Redirect to={props.redirectRoute}/>
        :
        <Loader />
    )
}

export default RouteGuard
