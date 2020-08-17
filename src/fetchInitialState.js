import firebase from './firebaseConfig'
const getNameFromEmail = (email, usersList) =>{
    for(let index = 0; index < usersList.length; index = index + 1){
        let user = usersList[index];
        if(user.email===email){
            return user.name;
        }
    }
};
const fetchInitialState = async ()=>{
    if(firebase.auth().currentUser!==null){
        const currentEmail = firebase.auth().currentUser.email;
        const currentDisplayName = firebase.auth().currentUser.displayName;
        const users = [];
        const posts = [];
        let feed = [];
        const allPosts = [];
        await firebase.firestore().collection("users").get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                users.push({
                    email: doc.id,
                    name: doc.data().userName,
                    followers: doc.data().followers,
                    following: doc.data().following
                });
            });
        });
        await firebase.firestore().collection("posts").where(`tweetedBy`,"==", `${firebase.auth().currentUser?.email}`)
        .orderBy("postedAt", "desc")
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                posts.push({...doc.data(), id: doc.id});
            })
        });

        await firebase.firestore().collection("posts")
        .orderBy("postedAt", "desc")
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                allPosts.push({...doc.data(), id: doc.id});
            })
        });
        
        let currentUser = users.filter((user)=>user.email===firebase.auth().currentUser?.email)[0];
        if (currentUser === undefined){
            currentUser = {
                email: currentEmail,
                name: currentDisplayName,
                followers: [],
                following: [],
            };
            users.push(currentUser);
            feed = [];
        }
        else{
            allPosts.forEach(post=>{
               if(currentUser.following.includes(post.tweetedBy) || post.tweetedBy===currentUser.email){
                   feed.push(post);
               }
            });
            feed.forEach(item=>{
                item.name = getNameFromEmail(item.tweetedBy, users);
            })
        }
        return {
            posts,
            users,
            currentUser,
            feed
        };
    }
    else{
        return null;
    }
}
export default fetchInitialState;