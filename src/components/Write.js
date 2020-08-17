import React, {useState, useRef, useContext} from 'react'
import '../styles/Write.css'
import Nav from './Nav'
import FeedContext from '../contexts/FeedContext'
import {useHistory} from 'react-router-dom'
import CircularProgress  from '@material-ui/core/CircularProgress';
import firebase from '../firebaseConfig'
function Write() {
    const feedContext = useContext(FeedContext);
    const history = useHistory();
    const textAreaRef = useRef();
    const twitterBlue = "#1da1f2";
    const twitterDisableBlue = "#8dcff8";
    const maxTweetLength = 280;
    const [tweet, setTweet] = useState("");
    const handleTweetOnChange = (e)=>{
        e.currentTarget.addEventListener("keyup", ()=>{
            setTweet(textAreaRef.current.textContent);
        })
    }
    const handleTweetButtonClick = (e)=>{
        if(tweet.length===0 || tweet.length>maxTweetLength){
            return;
        }
        if(firebase.auth().currentUser !== null){
            const currentTime = firebase.firestore.FieldValue.serverTimestamp();
            const timeObject = {seconds: Math.floor(Date.now()/1000)};
            return firebase.firestore().collection("posts").add({
                tweetedBy: firebase.auth().currentUser.email,
                tweet,
                postedAt: currentTime
            })
            .then((doc)=>{
                feedContext.feedDispatch({type: "ADD_TWEET", payload: {tweet}});
                feedContext.feedDispatch({type: "ADD_TO_FEED", payload: {
                    tweet: {
                        name: `${firebase.auth().currentUser.displayName}`,
                        id: `${doc.id}`,
                        postedAt: timeObject,
                        tweetedBy: `${firebase.auth().currentUser.email}`,
                        tweet
                    }
                }});
                history.push("/feed")

            })
        }
    }
    return (
        <div className="Write__container">
            <Nav />
            <div className="Write__contentArea">
                <div className="Write__boxProgressWrapper">
                    <div ref={textAreaRef}
                    contentEditable className="Write__box" placeholder="What's happening?" value={tweet} onFocus={handleTweetOnChange}>
                    </div>
                        {
                                tweet.length>maxTweetLength
                                ?
                                <span className="Write__tweetLimitExceed">
                                    -{tweet.length - maxTweetLength}
                                </span>
                                :
                                <CircularProgress className="Write__circularProgress" variant="static" color="primary" value={tweet.length/2.8}/>
                        }
                </div>
                <div className="Write__tweetButton" onClick={handleTweetButtonClick}
                style={ 
                        (tweet.length===0 || tweet.length>maxTweetLength)
                        ? 
                        {
                            backgroundColor: twitterDisableBlue,
                            pointerEvents: "none"
                        }
                        :
                        {
                            backgroundColor: twitterBlue,
                            pointerEvents: "initial"
                        }
                    }>
                    Tweet
                </div>
            </div>
        </div>
    )
}

export default Write
