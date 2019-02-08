import { UPCOMING_MOVIES, POPULAR_MOVIES, R_MOVIES, GET_MOVIE, GENRES } from '../actions/types';

const initialState = {
  moviesInTheatres: [],
  upcomingMovies: [],
  popularMovies: [],
  rMovies: [],
  chosenMovie: {},
  genres: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload
      }
    case POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      }
    case R_MOVIES:
      return {
        ...state,
        rMovies: action.payload
      }
    case GET_MOVIE:
      return {
        ...state,
        chosenMovie: action.payload
      }
    case GENRES:
      return {
        ...state,
        genres: action.payload
      }
    default:
      return state;
  }
}
