import {
  SEARCH_MOVIES,
  FETCH_POSTS,
  NEW_POST,
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
} from './types';

const API_KEY = 'api_key=b74e9e633dbb1ff6742cdbedaa08687d';
const API_URL = 'https://api.themoviedb.org/3';

export const searchMovies = (query) => dispatch => {
  const querySearch = String(query).replace(/\s/g, '%20');
  fetch(`${API_URL}/search/movie?${API_KEY}&language=en-US&query=${querySearch}&page=1&include_adult=false`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response.results);
      dispatch({
        type: SEARCH_MOVIES,
        payload: response.results
      })
    })
}

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
  fetch(`/movie/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((movie) => {
      dispatch({
        type: GET_MOVIE,
        payload: movie
      })
    })
}

export const getVideos = (id) => dispatch => {
  fetch(`/movies/videos/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((videos) => {
      dispatch({
        type: GET_VIDEOS,
        payload: videos
      })
    })
}

export const getGenres = () => dispatch => {
  fetch(`/movies/genres`)
    .then((res) => {
      return res.json();
    })
    .then((genres) => {
      dispatch({
        type: GENRES,
        payload: genres
      })
    })
}

export const getImdbData = (imdb_id) => dispatch => {
  fetch(`/imdb/${imdb_id}`)
    .then((res) => {
      return res.json();
    })
    .then((imdb_data) => {
      dispatch({
        type: GET_IMDB,
        payload: imdb_data
      })
    })
}

export const getImages = (images) => dispatch => {
  // console.log(images)
  dispatch({
    type: ACTOR_IMAGES,
    payload: images
  })
}

export const getActors = (actors) => dispatch => {
  if (actors.length > 1 && actors !== undefined) {
    const actor_url = 'http://api.themoviedb.org/3/search/person?';
    const API_KEY = 'api_key=b74e9e633dbb1ff6742cdbedaa08687d';
    const actorImages = [];
    actors.forEach((actor) => {
      actor = actor.split(' ').join('+');
      fetch(`${actor_url}${API_KEY}&query=${actor}`)
        .then((res) => {
          return res.json();
        })
        .then((actor) => {
          actorImages.push(actor.results[0].profile_path)
        })
    })
    dispatch({
      type: GET_ACTORS,
      payload: actorImages
    })
  }
}

export const toggleMovie = (bool) => dispatch => {
  dispatch({
    type: TOGGLE_MOVIE,
    payload: bool
  })
}
