import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMoviews =()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies =async()=>{
        const URL= "https://api.themoviedb.org/3/movie/now_playing?page=1"
        const data = await fetch(URL, API_OPTIONS);
        const response = await data.json()
        dispatch(addNowPlayingMovies(response.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMoviews;

