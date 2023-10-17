import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] px-12 absolute w-full aspect-video text-white bg-gradient-to-r from-black'>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p className='text-lg py-5 w-2/4'>{overview}</p>
        <button className='mr-4 bg-white text-black px-10 py-2 text-xl rounded hover:bg-opacity-80'> Play</button>
        <button className='bg-gray-500 text-white px-10 py-2 text-xl rounded bg-opacity-50'>More Info</button>
    </div>
  )
}
