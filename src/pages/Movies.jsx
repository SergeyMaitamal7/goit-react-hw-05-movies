import SearchBar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovie } from 'api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const doFetch = async () => {
      if (movieName === '') {
        return;
      }
      setIsLoading(true);
      try {
        const { results } = await searchMovie(movieName);
        if (results.length !== 0) {
          setMovies(results);
        } else {
          Notify.failure(`Movies ${movieName} is not found`);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    doFetch();
  }, [movieName]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
