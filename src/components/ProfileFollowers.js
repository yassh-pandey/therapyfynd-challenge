import React, {useContext} from 'react'
import FeedContext from '../contexts/FeedContext'
import User from './User'
function ProfileFollowers() {
    const feedContext = useContext(FeedContext);
    return (
        <div className="Profile__mountedComponentContainer">
            {
                feedContext.feedState.users.map(
                    user=>(
                            feedContext.feedState.followers.includes(user.email)
                            ?
                            <User key={user.email} id={user.email} userName={user.name} followers={user.followers} following={user.following} userEmail={user.email}/>
                            :
                            null
                    )
                )
        }
        </div>
    )
}

export default ProfileFollowers
