import CardMovie from 'components/CardMovies/CardMovie';
import { searchMovieDetails } from 'api/Api';
import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

export default function MoviesDetails({ locations }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      if (!movieId) {
        return;
      }
      try {
        const results = await searchMovieDetails(movieId);
        if (results !== '') {
          setMovies(results);
        } else {
          return alert(`Movies ${movies} is not found`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, [movieId]);

  if (!movies) return;

  return (
    <>
      <Link to={backLinkHref}>
        <h2>Back to Movies</h2>
      </Link>
      {movies && <CardMovie moviesDetails={movies} />}
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            <h3>Cast</h3>
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            <h3>Reviews</h3>
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
