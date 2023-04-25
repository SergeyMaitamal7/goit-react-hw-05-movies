import { reviewMovies } from 'api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewMovie, setReviewMovie] = useState([]);
  console.log(reviewMovie);
  useEffect(() => {
    const doFetch = async () => {
      try {
        const { results } = await reviewMovies(movieId);
        setReviewMovie(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    doFetch();
  }, [movieId]);

  return (
    <>
      {reviewMovie.length === 0 ? (
        <p>Reviews not find</p>
      ) : (
        reviewMovie.map(({ id, author, content }) => (
          <div key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </div>
        ))
      )}
    </>
  );
}

Reviews.prototype = {
  reviewMovie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
