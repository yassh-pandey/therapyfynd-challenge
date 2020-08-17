import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import firebase from '../firebaseConfig'
import '../styles/SignUp.css'

function SignUp() {
    const history = useHistory();
    const [signUpFormState, setSignUpFormState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [signUpError, setSignUpError] = useState("");
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const key = target.name;
        setSignUpFormState(currentState=>({...currentState, [key]: value}));
    }
    const signUpButtonClicked = ()=>{
        if(signUpFormState.name===""){
            setSignUpError("Name can't be empty");
            return;
        }
        else if(signUpFormState.password!==signUpFormState.confirmPassword){
            setSignUpError("Password and confirm password do not match.");
            return;
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(signUpFormState.email, signUpFormState.password)
            .then((result)=>{
               return result.user.updateProfile({displayName: signUpFormState.name});
            })
            .then(async ()=>{
                const currentUser = firebase.auth().currentUser;
                await firebase.firestore().collection("users").doc(`${currentUser.email}`).set({
                    followers: [],
                    following: [],
                    userName: signUpFormState.name
                });
                setSignUpFormState({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });   
                history.push(`/feed`);    
            })
            .catch(function(error) {
                setSignUpError(error.message);
            });
        }
    }
    return (
        <div className="SignUp__container">
            <div className="SignUp__navContainer">
                <div className="SignUp__websiteLogo">
                    TweetX
                </div>
                <div className="SignUp__logInButton">
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
            <div className="SignUp__formTitleWrapper">
                <div className="SignUp__title">
                    Create Account
                </div>
                <div className="SignUp__formContainer">
                    <input name="name" placeholder="Name" value={signUpFormState.name} onChange={handleChange}/>
                    <input name="email"
                    type="email"
                     placeholder="Email" value={signUpFormState.email} onChange={handleChange}/>
                    <input name="password"
                    type="password"
                    placeholder="Password" value={signUpFormState.password} onChange={handleChange}/>
                    <input
                    type="password"
                    name="confirmPassword" placeholder="Confirm Password" value={signUpFormState.confirmPassword} onChange={handleChange}/>
                </div>
                <div className="SignUp__error">
                    {signUpError}
                </div>
                <div className="SignUp__signUpButton" onClick={signUpButtonClicked}>
                    Sign up
                </div>
            </div>
        </div>
    )
}

export default SignUp
