import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.upComingMovies)
    
    if(movies === null) return;

    // const mainMovie = movies[5];
    // const mainMovie = movies[5];

    // console.log(mainMovie);

     // Randomly select a movie from the now playing movies
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex]; // Get a random movie object

    const {original_title, overview, id} = mainMovie;
    
 

    return (
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;