import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useVideoTrailer =(movieId)=>{
    const URL = `https://api.themoviedb.org/3/movie/${movieId}}/videos?language=en-US`
    const dispatch = useDispatch()
    const getMovieVideo = async()=>{
        const data = await fetch(URL, API_OPTIONS);
        const response = await data.json();
        const filerData = response.results.filter((video)=> video.type == "Trailer");
        const trailer = filerData.length ? filerData[0] :response.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieVideo()
    },[])
}

export default useVideoTrailer;