import { CardWrapper, CardDetails, Image } from './CardMovie.styled';
export  default function CardMovie ({ moviesDetails }) {
  const { title, genres, release_date, overview, vote_average, poster_path } = moviesDetails;
  const genresMovie = genres.map(genre => genre.name + ' , ');
  return (
    <>
      <CardWrapper>
      <Image
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}` || '../../images/No_poster _image.jpg'}
              alt={title || 'No poster'}
            />
        <h2>Title</h2>
        <CardDetails>
          {title} : <span>{release_date.slice(0, 4) || ''}</span>
        </CardDetails>
        <CardDetails> User score: {vote_average}</CardDetails>
        <h2>Overview</h2>
        <CardDetails> {overview}</CardDetails>
        <h2>Genres</h2>
        <CardDetails> {genresMovie}</CardDetails>
      </CardWrapper>
    </>
  );
};
