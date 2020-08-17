import React, {useState, useRef, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import firebase from '../firebaseConfig';
import FeedContext from '../contexts/FeedContext'
import '../styles/Login.css'
function Login() {
    const history = useHistory();
    const iconRef = useRef();
    const feedContext = useContext(FeedContext);
    const [logInFormState, setLogInFormState] = useState({
        email: "",
        password: ""
    })
    const [logInError, setLogInError] = useState("");
    const [visibility, setVisibility] = useState(false);
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const key = target.name;
        setLogInFormState(currentState=>({...currentState, [key]: value}));
    }
    const handleIconClicked = (e)=>{
        iconRef.current.textContent = iconRef.current.textContent === "visibility" ? "visibility_off" : "visibility";
        iconRef.current.textContent === "visibility_off" ? setVisibility(true) : setVisibility(false);
    }
    const loginButtonClicked = (e)=>{
        if(logInFormState.email===""){
            setLogInError("Email field can't be empty");
            return;
        }
        else if(logInFormState.password===""){
            setLogInError("Password field can't be empty")
            return;
        }
        else{
            firebase.auth().signInWithEmailAndPassword(logInFormState.email, logInFormState.password)
            .then(()=>{
                setLogInFormState({
                    email: "",
                    password: ""
                });   
                feedContext.feedDispatch({type: "LOGIN_BYPASS_ROUTE_GUARD"});
                history.push(`/feed`);
            })
            .catch(function(error) {
                setLogInError(error.message);
              });   
        }
    }
    return (
        <div className="LogIn__container">
             <div className="LogIn__navContainer">
                <div className="LogIn__websiteLogo">
                    TweetX
                </div>
                <div className="LogIn__signUpButton">
                    <Link to="/signup">
                        Create Account
                    </Link>
                </div>
            </div>
            <div className="LogIn__formTitleWrapper">
                <div className="LogIn__title">
                    Login
                </div>
                <div className="LogIn__formContainer">
                    <input name="email" 
                    type="email"
                    placeholder="Email" value={logInFormState.email} onChange={handleChange}/>
                    <span className="LogIn__passwordIconWrapper">
                        <input name="password" 
                        type={visibility?"text":"password"} placeholder="Password" value={logInFormState.password} 
                        onChange={handleChange}/>
                        <Icon style={{fontSize: "1.4rem", cursor: "pointer"}} className="LogIn__visibilityIcon" ref={iconRef} onClick={handleIconClicked}>visibility</Icon>
                    </span>
                </div>
                <div className="LogIn__error">
                    {logInError}
                </div>
                <div className="LogIn__logInButton" onClick={loginButtonClicked}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Login
