import { reviewMovies } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewMovie, setReviewMovie] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const {results} = await reviewMovies(movieId);
        setReviewMovie(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, []);
  if (!reviewMovie) return;
  return (
    <>
      {reviewMovie.map(({ id, author, content }) => (
        <div key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
}
