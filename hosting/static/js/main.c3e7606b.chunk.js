(this["webpackJsonptherapyfynd-challenge"]=this["webpackJsonptherapyfynd-challenge"]||[]).push([[0],{33:function(e,t,a){},38:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),o=(a(43),a(44),a(3)),i=a(13),s=a.n(i),u=a(17),d=a(11),m=a(2),f=a(7),p=a(6),_=a(27);a(48),a(49);_.initializeApp({apiKey:"AIzaSyAJhV28Z2cOGBKHocI0dEAhUdI0t_1khXI",authDomain:"therapyfynd-challenge.firebaseapp.com",databaseURL:"https://therapyfynd-challenge.firebaseio.com",projectId:"therapyfynd-challenge",storageBucket:"therapyfynd-challenge.appspot.com",messagingSenderId:"417953929237",appId:"1:417953929237:web:6996e2ffb5243e0d85d61c",measurementId:"G-QX4GXFYC64"});var E=_,v=(a(51),Object(n.createContext)(null));var h=function(){var e=Object(o.g)(),t=Object(n.useContext)(v),a=Object(n.useState)({name:"",email:"",password:"",confirmPassword:""}),l=Object(f.a)(a,2),c=l[0],i=l[1],_=Object(n.useState)(""),h=Object(f.a)(_,2),g=h[0],b=h[1],w=function(e){var t=e.target,a=t.value,n=t.name;i((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},n,a))}))};return r.a.createElement("div",{className:"SignUp__container"},r.a.createElement("div",{className:"SignUp__navContainer"},r.a.createElement("div",{className:"SignUp__websiteLogo"},"TweetX"),r.a.createElement("div",{className:"SignUp__logInButton"},r.a.createElement(p.b,{to:"/login"},"Login"))),r.a.createElement("div",{className:"SignUp__formTitleWrapper"},r.a.createElement("div",{className:"SignUp__title"},"Create Account"),r.a.createElement("div",{className:"SignUp__formContainer"},r.a.createElement("input",{name:"name",placeholder:"Name",value:c.name,onChange:w}),r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:c.email,onChange:w}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:c.password,onChange:w}),r.a.createElement("input",{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:c.confirmPassword,onChange:w})),r.a.createElement("div",{className:"SignUp__error"},g),r.a.createElement("div",{className:"SignUp__signUpButton",onClick:function(){""!==c.name?c.password===c.confirmPassword?E.auth().createUserWithEmailAndPassword(c.email,c.password).then((function(e){return t.feedDispatch({type:"LOGIN_BYPASS_ROUTE_GUARD"}),e.user.updateProfile({displayName:c.name})})).then(Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=E.auth().currentUser,t.next=3,E.firestore().collection("users").doc("".concat(a.email)).set({followers:[],following:[],userName:c.name});case 3:i({name:"",email:"",password:"",confirmPassword:""}),e.push("/feed");case 5:case"end":return t.stop()}}),t)})))).catch((function(e){b(e.message)})):b("Password and confirm password do not match."):b("Name can't be empty")}},"Sign up")))},g=a(78);a(56);var b=function(){var e=Object(o.g)(),t=Object(n.useRef)(),a=Object(n.useContext)(v),l=Object(n.useState)({email:"",password:""}),c=Object(f.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)(""),_=Object(f.a)(u,2),h=_[0],b=_[1],w=Object(n.useState)(!1),N=Object(f.a)(w,2),y=N[0],O=N[1],F=function(e){var t=e.target,a=t.value,n=t.name;s((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},n,a))}))};return r.a.createElement("div",{className:"LogIn__container"},r.a.createElement("div",{className:"LogIn__navContainer"},r.a.createElement("div",{className:"LogIn__websiteLogo"},"TweetX"),r.a.createElement("div",{className:"LogIn__signUpButton"},r.a.createElement(p.b,{to:"/signup"},"Create Account"))),r.a.createElement("div",{className:"LogIn__formTitleWrapper"},r.a.createElement("div",{className:"LogIn__title"},"Login"),r.a.createElement("div",{className:"LogIn__formContainer"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:i.email,onChange:F}),r.a.createElement("span",{className:"LogIn__passwordIconWrapper"},r.a.createElement("input",{name:"password",type:y?"text":"password",placeholder:"Password",value:i.password,onChange:F}),r.a.createElement(g.a,{style:{fontSize:"1.4rem",cursor:"pointer"},className:"LogIn__visibilityIcon",ref:t,onClick:function(e){t.current.textContent="visibility"===t.current.textContent?"visibility_off":"visibility","visibility_off"===t.current.textContent?O(!0):O(!1)}},"visibility"))),r.a.createElement("div",{className:"LogIn__error"},h),r.a.createElement("div",{className:"LogIn__logInButton",onClick:function(t){""!==i.email?""!==i.password?E.auth().signInWithEmailAndPassword(i.email,i.password).then((function(){s({email:"",password:""}),a.feedDispatch({type:"LOGIN_BYPASS_ROUTE_GUARD"}),e.push("/feed")})).catch((function(e){b(e.message)})):b("Password field can't be empty"):b("Email field can't be empty")}},"Login")))};a(57);var w=function(){var e=Object(o.g)();return r.a.createElement("div",{className:"Nav__Container"},r.a.createElement("div",{className:"Nav__logo Nav__item"},"TweetX"),r.a.createElement("div",{className:"Nav__item"},r.a.createElement(p.c,{to:"/feed",activeClassName:"Nav__itemSelected"},"Feed")),r.a.createElement("div",{className:"Nav__item"},r.a.createElement(p.c,{to:"/users",activeClassName:"Nav__itemSelected"},"Users")),r.a.createElement("div",{className:"Nav__item"},r.a.createElement(p.c,{to:"/profile/",activeClassName:"Nav__itemSelected"},"Profile")),r.a.createElement("div",{className:"Nav__item Nav__signOutButton",onClick:function(t){return E.auth().signOut().then((function(){e.push("/login")}))}},"Sign Out"))};a(58),a(59);var N=function(){var e=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){e.current.style.transform="translate3d(0, calc(50vh - 20px), 0)"})),r.a.createElement("div",{className:"Loader__container",ref:e},r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"rect1"}),r.a.createElement("div",{className:"rect2"}),r.a.createElement("div",{className:"rect3"}),r.a.createElement("div",{className:"rect4"}),r.a.createElement("div",{className:"rect5"})))};var y=function(e){var t=Object(n.useContext)(v);return t.feedState.initialStateFetched?t.feedState.isLoggedIn?e.children:r.a.createElement(o.a,{to:e.redirectRoute}):r.a.createElement(N,null)},O=(a(60),function(e,t){for(var a=0;a<t.length;a+=1){var n=t[a];if(n.email===e)return n.name}}),F=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,l,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===E.auth().currentUser){e.next=18;break}return a=E.auth().currentUser.email,n=E.auth().currentUser.displayName,r=[],l=[],c=[],o=[],e.next=9,E.firestore().collection("users").get().then((function(e){e.forEach((function(e){r.push({email:e.id,name:e.data().userName,followers:e.data().followers,following:e.data().following})}))}));case 9:return e.next=11,E.firestore().collection("posts").where("tweetedBy","==","".concat(null===(t=E.auth().currentUser)||void 0===t?void 0:t.email)).orderBy("postedAt","desc").get().then((function(e){e.forEach((function(e){l.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))}))}));case 11:return e.next=13,E.firestore().collection("posts").orderBy("postedAt","desc").get().then((function(e){e.forEach((function(e){o.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))}))}));case 13:return void 0===(i=r.filter((function(e){var t;return e.email===(null===(t=E.auth().currentUser)||void 0===t?void 0:t.email)}))[0])?(i={email:a,name:n,followers:[],following:[]},r.push(i),c=[]):(o.forEach((function(e){(i.following.includes(e.tweetedBy)||e.tweetedBy===i.email)&&c.push(e)})),c.forEach((function(e){e.name=O(e.tweetedBy,r)}))),e.abrupt("return",{posts:l,users:r,currentUser:i,feed:c});case 18:return e.abrupt("return",null);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var j=function(e){var t=e.userName,a=(e.followers,e.following),l=e.userEmail,c=Object(n.useContext)(v),o=Object(n.useRef)(),i=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.feedDispatch({type:"SET_INITIAL_FEED_FETCHED",payload:{initialFeedFetched:!1}}),o.current.style.pointerEvents="none",c.feedDispatch({type:"ADD_FOLLOWING",payload:{userEmail:l}}),e.next=5,E.firestore().collection("users").doc("".concat(null===(t=E.auth().currentUser)||void 0===t?void 0:t.email)).update({following:E.firestore.FieldValue.arrayUnion(l)});case 5:return e.next=7,E.firestore().collection("users").doc("".concat(l)).update({followers:E.firestore.FieldValue.arrayUnion("".concat(null===(a=E.auth().currentUser)||void 0===a?void 0:a.email))});case 7:return e.next=9,F();case 9:n=e.sent,r=n.feed,c.feedDispatch({type:"SET_FEED",payload:{feed:r}}),c.feedDispatch({type:"SET_INITIAL_FEED_FETCHED",payload:{initialFeedFetched:!0}}),null!==o.current&&(o.current.style.pointerEvents="auto");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.feedDispatch({type:"SET_INITIAL_FEED_FETCHED",payload:{initialFeedFetched:!1}}),o.current.style.pointerEvents="none",c.feedDispatch({type:"REMOVE_FOLLOWING",payload:{userEmail:l}}),e.next=5,E.firestore().collection("users").doc("".concat(null===(t=E.auth().currentUser)||void 0===t?void 0:t.email)).update({following:E.firestore.FieldValue.arrayRemove(l)});case 5:return e.next=7,E.firestore().collection("users").doc("".concat(l)).update({followers:E.firestore.FieldValue.arrayRemove("".concat(null===(a=E.auth().currentUser)||void 0===a?void 0:a.email))});case 7:return e.next=9,F();case 9:n=e.sent,r=n.feed,c.feedDispatch({type:"SET_FEED",payload:{feed:r}}),c.feedDispatch({type:"SET_INITIAL_FEED_FETCHED",payload:{initialFeedFetched:!0}}),null!==o.current&&(o.current.style.pointerEvents="auto");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"User__container"},r.a.createElement("div",{className:"User__avatar"}),r.a.createElement("div",{className:"User__nameFollowingWrapper"},r.a.createElement("div",{className:"User__name"},t),r.a.createElement("div",{className:"User__following"},"Following: ",a.length)),r.a.createElement("div",{className:"User_followActionButtonWrapper",ref:o},c.feedState.following.includes(l)?r.a.createElement("div",{className:"User_loggedInUserAlreadyFollowing",onClick:d},"Following"):r.a.createElement("div",{className:"User_loggedInUserNotFollowing",onClick:i},"Follow")))};var S=function(){var e=Object(n.useContext)(v);return r.a.createElement(y,{redirectTo:"/login"},r.a.createElement("div",{className:"Users__container"},r.a.createElement(w,null),r.a.createElement("div",{className:"Users__usersListContainer"},e.feedState.users.map((function(e){var t;return(null===(t=E.auth().currentUser)||void 0===t?void 0:t.email)!==e.email?r.a.createElement(j,{key:e.email,id:e.email,userName:e.name,followers:e.followers,following:e.following,userEmail:e.email}):null})))))},I=(a(33),a(61),a(35)),C=a.n(I);var T=function(e){return r.a.createElement("div",{className:"FeedCard__container"},r.a.createElement("div",{className:"FeedCard__avatar"}),r.a.createElement("div",{className:"FeedCard__name"},e.name),r.a.createElement("div",{className:"FeedCard__tweet"},e.tweet),r.a.createElement("div",{className:"FeedCard__time"},C.a.unix(e.postedAt.seconds).fromNow()))};var U=function(){var e=Object(n.useContext)(v);return r.a.createElement("div",{className:"Profile__mountedComponentContainer"},e.feedState.posts.map((function(e){return r.a.createElement(T,{name:"".concat(E.auth().currentUser.displayName),tweet:e.tweet,key:e.id,postedAt:e.postedAt})})))};var L=function(){var e=Object(n.useContext)(v);return r.a.createElement("div",{className:"Profile__mountedComponentContainer"},e.feedState.users.map((function(t){return e.feedState.followers.includes(t.email)?r.a.createElement(j,{key:t.email,id:t.email,userName:t.name,followers:t.followers,following:t.following,userEmail:t.email}):null})))};var D=function(){var e=Object(n.useContext)(v);return r.a.createElement("div",{className:"Profile__mountedComponentContainer"},e.feedState.users.map((function(t){return e.feedState.following.includes(t.email)?r.a.createElement(j,{key:t.email,id:t.email,userName:t.name,followers:t.followers,following:t.following,userEmail:t.email}):null})))};var P=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)([!0,!1,!1]),l=Object(f.a)(a,2),c=l[0],o=l[1];Object(n.useEffect)((function(){if(null!==(null===t||void 0===t?void 0:t.current)&&(t.current.style.color="#b8b8b8",t.current.childNodes.forEach((function(e){e.removeAttribute("style")})),null!==(null===e||void 0===e?void 0:e.current)))if(c[0])t.current.childNodes[0].style.color="black",e.current.style.left="calc(100% / 12)";else if(c[1])t.current.childNodes[1].style.color="black",e.current.style.left="calc(100% / 2 - 17% / 1.7)";else{if(!c[2])return;t.current.childNodes[2].style.color="black",e.current.style.left="calc(100% - 25%)"}}));var i=Object(n.useContext)(v),s=function(e){e.preventDefault();var a=e.currentTarget.id;if(null!==(null===t||void 0===t?void 0:t.current))if("Profile__tabBar__postsTab"===a)o([!0,!1,!1]),t.current.childNodes[0].style.color="black";else if("Profile__tabBar__followersTab"===a)o([!1,!0,!1]),t.current.childNodes[1].style.color="black";else{if("Profile__tabBar__followingTab"!==a)return;o([!1,!1,!0]),t.current.childNodes[2].style.color="black"}};return r.a.createElement(y,null,r.a.createElement("div",{className:"Profile__container"},r.a.createElement(w,null),r.a.createElement("div",{className:"Profile__header"},r.a.createElement("div",{className:"Profile__avatar"}),r.a.createElement("div",{className:"Profile__name"},E.auth().currentUser.displayName),r.a.createElement("div",{className:"Profile__info"},r.a.createElement("div",{className:"postsCount"},"Posts: ",i.feedState.posts.length),r.a.createElement("div",{className:"followersCount"},"Followers: ",i.feedState.followers.length),r.a.createElement("div",{className:"followingCount"},"Following: ",i.feedState.following.length))),r.a.createElement("div",{className:"Profile__tabBarContainer"},r.a.createElement("div",{className:"Profile__tabPositionIndicator"},r.a.createElement("div",{className:"Profile__tabPositionIndicatorActiveTab",ref:e})),r.a.createElement("div",{className:"Profile__tabBar",ref:t},r.a.createElement("div",{className:"Profile__tabBar__tabItem",id:"Profile__tabBar__postsTab",onClick:s}," ",r.a.createElement(g.a,null,"forum")," Post"),r.a.createElement("div",{className:"Profile__tabBar__tabItem",id:"Profile__tabBar__followersTab",onClick:s}," ",r.a.createElement(g.a,null,"people")," Followers"),r.a.createElement("div",{className:"Profile__tabBar__tabItem",id:"Profile__tabBar__followingTab",onClick:s}," ",r.a.createElement(g.a,null,"people")," Following"))),r.a.createElement("div",{className:"Profile__contentContainer"},c[0]?r.a.createElement(U,null):c[1]?r.a.createElement(L,null):r.a.createElement(D,null))))};a(63);var A=function(){var e=Object(n.useContext)(v);return r.a.createElement(y,{redirectRoute:"./login"},r.a.createElement("div",{className:"Feed__container"},r.a.createElement(w,null),r.a.createElement("div",{className:"Feed__contentWrapper"},r.a.createElement(p.b,{to:"/write",className:"Feed__writeTweetButton"},"Write"),e.feedState.initialFeedFetched?0===e.feedState.feed.length?r.a.createElement("div",{className:"Feed__emptyFeedMessage"},"Your feed is empty now, follow others to start seeing something here..."):e.feedState.feed.map((function(e){return r.a.createElement(T,{name:e.name,tweet:e.tweet,key:e.id,postedAt:e.postedAt})})):r.a.createElement(N,null))))},x=(a(64),a(79));var k=function(){var e=Object(n.useContext)(v),t=Object(o.g)(),a=Object(n.useRef)(),l=Object(n.useState)(""),c=Object(f.a)(l,2),i=c[0],s=c[1];return r.a.createElement("div",{className:"Write__container"},r.a.createElement(w,null),r.a.createElement("div",{className:"Write__contentArea"},r.a.createElement("div",{className:"Write__boxProgressWrapper"},r.a.createElement("div",{ref:a,contentEditable:!0,className:"Write__box",placeholder:"What's happening?",value:i,onFocus:function(e){e.currentTarget.addEventListener("keyup",(function(){s(a.current.textContent)}))}}),i.length>280?r.a.createElement("span",{className:"Write__tweetLimitExceed"},"-",i.length-280):r.a.createElement(x.a,{className:"Write__circularProgress",variant:"static",color:"primary",value:i.length/2.8})),r.a.createElement("div",{className:"Write__tweetButton",onClick:function(a){if(!(0===i.length||i.length>280)&&null!==E.auth().currentUser){var n=E.firestore.FieldValue.serverTimestamp(),r={seconds:Math.floor(Date.now()/1e3)};return E.firestore().collection("posts").add({tweetedBy:E.auth().currentUser.email,tweet:i,postedAt:n}).then((function(a){e.feedDispatch({type:"ADD_TO_FEED",payload:{tweet:{name:"".concat(E.auth().currentUser.displayName),id:"".concat(a.id),postedAt:r,tweetedBy:"".concat(E.auth().currentUser.email),tweet:i}}}),e.feedDispatch({type:"ADD_TO_POSTS",payload:{post:{id:"".concat(a.id),postedAt:r,tweetedBy:"".concat(E.auth().currentUser.email),tweet:i}}}),t.push("/feed")}))}},style:0===i.length||i.length>280?{backgroundColor:"#8dcff8",pointerEvents:"none"}:{backgroundColor:"#1da1f2",pointerEvents:"initial"}},"Tweet")))};var B=function(){var e=Object(n.useContext)(v),t=e.feedDispatch;return Object(n.useEffect)((function(){return E.auth().onAuthStateChanged((function(e){e?F().then((function(e){t({type:"SET_INIT_STATE_LOGIN",payload:{isLoggedIn:!0,initialStateFetched:!0,users:e.users,currentUser:e.currentUser,posts:e.posts,feed:e.feed,initialFeedFetched:!0}})})):F().then((function(e){t({type:"SET_INIT_STATE_LOGOUT",payload:{isLoggedIn:!1,initialStateFetched:!0,initialFeedFetched:!1}})}))}))}),[]),e.feedState.initialStateFetched?r.a.createElement("div",{className:"App"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/login"},r.a.createElement(b,null)),r.a.createElement(o.b,{path:"/signup"},r.a.createElement(h,null)),r.a.createElement(o.b,{path:"/profile"},r.a.createElement(P,null)),r.a.createElement(o.b,{path:"/feed"},r.a.createElement(A,null)),r.a.createElement(o.b,{path:"/users"},r.a.createElement(S,null)),r.a.createElement(o.b,{path:"/write"},r.a.createElement(k,null)),r.a.createElement(o.b,{path:"/"},r.a.createElement(h,null)))):r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(16),R=function(e,t){switch(t.type){case"SET_INIT_STATE_LOGIN":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,users:t.payload.users,followers:t.payload.currentUser.followers,following:t.payload.currentUser.following,initialStateFetched:t.payload.initialStateFetched,posts:t.payload.posts,feed:t.payload.feed,initialFeedFetched:t.payload.initialFeedFetched});case"SET_INIT_STATE_LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,users:[],posts:[],feed:[],followers:[],following:[],initialStateFetched:t.payload.initialStateFetched,initialFeedFetched:t.payload.initialFeedFetched});case"ADD_USER":return Object(m.a)(Object(m.a)({},e),{},{users:[t.payload.user].concat(Object(W.a)(e.users))});case"ADD_FOLLOWING":return Object(m.a)(Object(m.a)({},e),{},{following:[t.payload.userEmail].concat(Object(W.a)(e.following))});case"REMOVE_FOLLOWING":var a=e.following.filter((function(e){return e!==t.payload.userEmail}));return Object(m.a)(Object(m.a)({},e),{},{following:a});case"LOGIN_BYPASS_ROUTE_GUARD":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0});case"ADD_TO_FEED":return Object(m.a)(Object(m.a)({},e),{},{feed:[t.payload.tweet].concat(Object(W.a)(e.feed))});case"SET_FEED":return Object(m.a)(Object(m.a)({},e),{},{feed:t.payload.feed});case"ADD_TO_POSTS":return Object(m.a)(Object(m.a)({},e),{},{posts:[t.payload.post].concat(Object(W.a)(e.posts))});case"SET_INITIAL_FEED_FETCHED":return Object(m.a)(Object(m.a)({},e),{},{initialFeedFetched:t.payload.initialFeedFetched});default:return e}};var G=function(e){var t=Object(n.useReducer)(R,{posts:[],followers:[],following:[],feed:[],users:[],initialStateFetched:!1,isLoggedIn:!1,initialFeedFetched:!1}),a=Object(f.a)(t,2),l=a[0],c=a[1];return r.a.createElement(v.Provider,{value:{feedState:l,feedDispatch:c}},e.children)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(G,null,r.a.createElement(B,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c3e7606b.chunk.js.map