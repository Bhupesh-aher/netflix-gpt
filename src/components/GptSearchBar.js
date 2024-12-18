import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { chatSession } from "../utils/AIModel";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json(); 
        return json.results;
    }

    const handleGptSearchClick = async() => {
        const text = searchText.current.value;
        // console.log(text);
        // make an API call to GPT API and get Movie suggestions
        const textQuery = "Act as a movie Recommendation system and suggest some movies for the query : " + text + "only give me names of 5 movies comma separated" 

        const result = await chatSession.sendMessage(textQuery)
        
        // if(!result){
        //     // TODO: write error handling
        // }
        
        // console.log(result?.response?.text());
        
        const gptMoviesText = result?.response?.text();
        
        
        const gptMovies = JSON.parse(`[${gptMoviesText}]`);
        // console.log("Parsed Movies Array:", gptMovies);

        if (!Array.isArray(gptMovies) || gptMovies.length === 0) {
            // console.error("gptMovies is not a valid array");
            return; // Exit if the array is not valid
        }

       
        
        const gpt = gptMovies;
        // console.log(gpt);
        const gpt2 = gpt[0].movies;
        // console.log(gpt2);
        
        
        
        
        // for each movie i will search TMDB API
        const promiseArray = gpt2.map((movie) => searchMovieTMDB(movie))
        // console.log(promiseArray);
        
        // [Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
 
        dispatch(addGptMovieResult({movieNames: gpt2, movieResults: tmdbResults}));
        
         
        
    }

    return (
         <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className="w-11/12 md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input 
                ref={searchText}
                className="p-4 m-4 col-span-9" type="text" 
                placeholder={lang[langKey].gptSearchPlaceholder}/>

                <button className="px-1 md:py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
                onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                    </button>
            </form>
         </div>
    )
}

export default GptSearchBar;