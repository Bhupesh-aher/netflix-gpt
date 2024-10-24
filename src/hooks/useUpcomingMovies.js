import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies} from "../utils/movieSlice"


const useUpcomingMovies = () => {

    // Fetching the data from TMDB and updating the store

    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movies.upComingMovies)


    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpComingMovies(json.results))
    }

    useEffect(() =>{
       !upComingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;