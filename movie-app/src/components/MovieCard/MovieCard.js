import { useCallback } from 'react';

import poster from '../../assets/poster.jpg';
import '../../styles/MovieCard.scss';

const MovieCard = ({ movie, onActivateMovie, genres, ...props }) => {
  const onClickMovie = useCallback(() => {
    onActivateMovie(movie);
  }, [movie, onActivateMovie]);

  const getDate = useCallback((date) => {
    return new Date(date).getFullYear();
  }, []);

  return (
    <>
      <img onClick={onClickMovie} src={movie.posterPath ? movie.posterPath : poster} alt={movie.alt}/>
      <h3 onClick={onClickMovie}>{movie.title}</h3>
      <p className='release-date'>{getDate(movie.release_date)}</p>
      <p className='genre'>
        {
          genres.map(genre => (
            <span>
              {genre}
            </span>
          ))
        }
      </p>
      {props.children}
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  onActivateMovie: PropTypes.func.isRequired,
}

export {
  MovieCard
};
