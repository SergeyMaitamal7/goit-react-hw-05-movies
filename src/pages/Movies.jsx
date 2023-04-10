import SearchBar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovie } from 'api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const doFetch = async () => {
      if (movieName === '') {
        return;
      }
      try {
        const { results } = await searchMovie(movieName);
        console.log(results);
        if (results.length !== 0) {
          setMovies(results);
        } else {
          Notify.failure(`Movies ${movieName} is not found`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, [movieName]);

  const handleFormSubmit = query => {
    console.log(query);
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}
