import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header/> 
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}


export default Browse;