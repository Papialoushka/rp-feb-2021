import poster from '../../assets/poster.jpg';
import '../../styles/MovieCard.scss';
import Button from '../Button/Button';

const MovieCard = ({...props}) => {
  const onClick = (e) => props.onClick && props.onClick(e);

  return (
    <>
      <img src={props.movie.posterPath ? props.movie.posterPath : poster} alt={props.movie.alt}/>
      <h3 onClick={e => onClick(e)}>{props.movie.title}</h3>
      <p className='release-date'>{props.movie.releaseDate}</p>
      <p className='genre'>{props.movie.genre}</p>
      {props.children}
    </>
  );
}

export default MovieCard;
