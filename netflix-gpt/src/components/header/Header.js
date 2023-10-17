import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const handleSignOut =()=>{
      signOut(auth).then(() => {
      }).catch((error) => {
        navigate("/error")
      });

  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
      });   
},[])

  return (
    <div className='absolute flex w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix'></img>
      { user && (<div className='flex items-center'>
        <img className="w-16 h-16 rounded-full p-1" src={user?.photoURL}></img>
        <button className='font-bold text-white ml-2 bg-black p-2 rounded-md' onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header