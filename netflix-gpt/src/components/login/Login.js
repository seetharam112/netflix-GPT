import React, { useState, useRef } from 'react'
import Header from '../header/Header'
import { checkValideDataSignIn } from '../../utils/validate'
import { checkValideDataSignUp } from '../../utils/validate'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [sucessMessage, setSucessMessage] = useState(null)

    const name = useRef(null)
    const email =  useRef(null);
    const password =  useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
        //validate form data
        const message = isSignInForm ? checkValideDataSignIn(email.current.value, password.current.value) : checkValideDataSignUp(email.current.value, password.current.value, name.current.value);
        setErrorMessage(message)
        if (message) return;
        // sign in / sign up
        if(!isSignInForm){
            //signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/87293672?s=400&u=b2a2a43b071621aececd8ff8342fefd5be7e777c&v=4"
                      }).then(() => {
                        setSucessMessage("Sucessfully Registered")
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                });

        }else{
            // Signed in 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setSucessMessage("Sucessfully loged in")
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                });
        }
    }

  return (
    <div>
        <Header/>
        <div className="sm:absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="sm:absolute w-100 md:w-100 bg-black p-6 sm:p-12 sm:my-36 mx-auto left-0 right-0 text-white bg-opacity-90 sm:w-4/12">
            <h1 className='font-bold text-3xl pt-0 pb-4 m-2'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm &&
            <input type='text' ref={name} placeholder='Full Name' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            }
            <input type='text' ref={email} placeholder='Email Adress' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            <input type='password' ref={password} placeholder='Password' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            
            {errorMessage ? 
            <p className='m-2 text-red-500'>{errorMessage}</p> : 
            <p className='m-2 text-green-500'>{sucessMessage}</p>}

            <button className='p-4 mx-2 mt-8 mb-2 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>
                { isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='m-6 cursor-pointer hover:underline' onClick={toggleSignInForm}>
            { isSignInForm ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login