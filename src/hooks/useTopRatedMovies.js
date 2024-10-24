import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedVideo } from "../utils/movieSlice"


const useTopRatedMovies = () => {

    // Fetching the data from TMDB and updating the store

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedVideo(json.results))
    }

    useEffect(() =>{
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;