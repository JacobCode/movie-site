import {
  SEARCH_MOVIES,
  UPCOMING_MOVIES,
  POPULAR_MOVIES,
  R_MOVIES,
  GET_MOVIE,
  GET_VIDEOS,
  GENRES,
  GET_IMDB,
  ACTOR_IMAGES,
  GET_ACTORS,
  TOGGLE_MOVIE
} from '../actions/types';

const initialState = {
  searchOutput: [],
  moviesInTheatres: [],
  upcomingMovies: [],
  popularMovies: [],
  rMovies: [],
  chosenMovie: {},
  currentVideos: [],
  currentImdbData: {},
  actorImages: '',
  genres: [],
  actors: [],
  isToggled: false
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
    case GET_VIDEOS:
      return {
        ...state,
        currentVideos: action.payload
      }
    case GENRES:
      return {
        ...state,
        genres: action.payload
      }
    case GET_IMDB:
      return {
        ...state,
        currentImdbData: action.payload
      }
    case ACTOR_IMAGES:
      return {
        ...state,
        actorImages: action.payload
      }
    case GET_ACTORS:
      return {
        ...state,
        actors: action.payload
      }
    case TOGGLE_MOVIE:
      return {
        ...state,
        isToggled: action.payload
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        searchOutput: action.payload
      }
    default:
      return state;
  }
}
