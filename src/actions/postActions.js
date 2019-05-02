import {
  SEARCH_MOVIES,
  UPCOMING_MOVIES,
  POPULAR_MOVIES,
  FUTURE_MOVIES,
  R_MOVIES,
  KIDS_MOVIES,
  GET_MOVIE,
  GET_VIDEOS,
  GENRES,
  GET_IMDB,
  ACTOR_IMAGES,
  GET_ACTORS,
  TOGGLE_MOVIE,
  GET_TV_SHOWS,
  GET_SHOW
} from './types';

import axios from 'axios';

// API info
const API_KEY = 'api_key=b74e9e633dbb1ff6742cdbedaa08687d';
const API_URL = 'https://api.themoviedb.org/3';

export const searchMovies = (query) => dispatch => {
  // Replace spaces with %20 in url
  const querySearch = String(query).replace(/\s/g, '%20');
  axios.get(`${API_URL}/search/movie?${API_KEY}&language=en-US&query=${querySearch}&page=1&include_adult=false`)
    .then((response) => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: response.data.results
      })
    })
}

export const getFutureMovies = () => dispatch => {
  // Get current date for future movies
  var d = new Date();
  var currentDate = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
  axios.get(`${API_URL}/discover/movie?primary_release_date.gte=${currentDate}&primary_release_date.lte=${currentDate}&${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch({
        type: FUTURE_MOVIES,
        payload: response.data.results
      })
    })
}

export const getUpcomingMovies = () => dispatch => {
  axios.get(`${API_URL}/movie/upcoming?${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch({
        type: UPCOMING_MOVIES,
        payload: response.data.results
      })
    })
}

export const getPopularMovies = () => dispatch => {
  axios.get(`${API_URL}/movie/popular?${API_KEY}&sort_by=popularity.desc&language=en-US&page=1`)
    .then((response) => {
      dispatch({
        type: POPULAR_MOVIES,
        payload: response.data.results
      })
    })
}

export const getRMovies = () => dispatch => {
  axios.get(`${API_URL}/discover/movie?certification_country=US&certification=R&${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch({
        type: R_MOVIES,
        payload: response.data.results
      })
    })
}

export const getKidsMovies = () => dispatch => {
  axios.get(`${API_URL}/discover/movie?certification_country=US&certification=G&${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch({
        type: KIDS_MOVIES,
        payload: response.data.results
      })
    })
}

export const getMovie = (id) => dispatch => {
  axios.get(`${API_URL}/movie/${id}?${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch({
        type: GET_MOVIE,
        payload: response.data
      })
    })
}

export const getVideos = (id) => dispatch => {
  axios.get(`${API_URL}/movie/${id}/videos?${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch({
        type: GET_VIDEOS,
        payload: response.data.results
      })
    })
}

export const getGenres = () => dispatch => {
  axios.get(`${API_URL}/genre/movie/list?${API_KEY}`)
    .then((response) => {
      dispatch({
        type: GENRES,
        payload: response.data.genres
      })
    })
}

export const getImdbData = (imdb_id) => dispatch => {
  // OMDB API
  const imdb_key = 'apikey=5d02e9db';
  const imdb_url = 'https://www.omdbapi.com';
  axios.get(`${imdb_url}/?i=${imdb_id}&${imdb_key}`)
    .then((response) => {
      dispatch({
        type: GET_IMDB,
        payload: response.data
      })
    })
}

export const getImages = (images) => dispatch => {
  dispatch({
    type: ACTOR_IMAGES,
    payload: images
  })
}

export const getActors = (actors) => dispatch => {
  if (actors.length > 1 && actors !== undefined) {
    // The MovieDB Person API
    const actor_url = 'https://api.themoviedb.org/3/search/person?';
    const API_KEY = 'api_key=b74e9e633dbb1ff6742cdbedaa08687d';
    const actorImages = [];
    actors.forEach((actor) => {
      actor = actor.split(' ').join('+');
      fetch(`${actor_url}${API_KEY}&query=${actor}`)
        .then((res) => {
          return res.json();
        })
        .then((actor) => {
          if (actor.results[0] !== undefined) {
            actorImages.push(actor.results[0].profile_path)
          }
        })
    })
    dispatch({
      type: GET_ACTORS,
      payload: actorImages
    })
  }
}

export const toggleMovie = (bool) => dispatch => {
  console.log('OPEN')
  dispatch({
    type: TOGGLE_MOVIE,
    payload: bool
  })
}

export const getTvShows = () => dispatch => {
  axios.get(`${API_URL}/discover/tv?${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_original_language=en`)
    .then((response) => {
      dispatch({
        type: GET_TV_SHOWS,
        payload: response.data.results
      })
    })
}

export const getShow = (id) => dispatch => {
  axios.get(`${API_URL}/tv/${id}?${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch({
        type: GET_SHOW,
        payload: response.data
      })
    })
}
