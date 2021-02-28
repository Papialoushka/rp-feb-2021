import MovieCard from './MovieCard';
import {movies} from '../data';
import ResultsCount from './ResultsCount';

const MoviesList = () => {
  return (
    <>
      <h2 className='results-count'>
        {ResultsCount(movies)}
      </h2>
      <ul className='movies-list'>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </ul>
    </>
  )
}

export default MoviesList;
