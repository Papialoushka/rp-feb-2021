import { useCallback } from 'react';

import poster from '../../assets/poster.jpg';
import '../../styles/MovieCard.scss';

const MovieCard = ({ movie, onActivateMovie, genres, ...props }) => {
  const onClickMovie = useCallback(() => {
    onActivateMovie(movie);
  }, [movie, onActivateMovie]);

  return (
    <>
      <img onClick={onClickMovie} src={movie.posterPath ? movie.posterPath : poster} alt={movie.alt}/>
      <h3 onClick={onClickMovie}>{movie.title}</h3>
      <p className='release-date'>{new Date(movie.release_date).getFullYear()}</p>
      <p className='genre'>{genres}</p>
      {props.children}
    </>
  );
}

export default MovieCard;
