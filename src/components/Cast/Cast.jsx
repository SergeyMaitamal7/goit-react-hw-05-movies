import { castMovie } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardWrapper, Image, Name } from './Cast.styled';

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
      {cast.map(({ id, name, profile_path }) => (
        <CardWrapper key={id}>
          <Image
            src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path} || '../../images/No_image.png`}
            alt={name || 'name movie'}
          />
          <Name>{name}</Name>
        </CardWrapper>
      ))}
    </>
  );
}
