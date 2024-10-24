import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        upComingMovies: null,
        topRatedMovies: null,
        
    },

    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedVideo : (state, action) => {
            state.topRatedMovies = action.payload;
        },
       
    }
})


export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpComingMovies, addTopRatedVideo } = movieSlice.actions; 

export default movieSlice.reducer;