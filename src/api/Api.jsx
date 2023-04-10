// import axios from 'axios';
const KEY = '022c68239ef1f98dfe9e02a4549079c6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const trendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/all/week?api_key=${KEY}`);
  const movies = await response.json();
  return movies;
};

export const searchMovie = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US`
  );
  const movies = await response.json();
  return movies;
};

export const searchMovieDetails = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
  const movies = await response.json();
  return movies;
};

export const castMovie = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  const movies = await response.json();
  return movies;
};

export const reviewMovies = async id => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );
  const movies = await response.json();
  return movies;
};
