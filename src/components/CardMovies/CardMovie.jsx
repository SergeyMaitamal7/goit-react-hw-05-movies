import { CardWrapper,DetailsWrapper, CardDetails, Image } from './CardMovie.styled';
import NoPoster from '../../images/No_poster _image.jpg';
import PropTypes from 'prop-types';

export default function CardMovie({ moviesDetails }) {
  const { title, genres, release_date, overview, vote_average, poster_path } =
    moviesDetails;

  const genresMovie = genres.map(genre => genre.name + ' , ');
  const dateMovie = release_date.slice(0, 4);
  const score = vote_average.toFixed(1);

  return (
    <>
      <CardWrapper>
        <Image
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
              : NoPoster
          }
          alt={title || 'No poster'}
        />

        <DetailsWrapper>
          <h2>
            {title} : <span>{dateMovie ? `${dateMovie}` : ''}</span>
          </h2>
          <CardDetails>User score: {score ? score : ''}</CardDetails>
          <h2>Overview</h2>
          <CardDetails> {overview}</CardDetails>
          <h2>Genres</h2>
          <CardDetails> {genresMovie}</CardDetails>
        </DetailsWrapper>
      </CardWrapper>
    </>
  );
}

CardMovie.prototype = {
  movieDetails: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      genres: PropTypes.object,
      release_date: PropTypes.string,
      overview: PropTypes.string,
      vote_average: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
