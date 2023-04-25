import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MoviesName, Image } from './MoviesList.styled';
import PropTypes from 'prop-types';
import NoPoster from '../../images/No_poster _image.jpg';

export default function MoviesList({ movies }) {
  const location = useLocation();

  console.log(movies);
  return (
    <Container>
      {movies.map(({ id, title, name, poster_path }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
                  : NoPoster
              }
              alt={title}
            />
            <MoviesName>{title || name}</MoviesName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
}

MoviesList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
