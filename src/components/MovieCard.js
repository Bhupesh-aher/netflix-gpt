import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    
    if(!posterPath) return null;
    return (
        <div className="w-36 md:w-48 pr-4 ">    
            <img className="opacity-100 hover:opacity-40 cursor-pointer" alt="Movie Card" src={IMG_CDN_URL + posterPath}/>     
        </div>
    )
}


export default MovieCard;