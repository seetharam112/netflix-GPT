import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user);
  const handleSignOut =()=>{
      signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        navigate("/error")
      });

  }
  return (
    <div className='absolute flex w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix'></img>
      { user && (<div className='flex items-center'>
        <img className="w-16 h-16 rounded-full p-1" src={user?.photoURL}></img>
        <button className='font-bold text-white ml-2 bg-black p-2 rounded-md' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header