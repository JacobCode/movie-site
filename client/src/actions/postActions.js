import { FETCH_POSTS, NEW_POST, UPCOMING_MOVIES, POPULAR_MOVIES, R_MOVIES, GET_MOVIE, GENRES } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const getUpcomingMovies = () => dispatch => {
  console.log('%c GET UPCOMING MOVIES ', 'color: #a530ff');
  fetch('/movies/upcoming')
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      dispatch({
        type: UPCOMING_MOVIES,
        payload: movies
      })
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getPopularMovies = () => dispatch => {
  console.log('%c GET POPULAR MOVIES ', 'color: #a530ff');
  fetch('/movies/popular')
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      dispatch({
        type: POPULAR_MOVIES,
        payload: movies.results
      })
    })
}

export const getRMovies = () => dispatch => {
  console.log('%c GET R MOVIES ', 'color: #a530ff');
  fetch('/movies/ratedr')
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      dispatch({
        type: R_MOVIES,
        payload: movies.results
      })
    })
}

export const getMovie = (id) => dispatch => {
  console.log('%c GET MOVIE ', 'color: #a530ff');
  fetch(`/movie/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      console.log(movie)
      dispatch({
        type: GET_MOVIE,
        payload: movie
      })
    })
}

export const getGenres = () => dispatch => {
  fetch(`/movies/genres`)
    .then((res) => {
      return res.json();
    })
    .then((genres) => {
      console.log(genres.genres)
      dispatch({
        type: GENRES,
        payload: genres.genres
      })
    })
}
