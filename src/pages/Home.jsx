import { trendingMovies } from 'api/Api';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const movies = await trendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
}
