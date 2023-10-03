import React, { useState } from 'react'
import Header from '../header/Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
        console.log(isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''></img>
        </div>
        <form className="absolute w-4/12 bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-90">
            <h1 className='font-bold text-3xl pt-0 pb-4 m-2'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm &&
            <input type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            }
            <input type='text' placeholder='Email Adress' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            <input type='password' placeholder='Password' className='p-4 m-2 w-full bg-gray-800 rounded-lg'/>
            <button className='p-4 mx-2 mt-8 mb-2 bg-red-600 w-full rounded-lg'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='m-6 cursor-pointer hover:underline' onClick={toggleSignInForm}>
            { isSignInForm ? "New to Netflix? Sign Up" : "Already Registered? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login