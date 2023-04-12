import { castMovie } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardWrapper, CardMovie, Image, Name } from './Cast.styled';
import NoImage from '../../images/No_poster _image.jpg';

export default function Cast() {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setCast] = useState(null);
  console.log(cast);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const results = await castMovie(movieId);
        setCast(results.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, []);
  if (!cast) return;
  return (
    <>
      {' '}
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
    </>
  );
}
