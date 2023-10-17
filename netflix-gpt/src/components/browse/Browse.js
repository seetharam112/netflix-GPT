import React from 'react'
import Header from '../header/Header'
import useNowPlayingMoviews from '../../hooks/useNowPlayingMovies'
import { MainContainer } from '../containers/MainContainer';
import { SecondaryContainer } from '../containers/SecondaryContainer';

const Browse = () => {
  useNowPlayingMoviews();
  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse