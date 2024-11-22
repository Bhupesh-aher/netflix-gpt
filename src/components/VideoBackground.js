// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";


// const VideoBackground = ({movieId}) => {

//     useMovieTrailer(movieId);
//     const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

//     return (
//         <div className="w-screen">
//             <iframe 
//             className="w-screen aspect-video" 
//             src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=y1PKru650Ca5cFit" + "?&autoplay=1&mute=1"} 
//             title="YouTube video player"  
//             allow="accelerometer; 
//             autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//             >
//             </iframe>
//         </div>
//     )
// }

// export default VideoBackground;


import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useState } from "react";

const VideoBackground = ({ movieId }) => {
    // Use the custom hook to fetch the trailer
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    
    // State to control the visibility of the iframe
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set loading state based on trailerVideo availability
        if (trailerVideo) {
            setIsLoading(false); // Hide loading message when video is ready
        }
    }, [trailerVideo]);

    return (
        <div className="w-screen">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-white text-xl">Loading trailer...</p>
                </div>
            ) : (
                trailerVideo && ( // Ensure trailerVideo exists before rendering iframe
                    <iframe
                        className="w-screen aspect-video"
                        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                )
            )}
        </div>
    );
};

export default VideoBackground;
