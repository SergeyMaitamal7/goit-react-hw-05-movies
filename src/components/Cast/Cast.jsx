import { castMovie } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardWrapper, CardMovie, Image, Name } from './Cast.styled';
import NoImage from '../../images/No_poster _image.jpg';
import PropTypes from 'prop-types';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const results = await castMovie(movieId);
        console.log(results.cast);
        setCast(results.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <p>Cast not find</p>
      ) : (
        <CardWrapper>
          {cast.map(({ id, name, profile_path }) => (
            <CardMovie key={id}>
              <Image
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                    : NoImage
                }
                alt={name}
                width="120"
              />
              <Name>{name}</Name>
            </CardMovie>
          ))}{' '}
        </CardWrapper>
      )}
    </>
  );
}

Cast.prototype = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
