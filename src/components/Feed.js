import React, {useContext} from 'react'
import FeedContext from '../contexts/FeedContext'
import {Link} from 'react-router-dom'
import '../styles/Feed.css'
import RouteGuard from '../RouteGuard'
import Nav from './Nav'
import FeedCard from './FeedCard'
import Loader from './Loader'
function Feed() {
    const feed = useContext(FeedContext);
    return (
        <RouteGuard redirectRoute={"./login"}>
            <div className="Feed__container">
                <Nav />
                <div className="Feed__contentWrapper">
                    <Link to="/write" className="Feed__writeTweetButton">
                        Write
                    </Link>
                    {
                        feed.feedState.initialFeedFetched
                        ?
                            feed.feedState.feed.length===0
                            ?
                            (
                                <div className="Feed__emptyFeedMessage">
                                    Your feed is empty now, follow others to start seeing something here...
                                </div>
                            )
                            :
                            feed.feedState.feed.map(
                                item=>(
                                    <FeedCard name={item.name} tweet={item.tweet} key={item.id} postedAt={item.postedAt}/>
                                )
                            )
                        :
                        <Loader />

                    }
                </div>
            </div>  
        </RouteGuard>
    )
}

export default Feed
