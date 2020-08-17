import React, {useContext, useState, useRef, useEffect} from 'react'
import FeedContext from '../contexts/FeedContext'
import RouteGuard from '../RouteGuard'
import firebase from "../firebaseConfig"
import Icon from '@material-ui/core/Icon';
import Nav from './Nav'
import '../styles/Profile.css'
import ProfilePosts from './ProfilePosts';
import ProfileFollowers from './ProfileFollowers';
import ProfileFollowing from './ProfileFollowing';
function Profile() {
    const tabPositionIndicatorActiveTab = useRef(null);
    const profileTabBar = useRef(null);
    const [tabSelected, setTabSelected] = useState([true, false, false]);
    useEffect(()=>{
        if(profileTabBar?.current===null){
            return;
        }
        profileTabBar.current.style.color = "#b8b8b8";
        profileTabBar.current.childNodes.forEach(node=>{
            node.removeAttribute("style");
        })
        if(tabPositionIndicatorActiveTab?.current!==null){
            if(tabSelected[0]){
                profileTabBar.current.childNodes[0].style.color = "black";
                tabPositionIndicatorActiveTab.current.style.left = "calc(100% / 12)";
            }
            else if(tabSelected[1]){
                profileTabBar.current.childNodes[1].style.color = "black";
                tabPositionIndicatorActiveTab.current.style.left = "calc(100% / 2 - 17% / 1.7)";
            }
            else if(tabSelected[2]){
                profileTabBar.current.childNodes[2].style.color = "black";
                tabPositionIndicatorActiveTab.current.style.left = "calc(100% - 25%)";
            }
            else{
                return;
            }
        }
    })
    const feedContext = useContext(FeedContext);
    const handleTabBarItemClick = (e)=>{
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const idOfClickedElement = currentTarget.id;
        if(profileTabBar?.current !==null){
            // profileTabBar.current.removeAttribute("style");
            if(idOfClickedElement==="Profile__tabBar__postsTab"){
                setTabSelected([true, false, false]);
                profileTabBar.current.childNodes[0].style.color = "black";
            }
            else if(idOfClickedElement==="Profile__tabBar__followersTab"){
                setTabSelected([false, true, false]);
                profileTabBar.current.childNodes[1].style.color = "black";
            }
            else if(idOfClickedElement==="Profile__tabBar__followingTab"){
                setTabSelected([false, false, true]);
                profileTabBar.current.childNodes[2].style.color = "black";
            }
            else{
                return;
            }
        }
    }
    return (
        <RouteGuard>
            <div className="Profile__container">
                <Nav />
                <div className="Profile__header">
                    <div className="Profile__avatar"></div>
                    <div className="Profile__name">{firebase.auth().currentUser.displayName}</div>
                    <div className="Profile__info">
                        <div className="postsCount">Posts: {feedContext.feedState.posts.length}</div>
                        <div className="followersCount">Followers: {feedContext.feedState.followers.length}</div>
                        <div className="followingCount">Following: {feedContext.feedState.following.length}</div>
                    </div>
                </div>
                <div className="Profile__tabBarContainer">
                    <div className="Profile__tabPositionIndicator">
                        <div className="Profile__tabPositionIndicatorActiveTab" ref={tabPositionIndicatorActiveTab}></div>
                    </div>
                    <div className="Profile__tabBar" ref={profileTabBar}>
                        <div className="Profile__tabBar__tabItem" id="Profile__tabBar__postsTab" onClick={handleTabBarItemClick}> <Icon>forum</Icon> Post</div>
                        <div className="Profile__tabBar__tabItem" id="Profile__tabBar__followersTab" onClick={handleTabBarItemClick}> <Icon>people</Icon> Followers</div>
                        <div className="Profile__tabBar__tabItem" id="Profile__tabBar__followingTab" onClick={handleTabBarItemClick}> <Icon>people</Icon> Following</div>
                    </div>
                </div>
                <div className="Profile__contentContainer">
                    {
                        tabSelected[0]
                        ?
                        <ProfilePosts />
                        :
                            (
                                tabSelected[1]
                                ?
                                <ProfileFollowers />
                                :
                                <ProfileFollowing />
                            )

                    }
                </div>
            </div>
        </RouteGuard>
    )
}

export default Profile
