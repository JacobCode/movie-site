const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const API_KEY = 'api_key=b74e9e633dbb1ff6742cdbedaa08687d'
const API_URL = `https://api.themoviedb.org/3`

// In Theatres
app.get('/movies/theatres', (req, res) => {
    console.log('Show movies in theatres');
    var d = new Date();
    var currentDate = `${d.getFullYear()}-0${d.getMonth()}-0${d.getDate()}`
    axios.get(`${API_URL}/discover/movie/?${API_KEY}&primary_release_date.gte=${currentDate}&language=en-US`)
        .then(function (response) {
            res.json(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        });
})

// Upcoming
app.get('/movies/upcoming', (req, res) => {
    axios.get(`${API_URL}/movie/upcoming?${API_KEY}&language=en-US`)
        .then(function (response) {
            res.json(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        });
})

// Popular Movies
app.get('/movies/popular', (req, res) => {
    // https://api.themoviedb.org/3/movie/popular?api_key=b74e9e633dbb1ff6742cdbedaa08687d
    axios.get(`${API_URL}/movie/popular?${API_KEY}&sort_by=popularity.desc&language=en-US&page=1`)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})

// R Movies
app.get('/movies/ratedr', (req, res) => {
    axios.get(`${API_URL}/discover/movie/?certification_country=US&certification=R&${API_KEY}&language=en-US&page=1`)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
})

// Kids Movies
app.get('/movies/kids', (req, res) => {
    axios.get(`${API_URL}/discover/movie/?certification_country=US&certification=G&${API_KEY}&language=en-US&page=1`)
        .then(function( response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})

// Get Movie (individual movie)
app.get('/movie/:id', (req, res) => {
    axios.get(`${API_URL}/movie/${req.params.id}?${API_KEY}&language=en-US&page=1`)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})

// Videos
app.get('/movies/videos/:id', (req, res) => {
    axios.get(`${API_URL}/movie/${req.params.id}/videos?${API_KEY}&language=en-US`)
        .then(function (response) {
            res.json(response.data.results);
        })
        .catch(function(error) {
            console.log(error);
        })
})

// Genres
app.get('/movies/genres', (req, res) => {
    axios.get(`${API_URL}/genre/movie/list?${API_KEY}`)
        .then(function (response) {
            res.json(response.data.genres);
        })
        .catch(function (error) {
            console.log(error);
        })
})

// Imdb Data
app.get('/imdb/:id', (req, res) => {
    const imdb_key = 'apikey=5d02e9db';
    const imdb_url = 'http://www.omdbapi.com';
    axios.get(`${imdb_url}/?i=${req.params.id}&${imdb_key}`)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('\x1b[32m', `Server running on port ${port}`));