import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './components/VideoTitle';
import { VideoBackgound } from './components/VideoBackgound';

export const MainContainer = () => {
  const movies = useSelector(store=>store.movies?.nowPlayingMovies);
  if(movies == null) return;
  const mainMovie = movies[0]
  const {title, overview, id} = mainMovie
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackgound movieId={id}/>
    </div>
  )
}
