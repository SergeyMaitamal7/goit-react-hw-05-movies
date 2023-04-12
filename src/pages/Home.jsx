import { trendingMovies } from 'api/Api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setIsLoading(true);
      try {
        const movies = await trendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    doFetch();
  }, []);

  return (
    <>
      <h2>Trending movie</h2>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
