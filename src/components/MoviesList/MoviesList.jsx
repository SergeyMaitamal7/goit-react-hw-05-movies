import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MoviesName, Image } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, title, name, poster_path }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
              alt={title}
            />
            <MoviesName>{title || name}</MoviesName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
}
