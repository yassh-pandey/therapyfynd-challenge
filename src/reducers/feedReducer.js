const feedReducer = (state, action)=>{
    switch(action.type){
        case "SET_INIT_STATE_LOGIN": 
            return {...state, isLoggedIn: action.payload.isLoggedIn, users: action.payload.users,
                    followers: action.payload.currentUser.followers, following: action.payload.currentUser.following,
                    initialStateFetched: action.payload.initialStateFetched,
                    posts: action.payload.posts, feed: action.payload.feed,
                    initialFeedFetched: action.payload.initialFeedFetched};
        case "SET_INIT_STATE_LOGOUT": 
        return {...state, 
                isLoggedIn: action.payload.isLoggedIn, 
                users: [],
                posts: [],
                feed: [],
                followers: [], 
                following: [],
                initialStateFetched: action.payload.initialStateFetched,  initialFeedFetched: action.payload.initialFeedFetched}
        case "ADD_TWEET":
            return {...state, posts: [action.payload.tweet, ...state.posts]};
        case "ADD_USER":
            return {...state, users: [action.payload.user, ...state.users]};
        case "ADD_FOLLOWING": 
            return {...state, following: [action.payload.userEmail, ...state.following]};
        case "REMOVE_FOLLOWING":
            const updatedFollowing = state.following.filter(userEmail=>userEmail!==action.payload.userEmail);
            return {...state, following: updatedFollowing};
        case "LOGIN_BYPASS_ROUTE_GUARD":
            return {...state, isLoggedIn: true};
        case "ADD_TO_FEED":
            return  {...state, feed: [action.payload.tweet, ...state.feed]};
        case "SET_FEED":
            return {...state, feed: action.payload.feed};
        case "SET_INITIAL_FEED_FETCHED":
            return {...state, initialFeedFetched: action.payload.initialFeedFetched};
        default: 
            return state;
    }
}
export default feedReducer;