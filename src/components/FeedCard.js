import React from 'react'
import "../styles/FeedCard.css"
import moment from 'moment'
function FeedCard(props) {
    return (
        <div className="FeedCard__container">
            <div className="FeedCard__avatar"></div>
            <div className="FeedCard__name">{props.name}</div>
            <div className="FeedCard__tweet">{props.tweet}</div>
            <div className="FeedCard__time">{moment.unix(props.postedAt.seconds).fromNow()}</div>
        </div>
    )
}

export default FeedCard
