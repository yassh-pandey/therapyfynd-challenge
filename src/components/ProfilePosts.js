import React, {useContext} from 'react'
import '../styles/Profile.css'
import FeedContext from '../contexts/FeedContext'
import firebase from '../firebaseConfig'
import FeedCard from './FeedCard';
function ProfilePosts() {
    const feedContext = useContext(FeedContext);
    return (
        <div className="Profile__mountedComponentContainer">
            {
                feedContext.feedState.posts.map(
                post=>(
                     <FeedCard name={`${firebase.auth().currentUser.displayName}`} tweet={post.tweet} key={post.id} postedAt={post.postedAt}/>   
                    )
                )
            }
        </div>
    )
}

export default ProfilePosts
