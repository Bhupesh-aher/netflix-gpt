import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {
 
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo)


    // Fetch trailer video and updating the store with trailer video data

    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        
        const filterData = json.results.filter((video) => video.type === "Trailer")
        // console.log(filterData);
        
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);

        dispatch(addTrailerVideo(trailer));
         
    }

    useEffect(() => {
      !trailerVideo && getMovieVideo();
    }, [])


}


export default useMovieTrailer;