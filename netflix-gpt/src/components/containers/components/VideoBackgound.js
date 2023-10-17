import React from 'react'
import useVideoTrailer from '../../../hooks/useVideoTrailer'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export const VideoBackgound = ({movieId}) => {
    useVideoTrailer(movieId)
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo?.key)
  return (
    <div className=''>
        <iframe
        className='w-full aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo+ "?autoplay=1&mute=1"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
    
  )
}
