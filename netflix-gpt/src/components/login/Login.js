import React, { useState, useRef } from 'react'
import Header from '../header/Header'
import { checkValideDataSignIn } from '../../utils/validate'
import { checkValideDataSignUp } from '../../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null)
    const email =  useRef(null);
    const password =  useRef(null);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
        //validate form data
        const message = isSignInForm ? checkValideDataSignIn(email.current.value, password.current.value) : checkValideDataSignUp(email.current.value, password.current.value, name.current.value);
        setErrorMessage(message)
        // sign in / sign up
        
    }

  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-90">
            <h1 className='font-bold text-3xl pt-0 pb-4 m-2'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm &&
            <input type='text' ref={name} placeholder='Full Name' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            }
            <input type='text' ref={email} placeholder='Email Adress' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            <input type='password' ref={password} placeholder='Password' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            <p className='m-2 text-red-500'>{errorMessage}</p>
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