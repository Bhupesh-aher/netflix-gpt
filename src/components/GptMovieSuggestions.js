// import { useSelector } from "react-redux";
// import MovieList from "./MovieList"
// const GptMovieSuggestions = () => {
//     const gpt = useSelector((store) => store.gpt)
//     const {movieResults, movieNames} = gpt;
//     if(!movieNames) return null;
//     return (
//         <div className="p-4 m-4 bg-black text-white bg-opacity-90">
//             {movieNames.map(((movieName, index) =>  
//                  <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
//             ))}
            
            
//         </div> 
//     )
// }

// export default GptMovieSuggestions; 


import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state until results are available
    if (movieNames && movieResults) {
      setIsLoading(false);
    }
  }, [movieNames, movieResults]);

  if (!movieNames) return null; // Handle the case where no data is available yet

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {isLoading ? (
        // Spinner Component
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
      ) : (
        // Movie Lists
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))
      )}
    </div>
  );
};

export default GptMovieSuggestions;
