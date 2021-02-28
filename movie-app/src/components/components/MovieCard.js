import poster from './../assets/poster.jpg';
import './../styles/MovieCard.scss';

const MovieCard = (props) => {
  return (
    <li>
      <img src={props.movie.posterPath ? props.movie.posterPath : poster} alt={props.movie.alt}/>
      <h3>{props.movie.title}</h3>
      <p className='release-date'>{props.movie.releaseDate}</p>
      <p className='genre'>{props.movie.genre}</p>
    </li>
  );
}

export default MovieCard;
