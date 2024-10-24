import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";




const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    

    return (
        <div>
            <Header/>
            {
                showGptSearch ? ( 
                <GptSearch/> 
            ): (
            <> 
                <MainContainer/>
                <SecondaryContainer/>
            </>
            )}
             
           
        </div>
    )
}


export default Browse;